import { useState, useEffect } from 'react';

let cachedTransparentLogo: string | null = null;
let pendingPromise: Promise<string> | null = null;

function processBlackBackgroundRemoval(src: string): Promise<string> {
  if (cachedTransparentLogo) {
    return Promise.resolve(cachedTransparentLogo);
  }
  if (pendingPromise) {
    return pendingPromise;
  }

  pendingPromise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(src);
          return;
        }

        ctx.drawImage(img, 0, 0, w, h);
        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;

        let minX = w;
        let minY = h;
        let maxX = 0;
        let maxY = 0;

        // Unmix black background from golden emblem pixels
        const lowThreshold = 20;
        const highThreshold = 135;

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            const maxC = Math.max(r, g, b);

            if (maxC <= lowThreshold) {
              data[idx + 3] = 0;
            } else if (maxC < highThreshold) {
              const t = (maxC - lowThreshold) / (highThreshold - lowThreshold);
              const smoothAlpha = t * t * (3 - 2 * t);
              const unmix = Math.max(0.2, smoothAlpha);

              data[idx] = Math.min(255, Math.round(r / unmix));
              data[idx + 1] = Math.min(255, Math.round(g / unmix));
              data[idx + 2] = Math.min(255, Math.round(b / unmix));
              data[idx + 3] = Math.round(smoothAlpha * 255);
            } else {
              data[idx + 3] = 255;
            }

            if (data[idx + 3] > 20) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);

        // Tightly crop transparent margins so the emblem aligns cleanly
        if (maxX > minX && maxY > minY) {
          const pad = 4;
          const cropX = Math.max(0, minX - pad);
          const cropY = Math.max(0, minY - pad);
          const cropW = Math.min(w - cropX, maxX - minX + 1 + pad * 2);
          const cropH = Math.min(h - cropY, maxY - minY + 1 + pad * 2);

          const outCanvas = document.createElement('canvas');
          outCanvas.width = cropW;
          outCanvas.height = cropH;
          const outCtx = outCanvas.getContext('2d');
          if (outCtx) {
            outCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
            const resultUrl = outCanvas.toDataURL('image/png');
            cachedTransparentLogo = resultUrl;
            resolve(resultUrl);
            return;
          }
        }

        const fallbackUrl = canvas.toDataURL('image/png');
        cachedTransparentLogo = fallbackUrl;
        resolve(fallbackUrl);
      } catch {
        resolve(src);
      }
    };

    img.onerror = () => resolve(src);
    img.src = src;
  });

  return pendingPromise;
}

export function useTransparentLogo(src: string) {
  const [logoSrc, setLogoSrc] = useState<string>(cachedTransparentLogo || src);
  const [isProcessed, setIsProcessed] = useState<boolean>(Boolean(cachedTransparentLogo));

  useEffect(() => {
    let mounted = true;
    processBlackBackgroundRemoval(src).then((processed) => {
      if (mounted) {
        setLogoSrc(processed);
        setIsProcessed(processed !== src);
      }
    });
    return () => {
      mounted = false;
    };
  }, [src]);

  return { logoSrc, isProcessed };
}

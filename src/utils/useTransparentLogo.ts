import { useState, useEffect } from 'react';

const cachedLogos = new Map<string, string>();
const pendingPromises = new Map<string, Promise<string>>();

function processLogoTransparency(src: string): Promise<string> {
  const cached = cachedLogos.get(src);
  if (cached) {
    return Promise.resolve(cached);
  }
  const existingPromise = pendingPromises.get(src);
  if (existingPromise) {
    return existingPromise;
  }

  const promise = new Promise<string>((resolve) => {
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

        // Inspect corner pixels to see if the PNG already has a transparent background
        const tlIdx = (2 * w + 2) * 4;
        const trIdx = (2 * w + Math.max(0, w - 3)) * 4;
        const blIdx = (Math.max(0, h - 3) * w + 2) * 4;
        const cornerAlpha = Math.max(data[tlIdx + 3], data[trIdx + 3], data[blIdx + 3]);
        const cornerMaxRGB = Math.max(data[tlIdx], data[tlIdx + 1], data[tlIdx + 2]);
        const cornerMinRGB = Math.min(data[tlIdx], data[tlIdx + 1], data[tlIdx + 2]);

        let minX = w;
        let minY = h;
        let maxX = 0;
        let maxY = 0;

        const isAlreadyTransparent = cornerAlpha < 30;
        const isDarkBackground = !isAlreadyTransparent && cornerMaxRGB < 60;
        const isLightBackground = !isAlreadyTransparent && cornerMinRGB > 220;

        const lowThreshold = 20;
        const highThreshold = 135;

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            if (isDarkBackground) {
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
            } else if (isLightBackground) {
              const minC = Math.min(r, g, b);
              const maxC = Math.max(r, g, b);
              if (minC > 235 && maxC - minC < 20) {
                data[idx + 3] = 0;
              }
            }

            if (data[idx + 3] > 20) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (isDarkBackground || isLightBackground) {
          ctx.putImageData(imageData, 0, 0);
        }

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
            cachedLogos.set(src, resultUrl);
            pendingPromises.delete(src);
            resolve(resultUrl);
            return;
          }
        }

        const fallbackUrl = canvas.toDataURL('image/png');
        cachedLogos.set(src, fallbackUrl);
        pendingPromises.delete(src);
        resolve(fallbackUrl);
      } catch {
        pendingPromises.delete(src);
        resolve(src);
      }
    };

    img.onerror = () => {
      pendingPromises.delete(src);
      resolve(src);
    };
    img.src = src;
  });

  pendingPromises.set(src, promise);
  return promise;
}

export function useTransparentLogo(src: string) {
  const [logoSrc, setLogoSrc] = useState<string>(cachedLogos.get(src) || src);
  const [isProcessed, setIsProcessed] = useState<boolean>(cachedLogos.has(src));

  useEffect(() => {
    let mounted = true;
    processLogoTransparency(src).then((processed) => {
      if (mounted) {
        setLogoSrc(processed);
        setIsProcessed(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, [src]);

  return { logoSrc, isProcessed };
}

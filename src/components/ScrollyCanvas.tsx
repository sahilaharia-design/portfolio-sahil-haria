"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

const padZero = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT) {
        setImagesLoaded(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${padZero(i, 3)}_delay-0.066s.webp`;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Ensure it still resolves if frames are missing
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[index];

    if (!canvas || !ctx || !img) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Draw first frame when loaded or resized
  useEffect(() => {
    if (!imagesLoaded) return;

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawImage(Math.round(frameIndex.get()));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // initial draw

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [imagesLoaded]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      drawImage(Math.round(latest));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#121212]/60 pointer-events-none" />
        
        {mounted && <Overlay progress={scrollYProgress} />}

        {/* Loading state indicator */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212]/80 z-50 backdrop-blur-sm pointer-events-none">
            <div className="text-white/50 text-sm animate-pulse tracking-widest uppercase">
              Loading Experience...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

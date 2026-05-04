"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedFramesRef = useRef<boolean[]>(Array(FRAME_COUNT).fill(false));
  const [sequenceReady, setSequenceReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    loadedFramesRef.current = Array(FRAME_COUNT).fill(false);

    const checkLoaded = (index: number) => {
      loadedFramesRef.current[index] = true;

      if (index === 0) {
        setSequenceReady(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.onload = () => checkLoaded(i);
      img.onerror = () => checkLoaded(i); // Avoid blocking the opening if a frame is missing.
      img.src = `/sequence/frame_${padZero(i, 3)}_delay-0.066s.webp`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  const drawImage = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let safeIndex = index;

    if (!loadedFramesRef.current[safeIndex]) {
      const previousLoaded = loadedFramesRef.current.lastIndexOf(true, safeIndex);
      const nextLoaded = loadedFramesRef.current.findIndex((loaded, idx) => loaded && idx > safeIndex);
      safeIndex = previousLoaded >= 0 ? previousLoaded : nextLoaded;
    }

    const img = imagesRef.current[safeIndex];

    if (!canvas || !ctx || !img || !img.naturalWidth || !img.naturalHeight) return;

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
  }, []);

  // Draw first frame when loaded or resized
  useEffect(() => {
    if (!sequenceReady) return;

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
  }, [sequenceReady, frameIndex, drawImage]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (sequenceReady) {
      drawImage(Math.round(latest));
    }
  });

  return (
    <div ref={containerRef} id="story" className="relative h-[800vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#121212]/60 pointer-events-none" />
        <div className="hero-aura pointer-events-none absolute left-1/2 top-[45%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.18)_0%,rgba(110,231,183,0.10)_32%,transparent_68%)] blur-2xl md:h-[44rem] md:w-[44rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent)]" />

        {/* Designed corner mask for the source-video mark. */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-[8] h-28 w-48 bg-[radial-gradient(circle_at_100%_100%,rgba(18,18,18,0.96)_0%,rgba(18,18,18,0.88)_38%,rgba(18,18,18,0.48)_68%,transparent_100%)] md:h-36 md:w-64" />
        <div className="pointer-events-none absolute bottom-5 right-6 z-[9] hidden h-9 w-9 animate-[float-slow_6s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/35 backdrop-blur-md md:flex">
          S
        </div>
        
        <Overlay progress={scrollYProgress} />

        {/* Loading state indicator */}
        {!sequenceReady && (
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

"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: Hero / Opening (0 - 0.14)
  const opacity1 = useTransform(progress, [0, 0.10, 0.14], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.10, 0.14], [0, 0, -100]);
  const display1 = useTransform(progress, p => p > 0.15 ? "none" : "flex");

  // Section 2: Current Focus (0.16 - 0.31)
  const opacity2 = useTransform(progress, [0.16, 0.19, 0.28, 0.31], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.16, 0.19, 0.28, 0.31], [100, 0, 0, -100]);
  const display2 = useTransform(progress, p => p < 0.15 || p > 0.32 ? "none" : "flex");

  // Section 3: Mirar (0.33 - 0.48)
  const opacity3 = useTransform(progress, [0.33, 0.36, 0.45, 0.48], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.33, 0.36, 0.45, 0.48], [100, 0, 0, -100]);
  const display3 = useTransform(progress, p => p < 0.32 || p > 0.49 ? "none" : "flex");

  // Section 4: Jagruti (0.50 - 0.65)
  const opacity4 = useTransform(progress, [0.50, 0.53, 0.62, 0.65], [0, 1, 1, 0]);
  const y4 = useTransform(progress, [0.50, 0.53, 0.62, 0.65], [100, 0, 0, -100]);
  const display4 = useTransform(progress, p => p < 0.49 || p > 0.66 ? "none" : "flex");

  // Section 5: Endurance (0.67 - 0.82)
  const opacity5 = useTransform(progress, [0.67, 0.70, 0.79, 0.82], [0, 1, 1, 0]);
  const y5 = useTransform(progress, [0.67, 0.70, 0.79, 0.82], [100, 0, 0, -100]);
  const display5 = useTransform(progress, p => p < 0.66 || p > 0.83 ? "none" : "flex");

  // Section 6: Transition Into Site (0.84 - 1.0)
  const opacity6 = useTransform(progress, [0.84, 0.87, 0.95, 1], [0, 1, 1, 0]);
  const y6 = useTransform(progress, [0.84, 0.87, 0.95, 1], [100, 0, 0, -100]);
  const display6 = useTransform(progress, p => p < 0.83 ? "none" : "flex");

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-8 md:px-24">
      {/* Overlay 1 — Opening */}
      <motion.div
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute inset-0 flex items-center justify-start md:justify-center px-8 md:px-24"
      >
        <div className="text-left md:text-center mt-32 md:mt-0">
          <h1 className="max-w-5xl text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl leading-[0.95]">
            Dr. Sahil Haria, PhD
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            Founder. <br className="block md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            Growth strategist. <br className="block md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            Endurance builder.
          </p>
          <div className="pointer-events-auto mt-12 flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
            <a href="#mirar" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors inline-block text-center">
              Explore Mirar
            </a>
            <a href="#jagruti" className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 inline-block text-center">
              Explore Jagruti
            </a>
            <a href="#journey" className="px-6 py-3 text-white/70 font-medium hover:text-white transition-colors inline-block text-center mt-2 sm:mt-0">
              View Full Journey &rarr;
            </a>
          </div>
        </div>
      </motion.div>

      {/* Overlay 2 — Current Focus */}
      <motion.div
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
      >
        <div className="text-right max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Building systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">for clarity.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            In business. <br />
            In products. <br />
            In the self.
          </p>
        </div>
      </motion.div>

      {/* Overlay 3 — Mirar */}
      <motion.div
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
      >
        <div className="text-left max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Mirar is my deepest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">current build.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            A daily emotional and mental hygiene system <br />
            for people navigating identity, ambition, and alignment.
          </p>
        </div>
      </motion.div>

      {/* Overlay 4 — Jagruti */}
      <motion.div
        style={{ opacity: opacity4, y: y4, display: display4 }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
      >
        <div className="text-right max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            Jagruti connects me <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">to legacy.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            Stainless steel. <br />
            Manufacturing. <br />
            Family business. <br />
            Modern growth.
          </p>
        </div>
      </motion.div>

      {/* Overlay 5 — Endurance */}
      <motion.div
        style={{ opacity: opacity5, y: y5, display: display5 }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
      >
        <div className="text-left max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            The body keeps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">me honest.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            One Ironman 70.3. <br />
            Three HYROX events. <br />
            Five-plus full marathons. <br />
            Two ultra marathons.
          </p>
        </div>
      </motion.div>

      {/* Overlay 6 — Transition Into Site */}
      <motion.div
        style={{ opacity: opacity6, y: y6, display: display6 }}
        className="absolute inset-0 flex items-center justify-center px-8 md:px-24"
      >
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            This is not a resume.
          </h2>
          <p className="mt-8 text-2xl md:text-4xl text-white/80 font-light drop-shadow-lg leading-relaxed">
            It is a map of what I’m building,<br />
            what shaped me,<br />
            and what I’m still becoming.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

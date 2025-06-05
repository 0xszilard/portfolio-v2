"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const gridControls = useAnimation();

  // 1) Start grid animation immediately on mount.
  // 2) Schedule hiding the loader after 2.5s.
  useEffect(() => {
    // Kick off the infinite tunnel‐zoom animation right away
    gridControls.start({
      z: [-800, 200, 1200],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      },
    });

    // After 2.5s total, flip `loading` → false to begin fade-out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      // Stop any pending animation if unmounted
      gridControls.stop();
    };
  }, [gridControls]);

  // When `loading` goes false, wait 0.8s (fade duration), then unmount overlay
  useEffect(() => {
    if (!loading) {
      const fadeTimer = setTimeout(() => {
        setShowLoader(false);
      }, 800); // must match the fade‐out duration below
      return () => clearTimeout(fadeTimer);
    }
  }, [loading]);

  return (
    <>
      {/* 1) Render children immediately, so they sit behind the loader */}
      {children}

      {/* 2) If showLoader is still true, overlay the loader on top */}
      {showLoader && (
        <motion.div
          // Initial opacity is 1; once `loading` → false, animate to 0 in 0.8s
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Perspective container for 3D tunnel */}
          <div className="relative h-full w-full" style={{ perspective: "900px", transformStyle: "preserve-3d" }}>
            {/* Animated grid plane */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                rotateX: "75deg", // tilt plane toward the viewer
              }}
              animate={gridControls}
            >
              <div className="relative h-full w-full">
                {/* Horizontal lines (20 rows) */}
                {Array.from({ length: 20 }).map((_, row) => (
                  <div
                    key={`h-${row}`}
                    className="absolute w-full border-t border-gray-600/30"
                    style={{ top: `${(row / 20) * 100}%` }}
                  />
                ))}

                {/* Vertical lines (20 columns) */}
                {Array.from({ length: 20 }).map((_, col) => (
                  <div
                    key={`v-${col}`}
                    className="absolute h-full border-l border-gray-600/30"
                    style={{ left: `${(col / 20) * 100}%` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Pulsing “tunnel mouth” circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blue-400/80"
              initial={{ scale: 0.5, opacity: 0.2 }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ width: "150px", height: "150px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-sm tracking-wide text-blue-300">Loading</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}

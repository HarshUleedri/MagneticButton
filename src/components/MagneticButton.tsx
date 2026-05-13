"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

const STRENGTH = 0.7;

export default function MagneticButton() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    console.log(width);

    const { clientX, clientY } = e;

    const x = (clientX - (left + width / 2)) * STRENGTH;
    const y = (clientY - (top + height / 2)) * STRENGTH;
    setPosition({ x, y });
  };
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasMoved = position.x !== 0 || position.y !== 0;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="border border-dashed  rounded-lg [--show-color:var(--color-blue-400)]"
      style={{
        borderColor: hasMoved ? "var(--show-color)" : "transparent",
        backgroundColor: "color-mix(in srgb,var(--show-color) 30%, transparent",
      }}
    >
      <motion.div
        ref={ref}
        className=""
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.3,
        }}
      >
        <button
          onClick={() => setPosition({ x: 0, y: 0 })}
          className="px-12 active:opacity-80 cursor py-2 rounded-md text-neutral-50  shadow  text-shadow-2xs bg-linear-to-b to-blue-700 from-sky-600 border border-blue-800 font-medium text-base  "
        >
          Click Me Fast
        </button>
      </motion.div>
    </div>
  );
}

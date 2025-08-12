"use client"

import { motion } from "framer-motion"
import { useEfectoScroll } from "@/hooks/use-efecto-scroll"

export function TituloHero() {
  const { scrollY } = useEfectoScroll()

  // Parallax más sutil para el título
  const offsetY = scrollY * 0.2

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      }}
      className="text-center relative z-20"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#FFFFFF",
          textShadow: `
            0 8px 16px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(0, 163, 255, 0.2)
          `,
        }}
        whileHover={{
          textShadow: `
            0 8px 16px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(0, 163, 255, 0.4)
          `,
        }}
        transition={{ duration: 0.3 }}
      >
        Breyner Pinto
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl mt-6 text-blue-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Junior Full‑Stack Developer — Colombia 
      </motion.p>
    </motion.div>
  )
}

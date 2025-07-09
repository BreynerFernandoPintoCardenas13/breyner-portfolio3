"use client"

import { useEfectoScroll } from "@/hooks/use-efecto-scroll"

export function FondoSatelital() {
  const { scrollY } = useEfectoScroll()

  // Efecto parallax: el fondo se mueve más lento que el contenido
  const offsetParallax = scrollY * 0.5

  return (
    <>
      {/* Imagen satelital de fondo con efectos */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5) sepia(0.2)",
          transform: `translateY(${offsetParallax}px)`,
        }}
      />

      {/* Overlay oscuro para mejorar legibilidad */}
      <div
        className="fixed inset-0 z-5 bg-black/30 pointer-events-none"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* Efecto de grano vintage sutil */}
      <div
        className="fixed inset-0 z-5 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </>
  )
}

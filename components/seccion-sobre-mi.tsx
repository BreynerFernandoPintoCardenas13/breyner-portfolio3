"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Github, ExternalLink } from "lucide-react"

// Fotos para el carrusel (placeholder - reemplaza con tus fotos reales)
const fotosCarrusel = [
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
  "/primerPagina.png?height=400&width=300&text=Foto+1+Breyner",
]

// Hook para el carrusel automático
function useCarruselAutomatico(totalFotos: number, intervalo = 4000) {
  const [fotoActiva, setFotoActiva] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setFotoActiva((prev) => (prev + 1) % totalFotos)
    }, intervalo)

    return () => clearInterval(timer)
  }, [totalFotos, intervalo])

  return fotoActiva
}

// Componente del carrusel de fondo
function CarruselFondo({ fotos }: { fotos: string[] }) {
  const fotoActiva = useCarruselAutomatico(fotos.length, 3000) // Cambia cada 5 segundos

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Contenedor de las fotos */}
      <div className="relative w-full h-full">
        {fotos.map((foto, indice) => (
          <motion.div
            key={indice}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: indice === fotoActiva ? 0.15 : 0,
              scale: indice === fotoActiva ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={foto || "/placeholder.svg"}
              alt={`Foto ${indice + 1} de Breyner`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />

      {/* Efecto de grano sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}

// Componente principal de la sección
export function SeccionSobreMi() {
  const seccionRef = useRef(null)
  const estaEnVista = useInView(seccionRef, { once: true, margin: "-100px" })
  const fotoActiva = useCarruselAutomatico(fotosCarrusel.length, 5000) // Cambia cada 5 segundos

  const manejarClickGitHub = () => {
    window.open("https://github.com/BreynerFernandoPintoCardenas13", "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="sobre-mi"
      ref={seccionRef}
      className="relative py-20 px-4 min-h-screen flex items-center bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm overflow-hidden"
    >
      {/* Carrusel de fondo */}
      <CarruselFondo fotos={fotosCarrusel} />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Título de la sección */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Sobre Mí
        </motion.h2>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
        >
          {/* Párrafo principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Soy un <span className="text-blue-400 font-semibold">desarrollador web apasionado</span> por crear
              soluciones funcionales, modernas y eficientes, capaz de transformar ideas en productos digitales reales.
              Desde mi formación en el SENA en grado 11, he trabajado en proyectos que han puesto a prueba tanto mis
              habilidades técnicas como blandas, destacando mi{" "}
              <span className="text-blue-400 font-semibold">
                creatividad, empatía y capacidad de resolver problemas
              </span>{" "}
              bajo presión.
            </p>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Entre mis experiencias más relevantes se encuentran el desarrollo de una{" "}
              <span className="text-green-400 font-semibold">plataforma de taxis</span>, un{" "}
              <span className="text-purple-400 font-semibold">videojuego web</span> y una{" "}
              <span className="text-yellow-400 font-semibold">concesionaria online de vehículos</span> conectada a la
              blockchain de Cardano, donde integré formularios y sistemas de gestión de datos para administradores.
            </p>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Me caracterizo por mi{" "}
              <span className="text-blue-400 font-semibold">enfoque directo, rápido y eficaz</span>, así como por mi
              adaptabilidad a nuevas tecnologías y entornos. Mi objetivo es seguir creciendo profesionalmente, aportando
              valor en cada proyecto y asumiendo retos que me permitan{" "}
              <span className="text-blue-400 font-semibold">innovar y dejar huella</span>.
            </p>
          </motion.div>

          {/* Separador visual */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto my-8"
          />

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-xl text-slate-300 font-medium">¿Quieres conocer más de mis proyectos?</p>

            <motion.button
              onClick={manejarClickGitHub}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              aria-label="Visitar perfil de GitHub de Breyner Pinto"
            >
              <Github size={24} />
              <span>Ver mis proyectos en GitHub</span>
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Indicadores del carrusel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8"
        >
          {fotosCarrusel.map((_, indice) => (
            <motion.div
              key={indice}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                indice === fotoActiva ? "bg-blue-400 w-8" : "bg-slate-600"
              }`}
              animate={{
                backgroundColor: indice === fotoActiva ? "#60a5fa" : "#475569",
                width: indice === fotoActiva ? "2rem" : "0.5rem",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TarjetaProyecto } from "./tarjeta-proyecto"
import type { Proyecto } from "@/types/proyecto"

// Proyectos específicos solicitados
const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Proyecto JavaScript",
    descripcion:
      "Proyecto desarrollado con JavaScript vanilla, implementando funcionalidades modernas y buenas prácticas de desarrollo. Incluye manipulación del DOM, eventos interactivos y diseño responsivo.",
    urlGithub: "https://github.com/BreynerFernandoPintoCardenas13/Proyecto_JavaScript_PintoBreyner",
    urlDemo: null, // No disponible
    imagen: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    titulo: "Don Breyner Proyect",
    descripcion:
      "Proyecto web completo que demuestra habilidades en desarrollo full-stack. Implementa arquitectura moderna, interfaz de usuario intuitiva y funcionalidades avanzadas para una experiencia de usuario óptima.",
    urlGithub: "https://github.com/BreynerFernandoPintoCardenas13/donbreynerproyect",
    urlDemo: null, // No disponible
    imagen: "/placeholder.svg?height=400&width=600",
  },
]

// Función para aleatorizar el orden de los proyectos
function mezclarProyectos(array: Proyecto[]): Proyecto[] {
  const copia = [...array]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

export function SeccionProyectos() {
  const ref = useRef(null)
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" })

  // Mezclar proyectos en cada renderizado
  const proyectosMezclados = mezclarProyectos(proyectos)

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectosMezclados.map((proyecto, indice) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, x: indice % 2 === 0 ? -60 : 60, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: indice * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TarjetaProyecto proyecto={proyecto} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

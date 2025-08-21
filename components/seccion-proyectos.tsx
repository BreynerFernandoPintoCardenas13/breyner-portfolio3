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
    titulo: "BuyCar",
    descripcion:
      "Proyecto desarrollado en grupo, utilizando tecnologías modernas como (React, TypeScript, Tailwinds, Express y conectado con Cardano) y buenas prácticas de desarrollo.",
    urlGithub: "https://github.com/DavidAdolfoGomezUribe/ProyectoSerPitch",
    urlDemo: "https://proyecto-ser-pitch.vercel.app/", 
    imagen: "/buycar.png?height=400&width=600",
  },
  {
    id: 2,
    titulo: "Don Breyner Proyect",
    descripcion:
      "App de Taxis, en la cual los usuarios pueden solicitar un taxi de manera rápida y sencilla, y realizar el pago por medio de Cardano, utilizando tecnologias como React, TypeScript, Tailwind y Lucid.",
    urlGithub: "https://github.com/BreynerFernandoPintoCardenas13/donbreynerproyect",
    urlDemo: null, // No disponible
    imagen: "/donbreyner.png?height=400&width=600",
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
        <motion.p
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4x0.5 md:text-2xl  text-center mb-10 text-white"
        >
          hay muchos mas proyectos!! Visita mi github para conocerlos
          
        </motion.p>
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

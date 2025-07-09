"use client"

import { motion } from "framer-motion"
import { Linkedin, MessageCircle, Mail } from "lucide-react"

const enlacesContacto = [
  {
    nombre: "LinkedIn",
    url: "https://www.linkedin.com/in/breyner-pinto-561a7636a/",
    icono: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    nombre: "WhatsApp",
    url: "https://wa.me/573182792275",
    icono: MessageCircle,
    color: "hover:text-green-400",
  },
  {
    nombre: "Email",
    url: "mailto:pintobreyner103@gmail.com",
    icono: Mail,
    color: "hover:text-red-400",
  },
]

export function FooterContacto() {
  return (
    <footer id="contacto" className="relative py-20 px-4 bg-gradient-to-b from-slate-900/80 to-black backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Contáctame
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-xl text-slate-300 mb-12"
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>

        {/* Enlaces de contacto con efectos mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center gap-8 mb-12"
        >
          {enlacesContacto.map((enlace, indice) => {
            const IconoComponente = enlace.icono
            return (
              <motion.a
                key={enlace.nombre}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${enlace.color} transition-all duration-300 p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50`}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + indice * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                aria-label={`Contactar por ${enlace.nombre}`}
              >
                <IconoComponente size={32} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Copyright con animación */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm"
        >
          © 2025 Breyner Pinto. Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  )
}

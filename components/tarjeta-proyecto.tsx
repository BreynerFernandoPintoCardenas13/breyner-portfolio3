"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import type { Proyecto } from "@/types/proyecto"

interface PropsTarjetaProyecto {
  proyecto: Proyecto
}

export function TarjetaProyecto({ proyecto }: PropsTarjetaProyecto) {
  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-2xl"
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Imagen del proyecto con efecto hover mejorado */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={proyecto.imagen || "/placeholder.svg"}
          alt={`Captura de pantalla del proyecto ${proyecto.titulo}`}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">{proyecto.titulo}</h3>

        <p className="text-slate-300 mb-6 leading-relaxed">{proyecto.descripcion}</p>

        {/* Botones de acción */}
        <div className="flex gap-4">
          <motion.a
            href={proyecto.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            Ver código
          </motion.a>

          {proyecto.urlDemo ? (
            <motion.a
              href={proyecto.urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Demo
            </motion.a>
          ) : (
            <div className="relative">
              <button
                disabled
                className="flex items-center gap-2 bg-slate-600 text-slate-400 px-4 py-2 rounded-lg cursor-not-allowed"
                title="Demo no disponible"
              >
                <ExternalLink size={18} />
                Demo
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

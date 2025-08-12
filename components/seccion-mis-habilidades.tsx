"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

// Tipos para habilidades
interface Habilidad {
  id: number
  nombre: string
  categoria: string
  descripcion: string
  logo: string
  enlace: string
  color: string
}

// Datos de habilidades organizados por categorías con logos reales
const habilidades: Habilidad[] = [
  // Frontend
  {
    id: 1,
    nombre: "React",
    categoria: "Frontend",
    descripcion: "Desarrollo de interfaces de usuario interactivas y componentes reutilizables",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    enlace: "https://react.dev/",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    nombre: "TypeScript",
    categoria: "Frontend",
    descripcion: "Tipado estático para JavaScript, mejorando la robustez del código",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    enlace: "https://www.typescriptlang.org/",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    nombre: "Tailwind",
    categoria: "Frontend",
    descripcion: "Framework CSS utilitario para diseños responsivos y modernos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    enlace: "https://tailwindcss.com/",
    color: "from-cyan-400 to-cyan-600",
  },

  // Backend
  {
    id: 4,
    nombre: "Express",
    categoria: "Backend",
    descripcion: "Framework de Node.js para construir APIs REST y aplicaciones web",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    enlace: "https://expressjs.com/",
    color: "from-green-400 to-green-600",
  },
  {
    id: 5,
    nombre: "Python",
    categoria: "Backend",
    descripcion: "Desarrollo de aplicaciones, automatización y análisis de datos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    enlace: "https://www.python.org/",
    color: "from-yellow-400 to-yellow-600",
  },

  // Bases de Datos
  {
    id: 6,
    nombre: "MySQL",
    categoria: "Bases de Datos",
    descripcion: "Base de datos relacional para aplicaciones web robustas",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1200px-MySQL_logo.svg.png",
    enlace: "https://www.mysql.com/",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 7,
    nombre: "MongoDB",
    categoria: "Bases de Datos",
    descripcion: "Base de datos NoSQL para aplicaciones modernas y escalables",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
    enlace: "https://www.mongodb.com/",
    color: "from-green-500 to-green-700",
  },

  // Otros
  {
    id: 8,
    nombre: "Git",
    categoria: "Otros",
    descripcion: "Control de versiones para trabajo colaborativo y gestión de código",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
    enlace: "https://git-scm.com/",
    color: "from-purple-400 to-purple-600",
  },
]

// Obtener categorías únicas
const categorias = [...new Set(habilidades.map((h) => h.categoria))]

// Componente de tooltip CORREGIDO
function Tooltip({ children, content, visible }: { children: React.ReactNode; content: string; visible: boolean }) {
  return (
    <div className="relative">
      {children}
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg border border-slate-700 z-20 max-w-48 text-center"
          style={{ whiteSpace: "normal", wordWrap: "break-word" }}
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </motion.div>
      )}
    </div>
  )
}

// Componente de badge de habilidad CORREGIDO
function BadgeHabilidad({ habilidad }: { habilidad: Habilidad }) {
  const [mostrarTooltip, setMostrarTooltip] = useState(false)

  const manejarClick = () => {
    window.open(habilidad.enlace, "_blank", "noopener,noreferrer")
  }

  return (
    <Tooltip content={habilidad.descripcion} visible={mostrarTooltip}>
      <motion.div
        className="relative group cursor-pointer w-full"
        onHoverStart={() => setMostrarTooltip(true)}
        onHoverEnd={() => setMostrarTooltip(false)}
        onClick={manejarClick}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          {/* Logo de la tecnología */}
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${habilidad.color} flex items-center justify-center shadow-lg p-2`}
          >
            <img
              src={habilidad.logo || "/placeholder.svg"}
              alt={`Logo de ${habilidad.nombre}`}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                // Fallback en caso de error al cargar la imagen
                e.currentTarget.style.display = "none"
              }}
            />
          </div>

          {/* Nombre de la habilidad */}
          <h3 className="text-center text-white font-semibold text-lg">{habilidad.nombre}</h3>

          {/* Efecto de brillo al hacer hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>
    </Tooltip>
  )
}

// Componente principal CORREGIDO
export function SeccionMisHabilidades() {
  const seccionRef = useRef(null)
  const estaEnVista = useInView(seccionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="mis-habilidades"
      ref={seccionRef}
      className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Mis Habilidades
        </motion.h2>

        {/* Contenedor de categorías */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={estaEnVista ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12"
        >
          {categorias.map((categoria, indiceCat) => (
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: indiceCat * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Título de categoría */}
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{categoria}</h3>

              {/* Grid de habilidades por categoría CENTRADO */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {habilidades
                  .filter((habilidad) => habilidad.categoria === categoria)
                  .map((habilidad, indice) => (
                    <motion.div
                      key={habilidad.id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: indice * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="w-full max-w-[200px]"
                    >
                      <BadgeHabilidad habilidad={habilidad} />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

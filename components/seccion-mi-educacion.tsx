"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Award } from "lucide-react"

// Tipos para los elementos educativos
interface ElementoEducacion {
  id: number
  institucion: string
  titulo: string
  año: string
  descripcion: string
  enlace: string
  logo: string
  color: string
  tipo: "enlace" | "certificado" | "nivel"
}

// Datos de educación con logos reales
const elementosEducacion: ElementoEducacion[] = [
  {
    id: 1,
    institucion: "Campuslands",
    titulo: "Técnico en Desarrollo de Software",
    año: "2025",
    descripcion: "Formación intensiva en desarrollo web full-stack con tecnologías modernas y metodologías ágiles.",
    enlace: "https://campuslands.com/",
    logo: "/campus.png?height=full&width=full&text=Mi+primera+página+web",
    color: "from-blue-500 to-blue-700",
    tipo: "enlace",
  },
  {
    id: 2,
    institucion: "SENA",
    titulo: "Técnico en Programación de Software",
    año: "2024",
    descripcion: "Fundamentos sólidos en programación, algoritmos y desarrollo de aplicaciones de software.",
    enlace: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.downloadfile?FileName=C%3A%5CProgram+Files%5CApache+Software+Foundation%5CTomcat+8.5%5Ctemp%5C9309002729497TI1099740804C.pdf&IsDelete=true", // Placeholder para el certificado
    logo: "/sena.png?height=full&width=full&text=Mi+primera+página+web",
    color: "from-green-500 to-green-700",
    tipo: "certificado",
  },
  {
    id: 3,
    institucion: "Inglés",
    titulo: "Nivel B2",
    año: "2024",
    descripcion: "Competencia intermedia-avanzada en inglés técnico para desarrollo de software internacional.",
    enlace: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    color: "from-purple-500 to-purple-700",
    tipo: "nivel",
  },
]

// Componente de medidor circular para el nivel de inglés
function MedidorCircular({ nivel = "B2", porcentaje = 100 }: { nivel: string; porcentaje?: number }) {
  const circunferencia = 2 * Math.PI * 45 // Radio de 45
  const offset = circunferencia - (porcentaje / 100) * circunferencia

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        {/* Círculo de fondo */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-600" />
        {/* Círculo de progreso */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-purple-400"
          strokeLinecap="round"
          strokeDasharray={circunferencia}
          initial={{ strokeDashoffset: circunferencia }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
      {/* Texto central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">{nivel}</span>
      </div>
    </div>
  )
}

// Componente de tarjeta educativa con efecto flip
function TarjetaEducacion({ elemento }: { elemento: ElementoEducacion }) {
  const [estaVolteada, setEstaVolteada] = useState(false)

  const manejarClick = () => {
    if (elemento.enlace && elemento.enlace !== "#") {
      window.open(elemento.enlace, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      className="relative w-full h-80 perspective-1000"
      onHoverStart={() => setEstaVolteada(true)}
      onHoverEnd={() => setEstaVolteada(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: estaVolteada ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 shadow-lg flex flex-col items-center justify-center text-center"
            >
            {/* Logo de la institución */}
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${elemento.color} mb-4 shadow-lg w-20 h-20 flex items-center justify-center`}
            >
              <img
                src={elemento.logo || "/placeholder.svg"}
                alt={`Logo de ${elemento.institucion}`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback en caso de error al cargar la imagen
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{elemento.institucion}</h3>
            <p className="text-slate-300 text-sm mb-4">{elemento.titulo}</p>

            {/* Medidor circular para inglés */}
            {elemento.tipo === "nivel" && <MedidorCircular nivel="B2" porcentaje={75} />}
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{elemento.institucion}</h3>
              <p className="text-blue-400 font-medium mb-3">{elemento.año}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{elemento.descripcion}</p>
            </div>

            {/* Botón de acción */}
            {elemento.enlace !== "#" ? (
              <motion.button
                onClick={manejarClick}
                className={`w-full py-3 px-4 bg-gradient-to-r ${elemento.color} text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {elemento.tipo === "enlace" ? (
                  <>
                    <span>Visitar sitio</span>
                    <ExternalLink size={16} />
                  </>
                ) : (
                  <>
                    <span>Ver certificado</span>
                    <Award size={16} />
                  </>
                )}
              </motion.button>
            ) : (
              <div className="w-full py-3 px-4 bg-slate-700/50 text-slate-400 rounded-xl text-center text-sm">
                Certificado próximamente
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Componente principal
export function SeccionMiEducacion() {
  const seccionRef = useRef(null)
  const estaEnVista = useInView(seccionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="mi-educacion"
      ref={seccionRef}
      className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm"
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
          Mi Educación
        </motion.h2>

        {/* Grid de tarjetas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={estaEnVista ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {elementosEducacion.map((elemento, indice) => (
            <motion.div
              key={elemento.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: indice * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full max-w-sm"
            >
              <TarjetaEducacion elemento={elemento} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

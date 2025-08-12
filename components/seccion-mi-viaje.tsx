"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TarjetaProyecto } from "./tarjeta-proyecto"
import type { Proyecto } from "@/types/proyecto"

// Tipos para los elementos del timeline
interface ElementoTimeline {
  id: number
  titulo: string
  texto: string
  tipo: "imagen" | "tarjeta" | "placeholder"
  contenido?: {
    imagen?: string
    proyecto?: Proyecto
  }
}

// Datos del timeline - ACTUALIZADO con nueva información
const elementosTimeline: ElementoTimeline[] = [
  {
    id: 1,
    titulo: "Mi primera página web",
    texto:
      "Mis primeros pasos en la programación, el inicio de un viaje sin retorno que me llevaría a aprender nuevas cosas, conocer nuevas personas pero más importante, a saber de cuánto era capaz.",
    tipo: "imagen",
    contenido: {
      imagen: "/primerPagina.png?height=full&width=full&text=Mi+primera+página+web",
    },
  },
  {
    id: 2,
    titulo: "Mejorando Poco a Poco",
    texto:
      "A medida que avanzaba por el mundo de la programacion web, empece a manejar CSS, me sentia muy feliz ya que mis ideas tomaban forma y color e hice un ejercicio de hacer 26 landing pages.",
    tipo: "tarjeta",
    contenido: {
      proyecto: {
        id: 101,
        titulo: "26 Landing Pages Challenge",
        descripcion:
          "Colección de 26 landing pages creadas como ejercicio de aprendizaje de CSS, explorando diferentes diseños, layouts y técnicas de estilizado.",
        urlGithub: "https://github.com/BreynerFernandoPintoCardenas13/landing-page-designs",
        urlDemo: "https://breynerfernandopintocardenas13.github.io/landing-page-designs/",
        imagen: "/landingpages.png?height=300&width=500&text=CSS+Landing+Pages",
      },
    },
  },
  {
    id: 3,
    titulo: "Python",
    texto:
      "Cuando me adentré en Python recuerdo que fue un cambio radical, pensar en la lógica, bucles, objetos, arrays, ids y sobre todo, la identación me costó demasiado, pero al final tras mucho esfuerzo y dedicación logré aprender y programar fluidamente.",
    tipo: "imagen",
    contenido: {
      imagen: "/python.png?height=250&width=350&text=Python+Programming",
    },
  },
  {
    id: 4,
    titulo: "JavaScript",
    texto:
      "El siguiente paso en mi viaje era aprender a usar JavaScript, rápidamente me di cuenta que era todo un reto y que iba a necesitar de disciplina para poder completar exitosamente los retos que JS traía, en el camino agridulce que fue aprender JS, me terminé enamorando aún más de la lógica y de lo que era capaz de hacer con la programación.",
    tipo: "tarjeta",
    contenido: {
      proyecto: {
        id: 103,
        titulo: "Simulador de batallas",
        descripcion:
          "Simulador de batallas por consola. Proyecto que hice para poner aprueba mis conocimientos basicos de JS, el proyecto que me hizo engancharme a la logica de JS.",
        urlGithub: "https://github.com/JuanJosePradaContreras/Simulador_de_Batallas-RPG_por_Consola",
        urlDemo: null,
        imagen: "/js.png?height=300&width=500&text=Proyecto+Grupal+Frameworks",
      },
    },
  },
  {
    id: 5,
    titulo: "LO MAS IMPORTANTE",
    texto:
      "Pronto descubri que era lo mas importante en este campo laboral, el AUTO APRENDIZAJE, rapidamente me interese e investigue, descubri que habia librerias, frameworks y diversas tecnologias que facilitaban la programacion y simplificaban procesos como Django, React, Express, Next.js, TypeScript, pero era algo que debia aprender por mi cuenta. Encontre personas con mi mismo pensamiento y empece a trabajar con ellas.",
    tipo: "tarjeta",
    contenido: {
      proyecto: {
        id: 102,
        titulo: "Play_",
        descripcion:
          "Proyecto el cual busca explicar a travez de un juego didactico que es una base de datos NoSQL, utilizando frameworks y diversas tecnologias como: Next.js, React, MockAPI, JS.",
        urlGithub: "https://github.com/DavidAdolfoGomezUribe/proyectoprogresivobd",
        urlDemo: "https://proyectoprogresivobd.vercel.app/",
        imagen: "/play.png?height=300&width=500&text=Proyecto+Grupal+Frameworks",
      },
    },
  },
  {
    id: 6,
    titulo: "Bases de Datos y Node.js",
    texto:
      "El mundo del backend se abrió ante mí con Node.js, y junto a él llegaron las bases de datos. Aprender SQL y MongoDB fue como descubrir dos idiomas diferentes para hablar con los datos. Cada consulta, cada esquema, cada relación me enseñaba una nueva forma de estructurar y organizar la información, completando así mi visión full-stack del desarrollo.",
    tipo: "imagen",
    contenido: {
      imagen: "/placeholder.svg?height=250&width=350&text=Database+%26+Node.js",
    },
  },
]

// Hook personalizado COMPLETAMENTE CORREGIDO
function useTimelineScroll(totalPuntos: number) {
  const [puntoActivo, setPuntoActivo] = useState(0)
  const [progreso, setProgreso] = useState(0)
  const contenedorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const manejarScroll = () => {
      if (!contenedorRef.current) return

      const rect = contenedorRef.current.getBoundingClientRect()
      const alturaVentana = window.innerHeight
      const centroVentana = alturaVentana / 2

      // Calcular qué tan dentro de la ventana está la sección
      const inicioSeccion = rect.top
      const finSeccion = rect.bottom
      const alturaSeccion = rect.height

      // Solo procesar si la sección está visible
      if (finSeccion < 0 || inicioSeccion > alturaVentana) {
        return // La sección no está visible
      }

      // Calcular progreso de 0 a 1 basado en cuánto ha scrolleado dentro de la sección
      let progresoSeccion = 1

      if (inicioSeccion <= centroVentana && finSeccion >= centroVentana) {
        // La sección está activa (el centro de la ventana está dentro de la sección)
        const distanciaRecorrida = centroVentana - inicioSeccion
        const progresoBase = distanciaRecorrida / alturaSeccion

        // Aplicar factor de duración para que cada punto dure más
        const factorDuracion = 1.4 // Reducido para mejor funcionamiento
        progresoSeccion = Math.min(1, progresoBase * factorDuracion)
      }

      // Determinar punto activo basado en el progreso
      const indiceFlotante = progresoSeccion * (totalPuntos - 1.5)
      const nuevoPuntoActivo = Math.min(totalPuntos - 2, Math.max(0, Math.floor(indiceFlotante)))

      // Calcular progreso de la línea
      const progresoLinea = Math.min(1, progresoSeccion)

      setProgreso(progresoLinea)
      setPuntoActivo(nuevoPuntoActivo)

      // Debug (puedes comentar estas líneas en producción)
      console.log({
        progresoSeccion: progresoSeccion.toFixed(2),
        puntoActivo: nuevoPuntoActivo,
        inicioSeccion: inicioSeccion.toFixed(0),
        finSeccion: finSeccion.toFixed(0),
      })
    }

    // Usar requestAnimationFrame para mejor rendimiento
    let ticking = false
    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          manejarScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScrollThrottled, { passive: true })
    manejarScroll() // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScrollThrottled)
  }, [totalPuntos])

  return { puntoActivo, progreso, contenedorRef }
}

// Componente para la línea vertical
function LineaTimeline({
  puntoActivo,
  progreso,
  totalPuntos,
}: {
  puntoActivo: number
  progreso: number
  totalPuntos: number
}) {
  return (
    <div className="relative w-1 bg-gray-600 rounded-full overflow-hidden h-full min-h-[400px]">
      {/* Línea de progreso */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-white rounded-full"
        animate={{ height: `${progreso * 90}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      {/* Puntos del timeline */}
      {Array.from({ length: totalPuntos }).map((_, indice) => (
        <motion.div
          key={indice}
          className={`absolute w-4 h-4 rounded-full border-2 -left-1.5 ${
            indice <= puntoActivo ? "bg-white border-white" : "bg-gray-600 border-gray-600"
          }`}
          style={{ top: `${(indice / (totalPuntos - 1)) * 100}%` }}
          animate={{
            backgroundColor: indice <= puntoActivo ? "#ffffff" : "#4b5563",
            borderColor: indice <= puntoActivo ? "#ffffff" : "#4b5563",
            scale: indice === puntoActivo ? 1.4 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

// Componente para el contenido
function ContenidoPunto({
  elemento,
  estaActivo,
}: {
  elemento: ElementoTimeline
  estaActivo: boolean
}) {
  if (!estaActivo) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Título y texto */}
      <div>
        <h3 className="text-xl md:text-4xl font-bold text-white mb-3">{elemento.titulo}</h3>
        <p className="text-xl md:text-4x1 text-slate-300 leading-relaxed max-w-2xl">{elemento.texto}</p>
      </div>

      {/* Contenido visual según el tipo */}
      {elemento.tipo === "imagen" && elemento.contenido?.imagen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-xl p-4 shadow-lg max-w-md"
          style={{maxWidth: "800px"}}
        >
          <img
            src={elemento.contenido.imagen || "/placeholder.svg"}
            alt={elemento.titulo}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </motion.div>
      )}

      {elemento.tipo === "tarjeta" && elemento.contenido?.proyecto && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg"
        >
          <TarjetaProyecto proyecto={elemento.contenido.proyecto} />
        </motion.div>
      )}
    </motion.div>
  )
}

// Componente principal COMPLETAMENTE CORREGIDO
export function SeccionMiViaje() {
  const { puntoActivo, progreso, contenedorRef } = useTimelineScroll(elementosTimeline.length)
  const seccionRef = useRef(null)
  const estaEnVista = useInView(seccionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="mi-viaje"
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
          Mi Viaje
        </motion.h2>

        {/* Debug info - TEMPORAL (puedes comentar en producción) */}
        <div className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-sm z-50">
          Punto activo: {puntoActivo + 1} / {elementosTimeline.length}
          <br />
          Progreso: {(progreso * 100).toFixed(0)}%
        </div>

        {/* Contenedor del timeline */}
        <motion.div
          ref={contenedorRef}
          initial={{ opacity: 0 }}
          animate={estaEnVista ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          style={{ minHeight: "50vh" }} // Altura suficiente para permitir scroll
        >
          {/* Columna izquierda: Línea del timeline */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative flex items-start pt-8 h-full">
              <LineaTimeline puntoActivo={puntoActivo} progreso={progreso} totalPuntos={elementosTimeline.length} />
            </div>
          </div>

          {/* Columna derecha: Contenido */}
          <div className="lg:col-span-10">
            <div className="space-y-8 pt-8">
              {elementosTimeline.map((elemento, indice) => (
                <div key={elemento.id} className="min-h-[300px] flex items-center">
                  <ContenidoPunto elemento={elemento} estaActivo={indice === puntoActivo} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

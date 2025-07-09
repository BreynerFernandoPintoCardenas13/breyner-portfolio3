"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useEfectoScroll } from "@/hooks/use-efecto-scroll"

const enlaces = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Proyectos", href: "#proyectos" },
  { nombre: "Contáctame", href: "#contacto" },
]

export function HeaderNavegacion() {
  const { scrollY } = useEfectoScroll()
  const [esScrolleado, setEsScrolleado] = useState(false)

  useEffect(() => {
    setEsScrolleado(scrollY > 60)
  }, [scrollY])

  const manejarClickContacto = (e: React.MouseEvent) => {
    e.preventDefault()
    const elemento = document.getElementById("contacto")
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        esScrolleado ? "bg-black h-16" : "bg-black/70 backdrop-blur-sm h-20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 h-full flex items-center justify-center">
        <ul className="flex space-x-8">
          {enlaces.map((enlace) => (
            <li key={enlace.nombre}>
              <a
                href={enlace.href}
                onClick={enlace.nombre === "Contáctame" ? manejarClickContacto : undefined}
                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {enlace.nombre}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

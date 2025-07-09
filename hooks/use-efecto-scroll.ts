"use client"

import { useState, useEffect } from "react"

export function useEfectoScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const manejarScroll = () => {
      setScrollY(window.scrollY)
    }

    // Listener pasivo para mejor rendimiento
    window.addEventListener("scroll", manejarScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", manejarScroll)
    }
  }, [])

  return { scrollY }
}

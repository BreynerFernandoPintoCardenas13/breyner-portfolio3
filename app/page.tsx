import { TituloHero } from "@/components/titulo-hero"
import { SeccionProyectos } from "@/components/seccion-proyectos"
import { FooterContacto } from "@/components/footer-contacto"
import { FondoSatelital } from "@/components/fondo-satelital"
import { HeaderNavegacion } from "@/components/header-navegacion"
import { SeccionMiViaje } from "@/components/seccion-mi-viaje"
import { SeccionSobreMi } from "@/components/seccion-sobre-mi"

export default function PaginaInicio() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Fondo satelital */}
      <FondoSatelital />

      {/* Header de navegación */}
      <HeaderNavegacion />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Título principal */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <TituloHero />
        </section>

        {/* Sección de proyectos */}
        <SeccionProyectos />

        {/* Sección: Mi viaje */}
        <SeccionMiViaje />

        {/* Nueva sección: Sobre mí */}
        <SeccionSobreMi />

        {/* Footer de contacto */}
        <FooterContacto />
      </div>
    </main>
  )
}

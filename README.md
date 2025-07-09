# Portfolio de Breyner Pinto

Portfolio personal desarrollado con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Características

- **Fondo satelital 2D** con imagen de alta resolución de la Tierra desde el espacio
- **Efectos parallax** suaves durante el scroll para crear profundidad
- **Animaciones fluidas** con Framer Motion y efectos de aparición por secciones
- **Interacciones hover avanzadas** en proyectos con escala y sombras dinámicas
- **Diseño responsivo** optimizado para todos los dispositivos
- **Modo oscuro retro** con paleta de colores azul marino y cobalto
- **Tipografía moderna** con Inter y efectos de glow
- **Navegación sticky** con transiciones suaves
- **Sección de proyectos** con orden aleatorio en cada build
- **Footer de contacto** con enlaces animados y efectos glow
- **Optimizado para SEO** y accesibilidad
- **Carga diferida** para mejor rendimiento

## 🛠️ Tecnologías utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Biblioteca de animaciones para React
- **Lucide React** - Iconos SVG para React
- **Unsplash** - Imágenes de alta calidad para el fondo

## 📦 Instalación y uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

\`\`\`bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd breyner-pinto-portfolio

# Instalar dependencias
pnpm install
# o
npm install
\`\`\`

### Desarrollo

\`\`\`bash
# Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para producción

\`\`\`bash
# Construir para producción
pnpm build
# o
npm run build

# Iniciar servidor de producción
pnpm start
# o
npm start
\`\`\`

### Otros comandos útiles

\`\`\`bash
# Verificar tipos de TypeScript
pnpm type-check
# o
npm run type-check

# Ejecutar linter
pnpm lint
# o
npm run lint
\`\`\`

## 📁 Estructura del proyecto

\`\`\`
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── fondo-satelital.tsx
│   ├── footer-contacto.tsx
│   ├── header-navegacion.tsx
│   ├── seccion-proyectos.tsx
│   ├── tarjeta-proyecto.tsx
│   └── titulo-hero.tsx
├── hooks/                 # Hooks personalizados
│   └── use-efecto-scroll.ts
├── types/                 # Definiciones de tipos
│   └── proyecto.ts
├── public/               # Archivos estáticos
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── next.config.mjs       # Configuración de Next.js
\`\`\`

## 🎨 Efectos visuales

### Fondo satelital
- Imagen de alta resolución de la Tierra desde el espacio
- Efectos de filtro: `brightness(0.5)` y `sepia(0.2)`
- Overlay oscuro para mejorar legibilidad
- Efecto parallax sutil durante el scroll

### Animaciones interactivas
- **Hover en proyectos**: Escala `1.03x` con sombra intensa
- **Botones de contacto**: Glow azul y efectos pulse al hacer clic
- **Aparición de secciones**: Fade-in + slide combinados
- **Parallax**: Diferentes velocidades de scroll para crear profundidad

## 🎨 Paleta de colores

- **Fondo principal**: `#020617` (slate-950)
- **Fondo secundario**: `#0f172a` (slate-900)
- **Texto principal**: `#ffffff` (blanco)
- **Acentos azules**: `#3b82f6`, `#60a5fa`, `#00a3ff`
- **Texto secundario**: `#cbd5e1` (slate-300)

## 📱 Características de accesibilidad

- Atributo `lang="es"` en el HTML
- Textos alternativos descriptivos en todas las imágenes
- Navegación por teclado optimizada
- Contraste de colores cumple con WCAG 2.1
- Soporte para `prefers-reduced-motion`
- Etiquetas ARIA apropiadas

## 🔧 Configuración personalizada

### Tailwind CSS
- Colores personalizados para el tema oscuro retro
- Animaciones personalizadas (fade-in, slide-up, glow, pulse-glow)
- Configuración de fuentes con Inter
- Clases de utilidad para efectos hover

### Framer Motion
- Animaciones de entrada con scroll-trigger
- Transiciones suaves con easing personalizado
- Efectos hover y tap en elementos interactivos
- Animaciones de aparición por viewport

## 📞 Contacto

- **LinkedIn**: [Breyner Pinto](https://www.linkedin.com/in/breyner-pinto-561a7636a/)
- **WhatsApp**: [+57 318 279 2275](https://wa.me/573182792275)
- **Email**: [pintobreyner103@gmail.com](mailto:pintobreyner103@gmail.com)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**© 2025 Breyner Pinto. Todos los derechos reservados.**

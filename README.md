# 🚀 Portfolio - Christopher Montes

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://portfolio-dev-chris.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Portfolio personal moderno y responsivo desarrollado con las últimas tecnologías web. Diseñado para mostrar proyectos, habilidades y experiencia como desarrollador frontend.

![Portfolio Preview](https://raw.githubusercontent.com/zeuschris/Portfolio-Dev/main/public/images/preview.webp)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y minimalista con animaciones suaves
- 🌓 **Tema Claro/Oscuro**: Cambio dinámico entre modos con persistencia local
- 🌐 **Multiidioma**: Soporte completo para Español e Inglés con sistema de traducciones
- ⚡ **Optimización**: Rendimiento optimizado con Next.js 16 y Turbopack
- 📱 **Responsive**: Diseño totalmente adaptable a todos los dispositivos
- 🎭 **Animaciones**: Transiciones suaves y efectos visuales con Intersection Observer
- ♿ **Accesibilidad**: Diseñado siguiendo las mejores prácticas de accesibilidad web
- 📊 **Analytics**: Integración con Vercel Analytics para seguimiento de métricas

## 🛠️ Tecnologías

### Core
- **[Next.js 16](https://nextjs.org/)** - Framework de React para producción
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizables y accesibles
- **[Lucide Icons](https://lucide.dev/)** - Iconos modernos y personalizables

### Tools & Libraries
- **[Vercel Analytics](https://vercel.com/analytics)** - Análisis de rendimiento
- **[Geist Font](https://vercel.com/font)** - Tipografía optimizada de Vercel
- **Custom Hooks** - Hooks personalizados para lógica reutilizable

## 📁 Estructura del Proyecto

```
Portfolio-Dev/
├── app/                    # Directorio de aplicación Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizables
│   ├── about.tsx         # Sección Sobre mí
│   ├── contact.tsx       # Sección Contacto
│   ├── footer.tsx        # Footer
│   ├── header.tsx        # Header/Navegación
│   ├── hero.tsx          # Sección Hero
│   └── projects.tsx      # Sección Proyectos
├── contexts/             # Contextos de React
│   ├── theme-context.tsx    # Contexto de tema
│   └── language-context.tsx # Contexto de idioma
├── hooks/                # Custom Hooks
│   ├── use-typing-effect.ts  # Hook de efecto de escritura animado
│   ├── use-mobile.ts         # Hook para detectar dispositivos móviles
│   └── use-toast.ts          # Hook para notificaciones toast
├── public/               # Archivos estáticos
│   └── images/          # Imágenes del portfolio
└── styles/              # Estilos adicionales
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/zeuschris/Portfolio-Dev.git
   cd Portfolio-Dev
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno** (opcional)
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 🏗️ Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera build de producción
npm start        # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🌐 Deployment

Este proyecto está optimizado para deployment en [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zeuschris/Portfolio-Dev)

### Variables de Entorno en Producción

Configura las siguientes variables en tu plataforma de deployment:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## 🎨 Personalización

### Custom Hooks

El proyecto incluye varios hooks personalizados reutilizables:

- **`useTypingEffect`**: Crea un efecto de escritura animado con registro para evitar re-animaciones
- **`useIsMobile`**: Detecta si el dispositivo es móvil (< 768px) usando Media Queries
- **`useToast`**: Sistema de notificaciones toast con límite, timeouts y gestión de estado

### Cambiar Colores del Tema

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262.1 83.3% 57.8%;
  /* ... más variables */
}
```

### Agregar Nuevas Traducciones

Edita el archivo `contexts/language-context.tsx`:

```typescript
const translations = {
  es: {
    "nueva.clave": "Texto en español"
  },
  en: {
    "nueva.clave": "Text in English"
  }
}
```

### Modificar Contenido

- **Proyectos**: Edita `components/projects.tsx`
- **Información personal**: Edita `components/about.tsx` y `components/hero.tsx`
- **Redes sociales**: Edita `components/footer.tsx`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Christopher Montes**

- Portfolio: [portfolio-dev-chris.vercel.app](https://portfolio-dev-chris.vercel.app)
- GitHub: [@zeuschris](https://github.com/zeuschris)
- LinkedIn: [Christopher Montes](https://www.linkedin.com/in/christophermontes158)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
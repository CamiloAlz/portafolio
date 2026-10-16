# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Archivo visual

Portafolio fotográfico minimalista creado con React, Vite y Tailwind CSS.

## Iniciar el proyecto

```sh
npm install
npm run dev
```

Para comprobar una compilación de producción, ejecuta `npm run build`.

## Estructura

- `src/components/`: cabecera, galería, visor de fotografías y pie de página.
- `src/data/photographs.js`: catálogo de fotografías, títulos, ubicaciones y categorías.
- `src/App.jsx`: composición de las secciones y estado de filtros/visor.
- `src/index.css`: tema Tailwind, colores y estilos de composición.
- `public/fotos/`: carpeta para las imágenes propias.

## Añadir fotografías

1. Copia cada imagen en `public/fotos/`.
2. Añade un objeto a `photographs` en `src/data/photographs.js` y usa una ruta como `src: '/fotos/mi-foto.jpg'`.
3. Usa una categoría existente (`Paisaje`, `Ciudad` o `Retrato`) y escribe un texto alternativo que describa la imagen.

Las fotografías actuales son ejemplos remotos. Puedes reemplazar sus rutas conservando los demás campos. Cambia también el correo de contacto en `src/components/SiteFooter.jsx` antes de publicar.

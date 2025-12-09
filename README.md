# Comuni Landing Page

Landing page oficial de Comuni - Civictech que transforma comunidades.

## Descripción

Plataforma que conecta vecinos para resolver problemas cotidianos y transforma esos datos en indicadores hiperlocales para planear el futuro de nuestras ciudades.

## Tecnologías

- **React** - Framework de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS v4** - Framework de estilos
- **Google Fonts (Inter)** - Tipografía

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx       # Navegación principal
│   ├── Hero.jsx         # Sección hero con CTAs
│   ├── Problems.jsx     # 4 problemas principales
│   ├── Market.jsx       # Ventaja competitiva y TAM/SAM/SOM
│   ├── Product.jsx      # App Vecinal y Tablero de Gestión
│   ├── Traction.jsx     # Tracción, alianzas y valores
│   ├── Team.jsx         # Equipo fundador
│   ├── CTA.jsx          # Call to Action final
│   └── Footer.jsx       # Footer con links
├── App.jsx              # Componente principal
├── index.css            # Estilos globales y config de Tailwind
└── main.jsx             # Entry point
```

## Comandos

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en http://localhost:5173/

### Build
```bash
npm run build
```
Genera la versión de producción en `/dist`

### Preview
```bash
npm run preview
```
Previsualiza la build de producción

## Características

### Secciones Implementadas

1. **Hero Section**
   - Título principal y subtítulo
   - Descripción de valor
   - 2 CTAs (Comienza ahora / Conoce más)
   - Estadísticas principales (91M mexicanos, 139K condominios)

2. **Problemas**
   - 4 cards con problemas principales
   - Estadísticas y consecuencias
   - Gradientes de colores distintivos

3. **Mercado**
   - Ventaja competitiva
   - Estadísticas del mercado
   - TAM/SAM/SOM visualization

4. **Producto**
   - Tabs interactivos (App Vecinal / Tablero)
   - 4 características principales
   - Descripciones detalladas

5. **Tracción**
   - Métricas de negocio
   - Logos de partners
   - 3 valores corporativos

6. **Equipo**
   - Perfiles de fundadores
   - Miembros adicionales

7. **CTA Final**
   - Formulario de email
   - Estadísticas de negocio
   - Llamado a la acción

8. **Footer**
   - Links a secciones
   - Información de contacto
   - Copyright

### Características Técnicas

- ✅ Diseño 100% responsive
- ✅ Animaciones y transiciones suaves
- ✅ Navegación smooth scroll
- ✅ Componentes modulares
- ✅ Optimizado para rendimiento
- ✅ SEO-friendly

## Personalización

### Colores
Los colores principales se definen en `src/index.css`:
- `--color-comuni-blue`: #0066CC
- `--color-comuni-dark`: #1a1a1a
- `--color-comuni-light`: #f8f9fa

### Contenido
Cada componente en `/src/components/` puede ser editado para actualizar el contenido.

## Deployment

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Subir el contenido de /dist
```

## Próximos Pasos

- [ ] Agregar imágenes de producto
- [ ] Implementar formulario funcional
- [ ] Agregar analytics
- [ ] Optimizar imágenes
- [ ] Agregar animaciones más avanzadas
- [ ] Implementar i18n (español/inglés)

## Contacto

- **Website**: comuni.com
- **Location**: Ciudad de México & Querétaro, México

---

© 2025 Comuni. Todos los derechos reservados.

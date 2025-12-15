# Navigation Components

Este directorio contiene 6 estilos diferentes de navegación, todos responsive y con animaciones fluidas usando Framer Motion.

## Componentes Disponibles

### 1. **Dock** (Original)
Dock estilo macOS con efecto de magnificación.
- Ubicación: Bottom center
- Interacción: Hover magnification
- Responsive: Tamaños adaptativos

### 2. **HamburgerMenu**
Menú hamburguesa clásico con sidebar deslizante.
- Ubicación: Top right
- Interacción: Click para abrir/cerrar
- Responsive: Sidebar adaptativo

### 3. **BottomNav**
Barra de navegación inferior estilo mobile app.
- Ubicación: Bottom fixed
- Interacción: Indicador de tab activo
- Responsive: Iconos y labels escalables

### 4. **FloatingActionButton (FAB)**
Botón flotante con menú radial.
- Ubicación: Bottom right
- Interacción: Menú en arco al expandir
- Responsive: Tamaños y radio adaptativos

### 5. **TabBarSticky**
Barra de tabs horizontal que se mantiene visible.
- Ubicación: Top sticky
- Interacción: Indicador deslizante
- Responsive: Scroll horizontal en móvil

### 6. **SpeedDial**
Menú Speed Dial estilo Material Design.
- Ubicación: Bottom right
- Interacción: Stack vertical con labels
- Responsive: Tamaños adaptativos

## Uso

### NavigationWrapper
El componente principal que permite alternar entre estilos:

```tsx
import { NavigationWrapper } from './components/navigation';
import type { DockItemData } from './components/Dock';

const navItems: DockItemData[] = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    onClick: () => navigate('/'),
  },
  // ... más items
];

function App() {
  return (
    <NavigationWrapper
      items={navItems}
      initialStyle="dock"
      showStyleSelector={true} // Muestra selector en dev mode
    />
  );
}
```

### Usar Componentes Individuales

```tsx
import { HamburgerMenu, BottomNav, SpeedDial } from './components/navigation';

// Solo HamburgerMenu
<HamburgerMenu items={navItems} />

// Solo BottomNav
<BottomNav items={navItems} />

// Solo SpeedDial
<SpeedDial items={navItems} />
```

## Props Comunes

Todos los componentes aceptan:

```typescript
type NavProps = {
  items: DockItemData[]; // Array de items de navegación
  className?: string;    // Clases CSS adicionales
}

type DockItemData = {
  icon: React.ReactNode;  // Ícono del item
  label: React.ReactNode; // Label/texto
  onClick: () => void;    // Función al hacer click
  className?: string;     // Clases CSS opcionales
}
```

## Características Responsive

Todos los componentes incluyen:
- ✅ Breakpoints mobile-first (sm, md, lg)
- ✅ Tamaños adaptativos de íconos y texto
- ✅ Spacing y padding responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ Soporte touch y hover
- ✅ Accesibilidad (ARIA labels, keyboard nav)

## Customización

Cada componente puede personalizarse mediante:

1. **className prop**: Añadir clases Tailwind
2. **Modificar estilos internos**: Editar archivos individuales
3. **Ajustar animaciones**: Cambiar valores en motion props

## Integración con App.tsx

Para reemplazar CardNav con NavigationWrapper:

```tsx
// Antes
import CardNav from './components/CardNav'
<CardNav items={navItems} className="..." />

// Después
import { NavigationWrapper } from './components/navigation'
<NavigationWrapper 
  items={navItems}
  initialStyle="hamburger" // o cualquier otro estilo
  showStyleSelector={false}
/>
```

## Selector de Estilos (Dev Mode)

Activar `showStyleSelector={true}` muestra un panel en esquina superior izquierda que permite cambiar entre estilos en tiempo real. Útil para desarrollo y testing.

## Dependencias

- `motion/react` (Framer Motion)
- `react-icons/hi2`
- Tailwind CSS

## Notas

- Todos los componentes son client-side ('use client')
- Compatible con dark mode
- Animaciones optimizadas con GPU
- Sin dependencias pesadas adicionales

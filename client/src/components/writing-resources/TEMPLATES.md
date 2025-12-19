# Templates de Writing Resources

Este documento contiene los templates para agregar tus propios recursos de escritura.

## 📋 Estructura General

Cada recurso sigue esta estructura básica:

```typescript
{
  id: 'identificador-unico',
  type: 'tipo-seccion',
  title: 'Título del Recurso',
  shortDescription: 'Descripción breve que aparece en la tarjeta colapsada',
  description: 'Descripción completa del recurso',
  content: `Contenido detallado del recurso.
  
  Puedes usar múltiples líneas y formateo Markdown.`,
  resourceType: 'tipo-de-recurso',
  category: 'categoria-interna',
  tags: ['tag1', 'tag2', 'tag3'], // Opcional
  relatedResources: ['id-recurso-1', 'id-recurso-2'] // Opcional
}
```

---

## 📖 Template: Trama

**Archivo:** `client/src/components/writing-resources/content/TramaSection.tsx`

```typescript
{
  id: 'trama-X', // Usa números secuenciales
  type: 'trama',
  title: 'Título del Recurso de Trama',
  shortDescription: 'Descripción breve (1 línea)',
  description: 'Descripción más detallada del concepto',
  content: `Contenido principal aquí.
  
  **Puedes usar:**
  • Bullets
  • **Negrita**
  • Múltiples párrafos
  
  Ejemplo práctico...`,
  resourceType: 'structure', // Opciones: 'structure' | 'technique' | 'exercise' | 'tip'
  category: 'estructuras', // Para organización interna
  tags: ['estructura', 'ejemplo'], // Tags para búsqueda
  relatedResources: ['trama-1'] // IDs de recursos relacionados
}
```

### Tipos de resourceType para Trama:
- **structure**: Estructuras narrativas (ej: Tres Actos, Viaje del Héroe)
- **technique**: Técnicas narrativas (ej: Foreshadowing, Flashbacks)
- **exercise**: Ejercicios prácticos (ej: Ejercicio de tensión)
- **tip**: Tips y consejos rápidos

---

## 👥 Template: Personajes

**Archivo:** `client/src/components/writing-resources/content/PersonajesSection.tsx`

```typescript
{
  id: 'personaje-X', // Usa números secuenciales
  type: 'personajes',
  title: 'Título del Recurso de Personajes',
  shortDescription: 'Descripción breve (1 línea)',
  description: 'Descripción más detallada del concepto',
  content: `Contenido principal aquí.
  
  **Ejemplo:**
  • Característica 1
  • Característica 2
  
  Aplicación práctica...`,
  resourceType: 'development', // Opciones: 'development' | 'archetype' | 'dialogue' | 'motivation' | 'backstory'
  category: 'desarrollo',
  tags: ['desarrollo', 'psicología'],
  relatedResources: ['personaje-1']
}
```

### Tipos de resourceType para Personajes:
- **development**: Desarrollo de personajes
- **archetype**: Arquetipos y patrones
- **dialogue**: Técnicas de diálogo
- **motivation**: Motivaciones y deseos
- **backstory**: Historia del personaje

---

## 🏔️ Template: Ambientación

**Archivo:** `client/src/components/writing-resources/Ambientacion.tsx`

```typescript
{
  id: 'ambientacion-X',
  type: 'ambientacion',
  title: 'Título del Recurso de Ambientación',
  shortDescription: 'Descripción breve',
  description: 'Descripción completa',
  content: `Contenido detallado...`,
  resourceType: 'sensory', // Opciones: 'sensory' | 'atmosphere' | 'setting' | 'description'
  category: 'sensorial',
  tags: ['sentidos', 'inmersión']
}
```

### Tipos de resourceType para Ambientación:
- **sensory**: Descripciones sensoriales
- **atmosphere**: Creación de atmósfera
- **setting**: Construcción de escenarios
- **description**: Técnicas descriptivas

---

## 🌍 Template: Worldbuilding

**Archivo:** `client/src/components/writing-resources/Worldbuilding.tsx`

```typescript
{
  id: 'worldbuilding-X',
  type: 'worldbuilding',
  title: 'Título del Recurso de Worldbuilding',
  shortDescription: 'Descripción breve',
  description: 'Descripción completa',
  content: `Contenido detallado...`,
  resourceType: 'geography', // Opciones: 'geography' | 'culture' | 'history' | 'politics' | 'economy' | 'religion'
  category: 'geografia',
  tags: ['mapas', 'mundos']
}
```

### Tipos de resourceType para Worldbuilding:
- **geography**: Geografía y mapas
- **culture**: Culturas y sociedades
- **history**: Historia del mundo
- **politics**: Sistemas políticos
- **economy**: Economía y comercio
- **religion**: Religión y creencias

---

## ✨ Template: Sistemas de Magia

**Archivo:** `client/src/components/writing-resources/SistemasMagia.tsx`

```typescript
{
  id: 'magia-X',
  type: 'sistemas-magia',
  title: 'Título del Recurso de Magia',
  shortDescription: 'Descripción breve',
  description: 'Descripción completa',
  content: `Contenido detallado...`,
  resourceType: 'hard-magic', // Opciones: 'hard-magic' | 'soft-magic' | 'rules' | 'limitations' | 'costs'
  category: 'reglas',
  tags: ['magia', 'sistema']
}
```

### Tipos de resourceType para Sistemas de Magia:
- **hard-magic**: Magia con reglas rígidas
- **soft-magic**: Magia flexible/mística
- **rules**: Reglas del sistema
- **limitations**: Limitaciones y restricciones
- **costs**: Costos y consecuencias

---

## 📝 Cómo Agregar Recursos

1. **Navega al archivo correspondiente** según la sección (Trama, Personajes, etc.)

2. **Encuentra el array `sampleResources`**

3. **Copia el template** correspondiente

4. **Rellena los campos:**
   - `id`: Identificador único (ej: 'trama-6')
   - `title`: Título descriptivo
   - `shortDescription`: 1-2 líneas para la vista previa
   - `description`: Descripción completa
   - `content`: Contenido detallado (opcional)
   - `resourceType`: Selecciona el tipo apropiado
   - `category`: Categoría interna para organización
   - `tags`: Array de strings para búsqueda
   - `relatedResources`: Array de IDs de recursos relacionados

5. **Guarda el archivo** y los cambios se reflejarán automáticamente

---

## 💡 Consejos

- **IDs únicos:** Usa nombres descriptivos y números secuenciales
- **shortDescription:** Máximo 2 líneas, debe captar la atención
- **content:** Usa Markdown para formatear (negrita, bullets, etc.)
- **tags:** Usa tags relevantes para mejorar la búsqueda
- **relatedResources:** Conecta recursos relacionados para mejor navegación

---

## 🔍 Ejemplo Completo

```typescript
const sampleResources: TramaResource[] = [
  {
    id: 'trama-1',
    type: 'trama',
    title: 'La Estructura de Tres Actos',
    shortDescription: 'La base de toda narrativa clásica',
    description: 'La estructura de tres actos divide la historia en Planteamiento, Nudo y Desenlace. Es la estructura más utilizada en cine y literatura.',
    content: `**Acto I - Planteamiento (25%)**
• Presentación del protagonista
• Establecimiento del conflicto
• Incidente incitador

**Acto II - Nudo (50%)**
• Desarrollo del conflicto
• Punto medio decisivo
• Crisis y momento más oscuro

**Acto III - Desenlace (25%)**
• Clímax final
• Resolución
• Nuevo equilibrio`,
    resourceType: 'structure',
    category: 'estructuras',
    tags: ['estructura', 'básico', 'tres-actos'],
    relatedResources: ['trama-2', 'trama-5']
  },
  // Agrega más recursos aquí...
]
```

---

¡Listo! Ahora puedes empezar a llenar tus propios recursos de escritura.

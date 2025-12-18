// Tipos para Writing Resources

export type WRSection = 
  | 'trama'
  | 'ambientacion'
  | 'personajes'
  | 'worldbuilding'
  | 'sistemas-magia'

export type WRSubSection = {
  id: string
  label: string
}

export type WRNavItem = {
  id: WRSection
  label: string
  icon: React.ReactNode
  subSections?: WRSubSection[]
}

// Tipos para entradas de recursos
export type ResourceTag = {
  id: string
  label: string
  color: string
}

export type BaseResource = {
  id: string
  title: string
  description: string
  shortDescription?: string
  content?: string
  tags?: string[]
  relatedResources?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  category: string
}

export type TramaResource = BaseResource & {
  type: 'trama'
  resourceType: 'structure' | 'technique' | 'exercise' | 'tip'
}

export type AmbientacionResource = BaseResource & {
  type: 'ambientacion'
  resourceType: 'sensory' | 'atmosphere' | 'setting' | 'description'
}

export type PersonajesResource = BaseResource & {
  type: 'personajes'
  resourceType: 'development' | 'archetype' | 'dialogue' | 'motivation' | 'backstory'
}

export type WorldbuildingResource = BaseResource & {
  type: 'worldbuilding'
  resourceType: 'geography' | 'culture' | 'history' | 'politics' | 'economy' | 'religion'
}

export type SistemasMagiaResource = BaseResource & {
  type: 'sistemas-magia'
  resourceType: 'hard-magic' | 'soft-magic' | 'rules' | 'limitations' | 'costs'
}

export type WritingResource = 
  | TramaResource 
  | AmbientacionResource 
  | PersonajesResource 
  | WorldbuildingResource 
  | SistemasMagiaResource

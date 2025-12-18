// Tipos base para el sistema de worldbuilding

export type KWSection = 
  | 'mundo'
  | 'geografia'
  | 'historia'
  | 'facciones'
  | 'magia'
  | 'personajes'
  | 'cultura'
  | 'bestiario'
  | 'artefactos'

export type KWSubSection = {
  id: string
  label: string
  icon?: string
}

export type KWNavItem = {
  id: KWSection
  label: string
  icon: React.ReactNode
  subSections?: KWSubSection[]
}

// Tipos para entradas del worldbuilding
export type EntryTag = {
  id: string
  label: string
  color: string
}

export type BaseEntry = {
  id: string
  name: string
  description: string
  shortDescription?: string
  image?: string
  tags?: string[]
  relatedEntries?: string[]
  spoiler?: boolean
}

export type CharacterEntry = BaseEntry & {
  type: 'character'
  faction?: string
  region?: string
  role?: string
  status?: 'alive' | 'deceased' | 'unknown'
  relationships?: { characterId: string; relation: string }[]
}

export type LocationEntry = BaseEntry & {
  type: 'location'
  region: string
  locationType: 'city' | 'landmark' | 'territory' | 'building' | 'natural'
  population?: string
  ruler?: string
}

export type FactionEntry = BaseEntry & {
  type: 'faction'
  factionType: 'knightOrder' | 'coven' | 'kingdom' | 'guild' | 'other'
  leader?: string
  headquarters?: string
  members?: string[]
  allies?: string[]
  enemies?: string[]
}

export type MagicEntry = BaseEntry & {
  type: 'magic'
  magicType: 'system' | 'spell' | 'ability' | 'ritual'
  practitioners?: string[]
  requirements?: string
  limitations?: string
}

export type CreatureEntry = BaseEntry & {
  type: 'creature'
  creatureType: 'beast' | 'monster' | 'spirit' | 'undead' | 'mythical'
  habitat?: string
  dangerLevel?: 'harmless' | 'low' | 'medium' | 'high' | 'extreme'
  abilities?: string[]
}

export type ArtifactEntry = BaseEntry & {
  type: 'artifact'
  artifactType: 'weapon' | 'armor' | 'relic' | 'tool' | 'jewelry'
  currentOwner?: string
  previousOwners?: string[]
  powers?: string[]
  origin?: string
}

export type HistoryEntry = BaseEntry & {
  type: 'history'
  year?: string
  era?: string
  eventType: 'war' | 'founding' | 'death' | 'discovery' | 'treaty' | 'other'
  participants?: string[]
  locations?: string[]
}

export type CultureEntry = BaseEntry & {
  type: 'culture'
  cultureType: 'religion' | 'tradition' | 'language' | 'custom' | 'art'
  regions?: string[]
  practitioners?: string[]
}

export type WorldbuildingEntry = 
  | CharacterEntry 
  | LocationEntry 
  | FactionEntry 
  | MagicEntry 
  | CreatureEntry 
  | ArtifactEntry 
  | HistoryEntry
  | CultureEntry

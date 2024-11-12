import {IconifyInfo} from '@iconify/types'
import {BlockProperties} from 'grapesjs'

export type ModalOptions = {
  title: string
  collectionText: string
  categoryText: string
  searchText: string
}

export type ComponentOptions = {
  type: string
  name: string
}

export type BlockOptions = {
  category: string
}

export type SearchOptions = {
  // https://iconify.design/docs/api/search.html
  query?: string
  limit: number // 마치 from ~ to 처럼 동작한다.
  start: number
  total: number // response total
  prefix?: string
  prefixes?: string // seperate by comma
  translate?: {
    from?: string
    to?: string
  }
  debounce: number
  throttle: number
}

export type PluginOptions = {
  search?: Partial<SearchOptions>
  modal?: Partial<ModalOptions>
  component?: Partial<ComponentOptions>
  block?: BlockProperties
}

export type IconCollection = {
  prefix: string
  total: number
  title: string
  categories: Record<string, string[]>
  uncategorized?: string[]
  hidden?: string[]
  aliases?: Record<string, string>
  prefixes?: Record<string, string>
  suffixes?: Record<string, string>
}

export type IconSearchResponse = {
  icons: string[]
  total: number
  limit: number
  start: number
  collections: Record<string, IconifyInfo>
  request: Record<string, string[]>
}

export type SelectOption = {
  text: string
  value: string
}

export type EventListenerData = {
  type: string
  element: HTMLElement
  listener: EventListener
}

export type InsertionMode = 'drop' | 'click'

export type CommandOptions = {
  insertionMode?: InsertionMode
}

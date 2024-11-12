import type {ModalOptions, ComponentOptions, BlockOptions, SearchOptions} from '../types'

export function getModalOptions(options: Partial<ModalOptions>): ModalOptions {
  const modalOptions: ModalOptions = {
    title: options.title || 'Icons',
    collectionText: options.collectionText || 'Collection',
    categoryText: options.categoryText || 'Category',
    searchText: options.searchText || 'Search an icon...',
  }

  return modalOptions
}

export function getComponentOptions(options: Partial<ComponentOptions>): ComponentOptions {
  const componentOptions: ComponentOptions = {
    type: options.type || 'icon',
    name: options.name || 'Icon',
  }

  return componentOptions
}

export function getBlockOptions(options: Partial<BlockOptions>): BlockOptions {
  const blockOptions: BlockOptions = {
    category: options.category || 'Basic',
  }

  return blockOptions
}

export function getSearchOptions(options: Partial<SearchOptions>): SearchOptions {
  const searchOptions: SearchOptions = {
    total: options.total || 0,
    limit: options.limit || 100,
    start: options.start || 0,
    prefix: options.prefix,
    prefixes: options.prefixes,
    translate: options.translate,
    debounce: options.debounce || 500,
    throttle: options.throttle || 500,
  }

  return searchOptions
}

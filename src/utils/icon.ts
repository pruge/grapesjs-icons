import type {IconCollection, IconSearchResponse, SearchOptions, SelectOption} from '../types'

const apiUrl = import.meta.env.VITE_ICONIFY_API_URL
const pluginName = import.meta.env.VITE_PLUGIN_NAME
const logScope = `[${pluginName}::utils/icon]`

export async function search(searchOptions: SearchOptions): Promise<IconSearchResponse | null> {
  try {
    const {query, limit, start, prefix, prefixes} = searchOptions
    let optionStr = ''
    if (query) optionStr += `query=${query}`
    if (limit) optionStr += `&limit=${limit}`
    if (start) optionStr += `&start=${start}`
    if (prefix) optionStr += `&prefix=${prefix}`
    if (prefixes) optionStr += `&prefixes=${prefixes}`
    const response = await fetch(`${apiUrl}/search?${optionStr}`)
    const iconSearchResult = await response.json()

    return iconSearchResult
  } catch (error) {
    console.error(`${logScope} "${searchOptions.query}" fetching error`, error)
    return null
  }
}

export async function getIconCollection(collectionName: string): Promise<IconCollection | null> {
  try {
    const response = await fetch(`${apiUrl}/collection?prefix=${collectionName}`)
    const iconCollection = await response.json()

    return iconCollection
  } catch (error) {
    console.error(`${logScope} "${collectionName}" fetching error`, error)
    return null
  }
}

export async function getIconCollections(collectionNames: string[]): Promise<IconCollection[]> {
  const iconCollectionPromises: Promise<IconCollection | null>[] = []

  for (const collectionName of collectionNames) {
    const iconCollectionPromise = getIconCollection(collectionName)
    iconCollectionPromises.push(iconCollectionPromise)
  }

  const rawIconCollections = await Promise.all(iconCollectionPromises)
  const iconCollections = rawIconCollections.filter((iconCollection) => {
    return iconCollection !== null
  }) as IconCollection[]

  return iconCollections
}

export function getIconCollectionOptions(iconCollections: IconCollection[]): SelectOption[] {
  const iconCollectionOptions: SelectOption[] = []

  for (const {title, prefix} of iconCollections) {
    const iconCollectionOption: SelectOption = {
      text: title,
      value: prefix,
    }

    iconCollectionOptions.push(iconCollectionOption)
  }

  return iconCollectionOptions
}

export function getIconCategoryOptions(iconCollection: IconCollection): SelectOption[] {
  const {categories} = iconCollection
  const iconCategoryOptions: SelectOption[] = []

  for (const category in categories) {
    const iconCategoryOption: SelectOption = {
      text: category,
      value: category,
    }

    iconCategoryOptions.push(iconCategoryOption)
  }

  return iconCategoryOptions
}

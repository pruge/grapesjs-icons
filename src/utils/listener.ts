import {loadIcons} from 'iconify-icon'
import {contentName} from '../constants'
import {generateEmptyIconElement, generateIconElements} from './element'

import type {SearchOptions} from '../types'
import {search} from './icon'
import {debounce, throttle} from './interval'
import {translate} from 'open-google-translator'

// see https://iconify.design/docs/api/search.html
let prevSearchOptions: SearchOptions
export function onSearchChanged(searchOptions: SearchOptions): EventListener {
  return async (event) => {
    const searchElement = event.target as HTMLInputElement | null

    if (!searchElement) {
      return
    }

    const searchValue = searchElement.value

    debounce(
      'search',
      async () => {
        let translatedValue: string = searchValue

        if (searchOptions.translate) {
          translatedValue = await translate({
            listOfWordsToTranslate: [searchValue],
            fromLanguage: searchOptions.translate.from || 'auto',
            toLanguage: searchOptions.translate.to || 'en',
          }).then((translatedValue) => {
            return translatedValue[0].translation
          })
        }

        prevSearchOptions = {...searchOptions, query: translatedValue}

        await addIcons(prevSearchOptions, {clear: true})
      },
      searchOptions.debounce,
    )
  }
}

export function onContentInfinityScroll(searchOptions: SearchOptions): EventListener {
  return async (event) => {
    const contentElement = event.target as HTMLDivElement | null

    if (!contentElement) {
      return
    }

    throttle(
      'infinite-scroll',
      async () => {
        const endOfPage =
          Math.ceil(contentElement.clientHeight + contentElement.scrollTop) >= contentElement.scrollHeight
        if (endOfPage) {
          const {start, limit, total} = prevSearchOptions
          const amount = limit - start
          if (total < start) return
          prevSearchOptions = {...prevSearchOptions, start: start + amount, limit: limit + amount}
          await addIcons(prevSearchOptions, {clear: false})
        }
      },
      searchOptions.throttle,
    )
  }
}

const addIcons = async (searchOptions: SearchOptions, options: {clear: boolean}) => {
  if (options.clear) clearIcons()
  if (searchOptions.query === '' || searchOptions.query === undefined) return addEmptyIcons()
  const iconSearchResult = await search(searchOptions)
  const icons = iconSearchResult?.icons || []
  prevSearchOptions.total = iconSearchResult?.total || 0
  loadIcons(icons)

  const currentContentElement = document.querySelector<HTMLDivElement>(`.${contentName}`)
  if (!currentContentElement) {
    return
  }

  if (icons.length === 0) {
    const emptyIconElement = generateEmptyIconElement()
    currentContentElement.appendChild(emptyIconElement)
  } else {
    const iconElements = await generateIconElements(icons)
    currentContentElement.appendChild(iconElements)
  }
}

export const clearIcons = () => {
  const contentElement = document.querySelector<HTMLDivElement>(`.${contentName}`)
  if (contentElement) {
    contentElement.innerHTML = ''
  }
}

export const addEmptyIcons = () => {
  const contentElement = document.querySelector<HTMLDivElement>(`.${contentName}`)
  if (contentElement) {
    contentElement.innerHTML = ''
    const emptyIconElement = generateEmptyIconElement()
    contentElement.appendChild(emptyIconElement)
  }
}

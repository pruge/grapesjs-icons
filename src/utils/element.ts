import {
  collectionName,
  categoryName,
  searchName,
  actionsName,
  iconTargetName,
  contentName,
  containerName,
  activeColor,
} from '../constants'
import {getIconCategoryOptions} from './icon'

import type {SelectOption, IconCollection} from '../types'

function generateSelectElement(options: SelectOption[]): HTMLSelectElement {
  const selectElement = document.createElement('select')

  for (const {text, value} of options) {
    const optionElement = document.createElement('option')

    optionElement.text = text
    optionElement.value = value

    selectElement.appendChild(optionElement)
  }

  selectElement.style.maxWidth = '220px'
  selectElement.style.width = '100%'
  selectElement.style.padding = '10px 14px'
  selectElement.style.borderRadius = '6px'
  selectElement.style.border = `1px solid ${activeColor}`
  selectElement.style.fontSize = 'inherit'
  selectElement.style.fontFamily = 'inherit'
  // selectElement.style.color = 'black'
  // selectElement.style.backgroundColor = 'white'
  selectElement.style.color = 'hsl(var(--foreground))'
  selectElement.style.backgroundColor = 'hsl(var(--accent))'

  return selectElement
}

export function generateCollectionElement(options: SelectOption[]): HTMLSelectElement {
  const collectionElement = generateSelectElement(options)
  collectionElement.classList.add(collectionName)

  return collectionElement
}

function generateCategoryElement(options: SelectOption[]): HTMLSelectElement {
  const categoryElement = generateSelectElement(options)
  categoryElement.classList.add(categoryName)

  return categoryElement
}

export function generateCategoryElements(iconCollections: IconCollection[]): HTMLSelectElement[] {
  const categoryElements: HTMLSelectElement[] = []

  for (const iconCollection of iconCollections) {
    const categoryOptions = getIconCategoryOptions(iconCollection)
    const categoryElement = generateCategoryElement(categoryOptions)

    categoryElement.dataset.collectionName = iconCollection.prefix

    categoryElements.push(categoryElement)
  }

  return categoryElements
}

export function selectFirstOptionElement(element: HTMLSelectElement, value?: string): void {
  const changeEvent = new Event('change')
  const optionElements = element.options

  let optionElement = optionElements[0]

  if (value) {
    for (const optionEl of optionElements) {
      if (optionEl.value !== value) {
        continue
      }

      optionElement = optionEl
      break
    }
  }

  element.style.display = 'initial'
  element.value = optionElement.value

  element.dispatchEvent(changeEvent)
}

export function generateSearchElement(placeholder: string): HTMLInputElement {
  const searchElement = document.createElement('input')

  searchElement.type = 'search'
  searchElement.placeholder = placeholder
  searchElement.style.padding = '10px 14px'
  searchElement.style.borderRadius = '6px'
  searchElement.style.border = `1px solid ${activeColor}`
  searchElement.style.fontSize = 'inherit'
  searchElement.style.fontFamily = 'inherit'
  // searchElement.style.color = 'black'
  // searchElement.style.backgroundColor = 'white'
  searchElement.style.color = 'hsl(var(--foreground))'
  searchElement.style.backgroundColor = 'hsl(var(--accent))'
  searchElement.classList.add(searchName)

  return searchElement
}

export function generateActionsElement(searchPlaceholder: string): HTMLDivElement {
  const actionsElement = document.createElement('div')
  const searchElement = generateSearchElement(searchPlaceholder)

  actionsElement.style.display = 'flex'
  actionsElement.style.gap = '10px'
  actionsElement.style.marginBottom = '10px'
  actionsElement.classList.add(actionsName)

  searchElement.style.flexGrow = '1'

  actionsElement.appendChild(searchElement)

  return actionsElement
}

function generateIconTargetElement(iconPrefix: string, iconName: string): HTMLDivElement {
  const iconTargetElement = document.createElement('div')

  iconTargetElement.style.width = '48px'
  iconTargetElement.style.height = '48px'
  // iconTargetElement.style.color = 'black'
  iconTargetElement.style.cursor = 'pointer'
  iconTargetElement.style.borderRadius = '6px'
  // iconTargetElement.style.backgroundColor = 'white'
  iconTargetElement.classList.add(iconTargetName)

  iconTargetElement.dataset.iconPrefix = iconPrefix
  iconTargetElement.dataset.iconName = iconName

  return iconTargetElement
}

export function generateContentElement(iconCollection: IconCollection, categoryName?: string): HTMLDivElement {
  const {categories, prefix: iconPrefix} = iconCollection
  const iconNames = !categoryName ? categories[Object.keys(categories)[0]] : categories[categoryName]
  const contentElement = document.createElement('div')

  for (const iconName of iconNames) {
    const iconTargetElement = generateIconTargetElement(iconPrefix, iconName)
    contentElement.appendChild(iconTargetElement)
  }

  contentElement.style.display = 'flex'
  contentElement.style.gap = '10px'
  contentElement.style.flexWrap = 'wrap'
  contentElement.style.overflowY = 'auto'
  contentElement.classList.add(contentName)

  return contentElement
}

export function generateContentElement2(): HTMLDivElement {
  const contentElement = document.createElement('div')

  contentElement.style.display = 'flex'
  contentElement.style.gap = '10px'
  contentElement.style.flexWrap = 'wrap'
  contentElement.style.overflowY = 'auto'
  contentElement.classList.add(contentName)

  return contentElement
}

export function generateIconElements(icons: string[]): DocumentFragment {
  const fragmentElement = new DocumentFragment()

  for (const icon of icons) {
    const [iconPrefix, iconName] = icon.split(':')
    const iconTargetElement = generateIconTargetElement(iconPrefix, iconName)
    fragmentElement.appendChild(iconTargetElement)
  }

  return fragmentElement
}

export function generateContainerElement(): HTMLDivElement {
  const containerElement = document.createElement('div')

  containerElement.style.display = 'flex'
  containerElement.style.flexDirection = 'column'
  containerElement.style.gap = '10px'
  containerElement.style.width = '100%'
  containerElement.classList.add(containerName)

  return containerElement
}

export function getFragmentHtml(fragmentElement: DocumentFragment): HTMLDivElement {
  const containerElement = generateContainerElement()
  containerElement.appendChild(fragmentElement)

  return containerElement
}

export function generateModalContent(searchPlaceholder: string): HTMLDivElement {
  const fragmentElement = new DocumentFragment()
  const actionsElement = generateActionsElement(searchPlaceholder)
  const contentElement = generateContentElement2()

  fragmentElement.appendChild(actionsElement)
  fragmentElement.appendChild(contentElement)

  return getFragmentHtml(fragmentElement)
}

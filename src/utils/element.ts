import {searchName, actionsName, iconTargetName, contentName, containerName, activeColor} from '../constants'

import {getSvgIcon} from './svg'
import {attachEventListener} from './event-listener'

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

async function generateIconTargetElement(iconPrefix: string, iconName: string): Promise<HTMLDivElement> {
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
  const iconFullName = `${iconPrefix}:${iconName}`
  const svgIcon = await getSvgIcon(iconFullName)
  if (svgIcon) {
    iconTargetElement.innerHTML = svgIcon
    attachEventListener('click', iconTargetElement, () => {
      // @ts-ignore
      const selectedComponent = window.editor.getSelected()

      if (!selectedComponent) {
        return
      }

      selectedComponent.set({
        content: svgIcon,
      })

      // @ts-ignore
      window.editor.Modal.close()
    })
  }

  return iconTargetElement
}

export function generateContentElement(): HTMLDivElement {
  const contentElement = document.createElement('div')

  contentElement.style.display = 'flex'
  contentElement.style.gap = '10px'
  contentElement.style.flexWrap = 'wrap'
  contentElement.style.overflowY = 'auto'
  contentElement.classList.add(contentName)

  const emptyIconElement = generateEmptyIconElement()

  contentElement.appendChild(emptyIconElement)

  return contentElement
}

export function generateEmptyIconElement(): HTMLDivElement {
  const emptyElement = document.createElement('div')
  emptyElement.style.width = '100%'
  emptyElement.style.height = '100%'
  emptyElement.style.display = 'flex'
  emptyElement.style.justifyContent = 'center'
  emptyElement.style.alignItems = 'center'
  emptyElement.style.fontSize = '34px'
  emptyElement.style.color = 'hsl(var(--foreground))'
  emptyElement.innerHTML = 'No icons found'
  emptyElement.id = 'empty-icon'
  return emptyElement
}

export async function generateIconElements(icons: string[]): Promise<DocumentFragment> {
  const fragmentElement = new DocumentFragment()

  for (const icon of icons) {
    const [iconPrefix, iconName] = icon.split(':')
    const iconTargetElement = await generateIconTargetElement(iconPrefix, iconName)
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
  const contentElement = generateContentElement()

  fragmentElement.appendChild(actionsElement)
  fragmentElement.appendChild(contentElement)

  return getFragmentHtml(fragmentElement)
}

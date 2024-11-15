import {searchName, modalContainerName, contentName} from '../constants'
import {generateModalContent} from './element'
import {attachEventListener, detachAllEventListeners} from './event-listener'
import {onContentInfinityScroll, onSearchChanged} from './listener'

import type {Editor} from 'grapesjs'
import type {ModalOptions, SearchOptions} from '../types'

function attachListeners(searchOptions: SearchOptions) {
  const searchElement = document.querySelector<HTMLInputElement>(`.${searchName}`)
  const contentElement = document.querySelector<HTMLDivElement>(`.${contentName}`)

  if (!searchElement || !contentElement) {
    return
  }

  const searchListener = onSearchChanged(searchOptions)
  const contentListener = onContentInfinityScroll(searchOptions)

  attachEventListener<HTMLInputElement>('keypress', searchElement, searchListener)
  attachEventListener<HTMLDivElement>('scroll', contentElement, contentListener)
}

export function openModal(editor: Editor, modalOptions: ModalOptions, searchOptions: SearchOptions) {
  const {Modal} = editor
  const {title, searchText} = modalOptions

  const content = generateModalContent(searchText)
  const modalModule = Modal.open({
    title,
    content,
    attributes: {
      class: modalContainerName,
    },
  })

  modalModule.onceClose(() => {
    detachAllEventListeners()
  })

  setTimeout(() => attachListeners(searchOptions), 200)
}

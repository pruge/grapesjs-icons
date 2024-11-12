import {containerName, openModalName} from './constants'
import {getModalOptions, getComponentOptions, getSearchOptions} from './utils/option'
import {openModal} from './utils/modal'
import {clearCache, setInsertionMode} from './utils/storage'

import type {Plugin, Command, Component} from 'grapesjs'
import type {PluginOptions, CommandOptions} from './types'
import {detachAllEventListeners} from './utils/event-listener'
import {enableCache} from 'iconify-icon'

const commandOptions: Required<CommandOptions> = {
  insertionMode: 'drop',
}
const plugin: Plugin<PluginOptions> = (editor, options) => {
  const {modal = {}, component = {}, block = {}, search = {}} = options
  const modalOptions = getModalOptions(modal)
  const searchOptions = getSearchOptions(search)
  const {type, name} = getComponentOptions(component)

  function listenEditorEvents() {
    editor.on('load', async () => {
      enableCache('session') // not working.
      // loadSvgIcons(editor)
      // @ts-ignore
      window.editor = editor
    })

    editor.on('modal:close', () => {
      const containerElement = document.querySelector<HTMLDivElement>(`.${containerName}`)

      if (!containerElement) {
        return
      }

      clearCache()
      detachAllEventListeners()
    })

    editor.on('block:drag:stop', (component: Component) => {
      const {'data-type': componentType} = component.getAttributes()

      if (componentType !== type || editor.Modal.isOpen()) {
        return
      }

      editor.select(component)
      editor.Commands.run(openModalName, commandOptions)
    })
  }

  // editor.DomComponents.addType(type, {
  //   isComponent(element) {
  //     return element.dataset?.type === type
  //   },
  //   model: {
  //     defaults: {
  //       name,
  //       tagName: 'span',
  //       attributes: {
  //         'data-type': type,
  //       },
  //       style: {
  //         display: 'inline-block',
  //         width: '48px',
  //         height: '48px',
  //       },
  //     },
  //   },
  //   // view: {
  //   //   events: {
  //   //     // @ts-ignore
  //   //     dblclick: 'openIconModal',
  //   //   },
  //   //   openIconModal(event: Event) {
  //   //     event.preventDefault()

  //   //     const element = event.target as HTMLElement
  //   //     const elementType = element?.getAttribute('data-type') || ''
  //   //     const parentByType = element?.closest(`[data-type="${type}"]`)

  //   //     if ((elementType !== type && !parentByType) || editor.Modal.isOpen()) {
  //   //       return
  //   //     }

  //   //     editor.Commands.run(openModalName, commandOptions)
  //   //   },
  //   // },
  // })

  editor.Commands.add<Command>(openModalName, (_editor, _sender, options: CommandOptions = {}) => {
    setInsertionMode(options.insertionMode)
    openModal(editor, modalOptions, searchOptions)
  })

  editor.BlockManager.add(type, {
    ...{
      category: 'Basic',
      label: name,
      content: {
        type,
      },
      ...block,
    },
  })

  listenEditorEvents()
}

export default plugin

import {iconExists, getIcon} from 'iconify-icon'

export async function getSvgIcon(iconName: string, retry = 10): Promise<string | null> {
  if (retry === 0) {
    return null
  }

  if (!iconExists(iconName)) {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return await getSvgIcon(iconName, retry - 1)
  }

  const {body: iconBody, width: iconWidth, height: iconHeight} = getIcon(iconName)
  const rawSvgIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${iconWidth} ${iconHeight}"
      width="100%"
      height="100%"
    >
      ${iconBody}
    </svg>
  `
  const svgIcon = rawSvgIcon.replace(/^\s+/gm, '').replace(/[\r\n]+/g, ' ')

  return svgIcon
}

// export function loadSvgIcons(editor: Editor, msInterval = 1000) {
//   onInterval(() => {
//     const iconTargetElements = document.querySelectorAll<HTMLDivElement>(`.${iconTargetName}`)

//     if (iconTargetElements.length === 0) {
//       return
//     }

//     for (const iconTargetElement of iconTargetElements) {
//       const iconPrefix = iconTargetElement.dataset.iconPrefix
//       const iconName = iconTargetElement.dataset.iconName
//       const iconFullName = `${iconPrefix}:${iconName}`
//       const svgIcon = getSvgIcon(iconFullName)

//       if (!svgIcon) {
//         console.log(`${iconFullName} not found`)
//         continue
//       }

//       iconTargetElement.classList.replace(iconTargetName, svgIconName)
//       iconTargetElement.innerHTML = svgIcon

//       attachEventListener('click', iconTargetElement, () => {
//         const selectedComponent = editor.getSelected()

//         if (!selectedComponent) {
//           return
//         }

//         selectedComponent.set({
//           content: svgIcon,
//         })
//         editor.Modal.close()
//       })
//     }
//   }, msInterval)
// }

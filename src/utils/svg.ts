import {getIcon} from 'iconify-icon'

export async function getSvgIcon(iconName: string, retry = 10): Promise<string | null> {
  if (retry === 0) {
    return null
  }

  try {
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
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return await getSvgIcon(iconName, retry - 1)
  }
}

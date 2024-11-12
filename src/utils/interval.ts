export function onInterval(callbackFn: () => void, msInterval: number): number {
  let lastTime = 0

  const checkTime = (currTime: number): boolean => {
    const diffTime = currTime - lastTime

    if (lastTime && diffTime < msInterval) {
      return false
    }

    lastTime = currTime
    return true
  }
  const execute = (currTime = 0): number => {
    const isTime = checkTime(currTime)

    if (isTime) {
      callbackFn()
    }

    return window.requestAnimationFrame(execute)
  }

  return execute()
}

let throttleTimer: Record<string, boolean> = {}
export const throttle = (key: string, callback: () => void, time: number) => {
  if (throttleTimer[key]) return

  throttleTimer[key] = true

  setTimeout(() => {
    callback()
    throttleTimer[key] = false
  }, time)
}

let debounceTimer: Record<string, number> = {}
export const debounce = (key: string, callback: () => void, time: number) => {
  clearTimeout(debounceTimer[key])
  debounceTimer[key] = setTimeout(() => {
    callback()
  }, time)
}

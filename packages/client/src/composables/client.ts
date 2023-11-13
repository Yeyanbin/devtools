import { useDevToolsState } from '@vue-devtools-next/core'

const fns: (() => void)[] = []

export function onDevToolsClientConnected(fn: () => void) {
  fns.push(fn)

  const { connected } = useDevToolsState()

  if (connected.value) {
    fns.forEach(fn => fn())
    return
  }

  watchOnce(connected, (v) => {
    v && fns.forEach(fn => fn())
  })

  onUnmounted(() => {
    fns.length = 0
  })

  return () => {
    fns.splice(fns.indexOf(fn), 1)
  }
}
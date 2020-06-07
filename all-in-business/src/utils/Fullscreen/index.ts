export function openFullscreen() {
  const elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  }
}

export async function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}


export const reAllocateStorage = (key: string, value: any) => {
  localStorage.removeItem(key)
  const obj = JSON.stringify(value)
  localStorage.setItem(key, obj)
}

export const findValueByKey = (key: string, target: string) => {
  const value = localStorage.getItem(key)
  if (!value) {
    return
  }
  const parsed = (JSON.parse(value) as Record<string, any>) || {}
  return parsed[target]
}

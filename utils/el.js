export function createEl(type, props, text) {
  const el = document.createElement(type)

  Object.keys(props).forEach(prop => {
    el[prop] = props[prop]
  })

  const txtNode = document.createTextNode(text)

  el.appendChild(txtNode)
  return el
}

export function h1(...args) {
  createEl(`h1`, ...args)
}

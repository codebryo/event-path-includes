function parseSelector  (selector) {
  const logic = {
    isClass: selector.startsWith('.'),
    isId: selector.startsWith('#')
  }

  const key = logic.isClass ? 'className' : logic.isId ? 'id' : ''

  return {
    key,
    val: selector.substr(1)
  }
}

function eventPathIncludes (event, selector) {

  if (!event || !event.path) return false

  const selectorDetails = parseSelector(selector)
  return event.path.some(el => {
    if (!el[selectorDetails.key]) return false
    return el[selectorDetails.key].includes(selectorDetails.val)
  })

}

module.exports = {
  parseSelector,
  default: eventPathIncludes
}

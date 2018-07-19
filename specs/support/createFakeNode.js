function createFakeNode({ className = '', id = '' }) {
  return {
    className,
    id,
  }
}

module.exports = {
  default: createFakeNode
}

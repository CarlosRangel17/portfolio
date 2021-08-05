/* eslint-disable global-require */

const polyfills = () => {
  // polyfill for "startsWith" for IE
  /* eslint-disable */
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      value(search, rawPos) {
        const pos = rawPos > 0 ? rawPos | 0 : 0
        return this.substring(pos, pos + search.length) === search
      }
    })
  }
  /* eslint-enable */
}

export default polyfills

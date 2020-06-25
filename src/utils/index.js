// FUNCTION COUNT THE OBJECT PROPERTIES
const countObjectProperties = obj => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length // convert keys to an array and return the length
  }
  return 0
}
export {countObjectProperties}

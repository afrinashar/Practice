 
export default function Includes(array, searchElement, fromIndex = 0) {
    if (array == null) {
      throw new TypeError('array is null or not defined');
    }
  
    const len = array.length >>> 0;
    
    if (len === 0) {
      return false;
    }
  
    const absoluteFromIndex = Math.abs(fromIndex);
    const startIndex = absoluteFromIndex > len ? 0 : absoluteFromIndex;
  
    for (let i = startIndex; i < len; i++) {
      if (array[i] === searchElement) {
        return true;
      }
    }
  
    return false;
  }
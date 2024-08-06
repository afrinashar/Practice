// arrayUtils.js

export function  ToString(array) {
    return array.join(',');
  }
  
  export function  Splice(array, start, deleteCount, ...items) {
    const deleted = array.slice(start, start + deleteCount);
    const remaining = [...array.slice(0, start), ...items, ...array.slice(start + deleteCount)];
    array.length = 0;
    array.push(...remaining);
    return deleted;
  }
  
  export function  Push(array, ...elements) {
    array.length += elements.length;
    for (let i = 0; i < elements.length; i++) {
      array[array.length - elements.length + i] = elements[i];
    }
    return array.length;
  }
  
  export function  Pop(array) {
    if (array.length === 0) return undefined;
    const lastElement = array[array.length - 1];
    array.length--;
    return lastElement;
  }
  
  export function  Unshift(array, ...elements) {
    array.splice(0, 0, ...elements);
    return array.length;
  }
  
  export function  Shift(array) {
    if (array.length === 0) return undefined;
    const firstElement = array[0];
    array.splice(0, 1);
    return firstElement;
  }
  
  export function  Replace(str, search, replacement) {
    return str.split(search).join(replacement);
  }
  
  export function  Concat(...arrays) {
    return [].concat(...arrays);
  }
  
  export function  Sort(array, compareFunction) {
    return [...array].sort(compareFunction);
  }
  
  export function  ForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  export function  Filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  export function  Find(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }
  
  export function Join(array, separator = ',') {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) result += separator;
    }
    return result;
  }
  
  export function  FindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
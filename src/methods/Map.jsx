<<<<<<< HEAD
 
function Map(array, callback) {
    if (!Array.isArray(array)) {
      throw new TypeError('First argument must be an array');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('Second argument must be a function');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
=======
 
function Map(array, callback) {
    if (!Array.isArray(array)) {
      throw new TypeError('First argument must be an array');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('Second argument must be a function');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
  export default Map;
const  Data=[
{
    type: 'easy', header:"  Easy", content : `Basic Logic
//Check if a number is even or odd:
 
function isEven(num) {
  return num % 2 === 0;
}

//Calculate factorial of a number:
  
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


//Reverse a string:

function reverseString(str) {
  return str.split('').reverse().join('');
}


//Find the maximum number in an array:

function findMax(arr) {
  return Math.max(...arr);
}


//Check if a string is a palindrome:

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}


//Count occurrences of a character in a string:

function countChar(str, char) {
  return str.split(char).length - 1;
}


//Find the average of numbers in an array:

function average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

//Remove duplicates from an array:

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


//Convert Celsius to Fahrenheit:

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


//Check if a number is prime:

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}`

    
},
{
    type: 'medium',header:"Medium  ", content:`Intermediate Logic
//Sort an array in ascending order:
 
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}


//Find the median of an array:

function median(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}


//Find the longest word in a sentence:

function longestWord(sentence) {
  return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}


//Flatten a nested array:

function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) =>
    flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}


//Find the most frequent element in an array:

function mostFrequent(arr) {
  const frequency = {};
  let max = 0;
  let result;

  for (const item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > max) {
      max = frequency[item];
      result = item;
    }
  }

  return result;
}


//Generate Fibonacci sequence up to n terms:

function fibonacci(n) {
  const result = [0, 1];
  while (result.length < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}


//Check if two strings are anagrams:
 
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
Get the current date in YYYY-MM-DD format:

 
 
function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}
  
//Convert a number to binary:

function toBinary(num) {
  return num.toString(2);
}


//Find common elements between two arrays:
 
function commonElements(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}`
        
    
},
{
    type: 'hard',header:"  Hard", content:`Advanced Logic
//Generate permutations of an array:

function permutations(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    for (const perm of permutations(remaining)) {
      result.push([item].concat(perm));
    }
  }
  return result;
}


//Debounce a function:

function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}


//Throttle a function:
 
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}


//Implement a basic event emitter:
 
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }
}


//Deep clone an object:

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//Find the intersection of two arrays:
 
function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}


//Calculate the permutation count of n items:
  
function permutationsCount(n) {
  return factorial(n);
}


//Calculate the combinations count of n items:
 
function combinationsCount(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}


//Merge two sorted arrays:
  
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}


//Find all unique subsets of an array:

function uniqueSubsets(arr) {
  const result = [[]];
  for (const item of arr) {
    const newSubsets = result.map(subset => subset.concat(item));
    result.push(...newSubsets);
  }
  return result;
}


//Create a memoized function:
 
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}


//Find the shortest path in a graph (Dijkstra’s algorithm):

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const nodes = new PriorityQueue();
  nodes.enqueue(start, 0);

  for (const node of Object.keys(graph)) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (!nodes.isEmpty()) {
    const { value: currentNode } = nodes.dequeue();
    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
      const distance = distances[currentNode] + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        nodes.enqueue(neighbor, distance);
      }
    }
  }
  return distances;
}


//Implement a basic LRU cache:

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.delete(key);
    this.cache.set(key, value);
  }
}


//Generate a random color:

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
Convert a string to title case:

 
 
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
Find the missing number in a sequence:

 
 
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}


//Check if a string has balanced parentheses:
 
function isBalanced(str) {
  const stack = [];
  const brackets = { '(': ')', '{': '}', '[': ']' };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (brackets[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}


//Find the intersection of two arrays using Set:

function setIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter(item => set2.has(item));
}


//Implement a simple stack:

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}


//Implement a simple queue:
 
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}


//Convert a URL string into an object:
 
function urlToObject(url) {
  const params = new URLSearchParams(url.split('?')[1]);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
}


//Calculate the distance between two points:

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


//Generate a random integer between a range:

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Find all prime numbers up to a limit:
 
function primesUpTo(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}


//Create a throttle function:

function throttle(fn, wait) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      return fn(...args);
    }
  };
}


//Generate a unique identifier:

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}


//Find the closest pair of points:

function closestPair(points) {
  let minDistance = Infinity;
  let pair = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = Math.sqrt(Math.pow(points[j][0] - points[i][0], 2) + Math.pow(points[j][1] - points[i][1], 2));
      if (distance < minDistance) {
        minDistance = distance;
        pair = [points[i], points[j]];
      }
    }
  }

  return pair;
}


//Check if a number is a power of two:

function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0 && num > 0;
}


//Implement a basic binary search algorithm:

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}


//Check if two arrays are equal:
 
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
`
        
    
},
{
    easy:{
        
    }
}



]
export default Data
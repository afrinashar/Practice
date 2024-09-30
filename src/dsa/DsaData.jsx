const  Data=[
    {
        type: 'array', header:"  Array", content : `let fruits = ['apple', 'banana', 'mango'];

// Accessing elements
console.log(fruits[0]); // 'apple'

// Adding elements
fruits.push('orange'); // Adds to the end
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']

// Removing elements
fruits.pop(); // Removes from the end
console.log(fruits); // ['apple', 'banana', 'mango']
`}, {
        type: 'stack', header:"  Stack", content : `class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove an element from the stack
  pop() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.pop();
  }

  // Peek the top element
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display stack elements
  printStack() {
    return this.items.join(' ');
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.printStack()); // '10 20'
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
`},
        {
            type: 'queue', header:"  Queue", content : `class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove an element from the queue
  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  // Peek the front element
  front() {
    if (this.isEmpty()) return 'No elements in the queue';
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display queue elements
  printQueue() {
    return this.items.join(' ');
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.printQueue()); // '10 20'
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
`},
            {
                type: 'linkedlist', header:"Linked List", content : `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Print all nodes
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.printList(); // 10 20
`},
                {
                    type: 'hashtable', header:"  Hashtable", content : `class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
  }

  // Hash function to convert a key to an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Set key-value pair
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = [key, value];
  }

  // Get value by key
  get(key) {
    const index = this.hash(key);
    return this.table[index] ? this.table[index][1] : undefined;
  }

  // Remove key-value pair
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
}

const hashTable = new HashTable();
hashTable.set('name', 'John');
console.log(hashTable.get('name')); // 'John'
hashTable.remove('name');
console.log(hashTable.get('name')); // undefined
`},
                    {
                        type: 'set', header:"  Set", content : `let set = new Set();

// Add elements
set.add(1);
set.add(2);
set.add(3);
set.add(3); // Duplicate, will not be added

console.log(set); // Set { 1, 2, 3 }

// Check if a value exists
console.log(set.has(2)); // true

// Remove an element
set.delete(2);
console.log(set); // Set { 1, 3 }

// Convert set to an array
let arrayFromSet = Array.from(set);
console.log(arrayFromSet); // [1, 3]
`},
                        {
                            type: 'graph', header:"  Graph", content : `class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex (node)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge (connection)
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  // Display the graph
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, '->', this.adjacencyList[vertex].join(', '));
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.printGraph(); 
// A -> B, C
// B -> A
// C -> A
`},
                            {
                                type: 'bubblesort', header:"Bubble SOrt", content : `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
`},
                                {
                                    type: 'selectionsort', header:"  Selection Sort", content : `function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the first element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

let arr2 = [29, 10, 14, 37, 13];
console.log(selectionSort(arr2)); // [10, 13, 14, 29, 37]
`},
                                    {
                                        type: 'insertionsort', header:"  Insertion Sort ", content : `function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr3 = [12, 11, 13, 5, 6];
console.log(insertionSort(arr3)); // [5, 6, 11, 12, 13]
`},
                                        {
                                            type: 'mergesort', header:"  Merge Sort ", content : `function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr4 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr4)); // [3, 9, 10, 27, 38, 43, 82]
`},
                                            {
                                                type: 'quicksort', header:"  Quick Sort", content : `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr5 = [10, 80, 30, 90, 40, 50, 70];
console.log(quickSort(arr5)); // [10, 30, 40, 50, 70, 80, 90]
`},
                                                {
                                                    type: 'linearsearch', header:"  Linear Search", content : `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the element is found
    }
  }
  return -1; // Return -1 if not found
}

let arr6 = [2, 3, 4, 10, 40];
console.log(linearSearch(arr6, 10)); // 3
console.log(linearSearch(arr6, 5));  // -1
`},
                                                    {
                                                        type: 'binarysearch', header:"  Binary Search", content : `function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the element is found
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Return -1 if not found
}

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArr, 7)); // 6
console.log(binarySearch(sortedArr, 10)); // -1
`},
                                                        {
                                                            type: 'jumpsearch', header:"  Jump Search", content : `function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  if (arr[prev] === target) return prev;
  return -1;
}

let sortedArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(jumpSearch(sortedArr2, 6)); // 6
console.log(jumpSearch(sortedArr2, 15)); // -1
`},
                                                            {
                                                                type: 'memoization', header:"  Fibonacci memoization", content : `function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(6)); // Output: 8
console.log(fib(50)); // Output: 12586269025
`},
                                                                {
                                                                    type: 'tabulation', header:"  Knapsack Problem (Tabulation)", content : `function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}

let weights = [2, 3, 4, 5];
let values = [3, 4, 5, 6];
let capacity = 5;
console.log(knapsack(weights, values, capacity)); // Output: 7
`},
                                                                    {
                                                                        type: 'greedy', header:"  Activity Selection (Greedy)", content : `function activitySelection(activities) {
  activities.sort((a, b) => a[1] - b[1]); // Sort by finish time
  let selected = [];
  let lastFinishTime = 0;

  for (let i = 0; i < activities.length; i++) {
    if (activities[i][0] >= lastFinishTime) {
      selected.push(activities[i]);
      lastFinishTime = activities[i][1];
    }
  }

  return selected;
}

let activities = [[1, 3], [2, 4], [3, 5], [0, 6], [5, 7], [8, 9]];
console.log(activitySelection(activities)); // Output: [[1, 3], [3, 5], [5, 7], [8, 9]]
`},
                                                                        {
                                                                            type: 'divid', header:"  Merge Sort (Divide and Conquer)", content : `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr)); // Output: [2, 3, 4, 5, 8]
`},
                                                                            {
                                                                                type: 'backtracking', header:"  Backtracking", content : `function solveNQueens(n) {
  let result = [];
  let board = Array(n).fill().map(() => Array(n).fill('.'));

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }

  function placeQueens(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 'Q';
        placeQueens(row + 1);
        board[row][col] = '.';
      }
    }
  }

  placeQueens(0);
  return result;
}

console.log(solveNQueens(4));
/* Output:
[ 
  [ '.Q..', '...Q', 'Q...', '..Q.' ], 
  [ '..Q.', 'Q...', '...Q', '.Q..' ] 
]
*/
`},{
                                                                                    type: 'bitmanipulation', header:"  Bit Manipulation", content : `function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

console.log(countSetBits(5)); // Output: 2 (Binary of 5 is 101)
`},
                                                                                    {
                                                                                        type: 'slidingwindow', header:"  Sliding Window", content : `function maxSumSubarray(arr, k) {
  let maxSum = 0, currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];
console.log(maxSumSubarray(arr, 3)); // Output: 9 (5+1+3)
`},
                                                                                        {
                                                                                            type: 'unionfind', header:"  Union Find", content : `class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill(0).map((_, i) => i);
    this.rank = Array(size).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

function hasCycle(edges, n) {
  let uf = new UnionFind(n);

  for (let [u, v] of edges) {
    if (uf.find(u) === uf.find(v)) {
      return true;
    }
    uf.union(u, v);
  }
  return false;
}

let edges = [[0, 1], [1, 2], [2, 0], [3, 4]];
console.log(hasCycle(edges, 5)); // Output: true (cycle exists)
`},
                                                                                            {
                                                                                                type: 'heap', header:"  Heap", content : `class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Swap helper function
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a value
  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else break;
    }
  }

  // Remove the root node (min element)
  remove() {
    if (this.heap.length < 2) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;

      if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === currentIndex) break;

      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }

    return root;
  }

  // Print heap
  printHeap() {
    return this.heap.join(" ");
  }
}

let minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log(minHeap.printHeap()); // Output: 1 3 8 5
minHeap.remove();
console.log(minHeap.printHeap()); // Output: 3 5 8
`},
                                                                                                {
                                                                                                    type: 'array', header:"  Array", content : ``},
                                                                                                    {
                                                                                                        type: 'array', header:"  Array", content : ``},
                                                                                                        {
                                                                                                            type: 'array', header:"  Array", content : ``},
                                                                                                            {
                                                                                                                type: 'array', header:"  Array", content : ``},]
        export default Data                
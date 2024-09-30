 import CodeBase from "../assets/CodeBase";
import Data from "./DsaData";
import 'bootstrap/dist/css/bootstrap.min.css';

function DsaTopicsJS() {
  // Find data for each difficulty level
  const arrayData = Data.find(item => item.type === 'array') || { header: 'Array', content: '' };
  const stackData = Data.find(item => item.type === 'stack') || { header: 'Stack', content: '' };
  const linkedlistData = Data.find(item => item.type === 'linkedlist') || { header: 'LinkedLIst', content: '' };
  const queueData = Data.find(item => item.type === 'queue') || { header: 'Queue', content: '' };
  const hashtableData = Data.find(item => item.type === 'hashtable') || { header: 'Hashtable', content: '' };
  const setData = Data.find(item => item.type === 'set') || { header: 'Set', content: '' };
  const graphData = Data.find(item => item.type === 'graph') || { header: 'Graph', content: '' };
  const bubblesortData = Data.find(item => item.type === 'bubblesort') || { header: 'Bubble Sort', content: '' };
  const selectionsortData = Data.find(item => item.type === 'selectionsort') || { header: 'Selection Sort', content: '' };
  const insertionData = Data.find(item => item.type === 'insertionsort') || { header: 'Inserton Sort', content: '' };
  const mergesortData = Data.find(item => item.type === 'mergesort') || { header: 'Merge Sort', content: '' };
  const quicksortData = Data.find(item => item.type === 'quicksort') || { header: 'Quick Sort', content: '' };
  const linearsearchData = Data.find(item => item.type === 'linearsearch') || { header: 'Linear Search', content: '' };
  const binarysearchData = Data.find(item => item.type === 'binarysearch') || { header: 'Binary Search', content: '' };
  const jumpsearchData = Data.find(item => item.type === 'jumpsearch') || { header: 'Jump Search', content: '' };
  const memoizationData = Data.find(item => item.type === 'memoization') || { header: 'Memoization', content: '' };
  const tabulationData = Data.find(item => item.type === 'tabulation') || { header: 'Tabulation', content: '' };
  const greedyData = Data.find(item => item.type === 'greedy') || { header: 'Greedy', content: '' };
  const  dividData = Data.find(item => item.type === 'divid') || { header: 'Divid', content: '' };
  const backtrackingData = Data.find(item => item.type === 'backtracking') || { header: 'Backtracking', content: '' };
  const bitmanupulationData = Data.find(item => item.type === 'bitmanipulation') || { header: 'Bit Manupulation', content: '' };
  const slidingwindowData = Data.find(item => item.type === 'slidingwindow') || { header: 'Sliding Window', content: '' };
  const unionfindData = Data.find(item => item.type === 'unionfind') || { header: 'Union Find', content: '' };
  const heapData = Data.find(item => item.type === 'heap') || { header: 'Heap', content: '' };

  return (
    <div className="container my-5">
      <div className="col mb-4">
        <div className="col bg-success">
          <h2 className="text-light mb-2">{arrayData.header}</h2>
          An array is a collection of elements stored at contiguous memory locations. It can store multiple values in a single variable, and the values can be accessed using an index.
          <CodeBase  header={arrayData.header} content={arrayData.content} />
        </div>
      </div>

      <div className="col mb-4">
        <div className="col bg-warning">
          <h2 className="text-light mb-2">{stackData.header}</h2>
          A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can only be added or removed from the top of the stack.<CodeBase header={stackData.header} content={stackData.content} />
        </div>
      </div>

      <div className="col">
        <div className="col bg-danger">
          <h2 className=" text-light mb-2">{linkedlistData.header}</h2>
          A linked list is a linear data structure where each element (node) contains a reference (link) to the next node in the sequence. <CodeBase header={linkedlistData.header} content={linkedlistData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-light">
          <h2 className=" text-dark mb-2">{queueData.header}</h2>
          A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the end and removed from the front. <CodeBase header={queueData.header} content={queueData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-dark">
          <h2 className=" text-light mb-2">{hashtableData.header}</h2>
          A hash table stores key-value pairs, and it uses a hash function to compute an index into an array of buckets, from which the desired value can be found. <CodeBase header={hashtableData.header} content={hashtableData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-primary">
          <h2 className=" text-light mb-2">{setData.header}</h2>
          A set is a collection of unique values. It allows you to store unique elements and perform operations such as union, intersection, and difference.  <CodeBase header={setData.header} content={setData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-secondary">
          <h2 className=" text-dark mb-2">{graphData.header}</h2>
          A graph is a collection of nodes (vertices) and edges that represent connections between the nodes. It can be either directed or undirected.  <CodeBase header={graphData.header} content={graphData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-info">
          <h2 className=" text-light mb-2">{heapData.header}</h2>
          <CodeBase header={heapData.header} content={heapData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-info">
          <h2 className=" text-light mb-2">{bubblesortData.header}</h2>
          Bubble sort is the simplest sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It has a time complexity of O(n²).  <CodeBase header={bubblesortData.header} content={bubblesortData.content} />
        </div>
      </div>
      <div className="col mb-4">
        <div className="col bg-success">
          <h2 className="text-light mb-2">{selectionsortData.header}</h2>
          Selection sort repeatedly finds the minimum element from the unsorted part of the array and swaps it with the first element. It also has a time complexity of O(n²). <CodeBase  header={selectionsortData.header} content={selectionsortData.content} />
        </div>
      </div>

      <div className="col mb-4">
        <div className="col bg-warning">
          <h2 className="text-light mb-2">{insertionData.header}</h2>
          Insertion sort builds a sorted array one element at a time, picking elements from the unsorted part and placing them in the correct position. It has a time complexity of O(n²), but performs better than bubble sort for nearly sorted data.  <CodeBase header={insertionData.header} content={insertionData.content} />
        </div>
      </div>

      <div className="col">
        <div className="col bg-danger">
          <h2 className=" text-light mb-2">{quicksortData.header}</h2>
          Quick sort is another divide-and-conquer algorithm that selects a pivot, partitions the array around the pivot, and recursively sorts the subarrays. It has an average time complexity of O(n log n), but worst case can be O(n²). <CodeBase header={quicksortData.header} content={quicksortData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-light">
          <h2 className=" text-dark mb-2">{mergesortData.header}</h2>
          Merge sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and merges the sorted halves. It has a time complexity of O(n log n). <CodeBase header={mergesortData.header} content={mergesortData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-dark">
          <h2 className=" text-light mb-2">{linearsearchData.header}</h2>
          Linear search is the simplest searching algorithm that checks every element until the desired element is found. It has a time complexity of O(n). <CodeBase header={linearsearchData.header} content={linearsearchData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-primary">
          <h2 className=" text-light mb-2">{binarysearchData.header}</h2>
          Binary search works on sorted arrays. It divides the array in half, compares the middle element with the target, and repeats the process on the half where the target might lie. It has a time complexity of O(log n).<CodeBase header={binarysearchData.header} content={binarysearchData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-secondary">
          <h2 className=" text-dark mb-2">{jumpsearchData.header}</h2>
          Jump search divides the array into blocks of fixed size and performs a linear search within the block where the target might lie. It works better on large sorted arrays and has a time complexity of O(√n).<CodeBase header={jumpsearchData.header} content={jumpsearchData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-info">
          <h2 className=" text-light mb-2">{memoizationData.header}</h2>
          What is Dynamic Programming?
Dynamic Programming (DP) is an optimization technique used to solve problems by breaking them down into overlapping subproblems and solving each subproblem only once, storing its solution for future reference (also called memoization or tabulation). DP is particularly useful in problems with optimal substructure and overlapping subproblems.

Common Types of DP:
Memoization (Top-Down): Store the results of subproblems in a table (usually a recursive solution).
Tabulation (Bottom-Up): Build the solution iteratively starting from the base cases.
 <CodeBase header={memoizationData.header} content={memoizationData.content} />
        </div>
      </div>
      <div className="col mb-4">
        <div className="col bg-success">
          <h2 className="text-light mb-2">{tabulationData.header}</h2>
          <CodeBase  header={tabulationData.header} content={tabulationData.content} />
        </div>
      </div>

      <div className="col mb-4">
        <div className="col bg-warning">
          <h2 className="text-light mb-2">{greedyData.header}</h2>
          Greedy algorithms build a solution step by step, choosing the best option at each step based on a local criterion, with the hope of finding a global optimum. It’s often used in optimization problems where locally optimal choices lead to a globally optimal solution. <CodeBase header={greedyData.header} content={greedyData.content} />
        </div>
      </div>

      <div className="col">
        <div className="col bg-danger">
          <h2 className=" text-light mb-2">{dividData.header}</h2>
          In Divide and Conquer, the problem is divided into smaller subproblems, solved independently, and then combined to get the final solution. Many algorithms like Merge Sort, Quick Sort, and Binary Search are based on this approach. <CodeBase header={dividData.header} content={dividData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-light">
          <h2 className=" text-dark mb-2">{backtrackingData.header}</h2>
          Backtracking is used for solving constraint satisfaction problems. It builds the solution incrementally and abandons a solution as soon as it determines that this solution cannot be completed. <CodeBase header={backtrackingData.header} content={backtrackingData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-dark">
          <h2 className=" text-light mb-2">{bitmanupulationData.header}</h2>
           Bit manipulation techniques are used to perform operations at the bit level, which are faster than other arithmetic operations. Bitwise operators such as AND, OR, XOR, NOT, and bit shifts   are used in this domain.  <CodeBase header={bitmanupulationData.header} content={bitmanupulationData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-primary">
          <h2 className=" text-light mb-2">{unionfindData.header}</h2>
          
          The Union-Find data structure is used to keep track of a set of elements partitioned into disjoint (non-overlapping) subsets. It supports two operations: find (find the subset an element belongs to) and union (merge two subsets). <CodeBase header={unionfindData.header} content={unionfindData.content} />
        </div>
      </div>
      <div className="col">
        <div className="col bg-secondary">
          <h2 className=" text-dark mb-2">{slidingwindowData.header}</h2>
          The Sliding Window Technique is used to reduce the time complexity of problems involving contiguous subarrays or substrings. It avoids recomputation by maintaining a window that slides through the data. <CodeBase header={slidingwindowData.header} content={slidingwindowData.content} />
        </div>
      </div>
     
      
    </div>
  );
}

export default DsaTopicsJS;

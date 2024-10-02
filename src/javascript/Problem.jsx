const concepts = [
    {
      id: 1,
      title: "Find the Greatest Common Divisor (GCD) of Two Numbers",
      description: "The Euclidean algorithm calculates the greatest common divisor (GCD) of two numbers by repeatedly replacing the larger number with the remainder of dividing the larger number by the smaller number until one of them is zero.",
      example: `// GCD function using Euclidean algorithm
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  console.log(gcd(48, 18)); // Output: 6`,
    },
    {
      id: 2,
      title: "Check if a Number is Prime",
      description: "A prime number is a number greater than 1 that is only divisible by 1 and itself. To check if a number is prime, divide the number by every integer up to its square root.",
      example: `// Prime number check
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(11)); // Output: true`,
    },
    {
      id: 3,
      title: "Find the Fibonacci Sequence up to N Terms",
      description: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The sequence typically starts with 0 and 1.",
      example: `// Generate Fibonacci sequence
  function fibonacci(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }
  console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]`,
    },
    {
      id: 4,
      title: "Check if a String is a Palindrome",
      description: "A string is a palindrome if it reads the same forward and backward. This function compares characters from the start and end of the string moving towards the center.",
      example: `// Palindrome check
  function isPalindrome(s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true`,
    },
    {
      id: 5,
      title: "Find the Missing Number in an Array",
      description: "In an array of consecutive numbers with one missing, this function calculates the sum of the numbers from 1 to n and subtracts the sum of the array to find the missing number.",
      example: `// Missing number finder
  function findMissingNumber(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);
    return total - sumOfArr;
  }
  console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3`,
    },
    {
      id: 6,
      title: "Reverse a String",
      description: "Reversing a string can be done by splitting it into an array of characters, reversing the array, and joining it back into a string.",
      example: `// Reverse string function
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // Output: "olleh"`,
    },
    {
      id: 7,
      title: "Sum All Numbers in an Array",
      description: "This function calculates the sum of all numbers in an array by using the reduce method, which applies a function to each element and accumulates the result.",
      example: `// Sum of array elements
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  console.log(sumArray([1, 2, 3, 4])); // Output: 10`,
    },
    {
      id: 8,
      title: "Find the Longest Common Prefix",
      description: "Given an array of strings, this function finds the longest common prefix by comparing the characters of the strings one by one.",
      example: `// Longest common prefix function
  function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }
    return prefix;
  }
  console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"`,
    },
    {
      id: 9,
      title: "Check for Balanced Parentheses",
      description: "This function checks if a string has balanced parentheses by using a stack to track opening parentheses and ensuring every opening has a corresponding closing.",
      example: `// Balanced parentheses checker
  function isValidParentheses(s) {
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (let char of s) {
      if (map[char]) {
        stack.push(map[char]);
      } else if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
    return stack.length === 0;
  }
  console.log(isValidParentheses("()[]{}")); // Output: true`,
    },
    {
      id: 10,
      title: "Find the Factorial of a Number",
      description: "The factorial of a number is the product of all positive integers less than or equal to the number. This function uses recursion to calculate the factorial.",
      example: `// Factorial function
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120`,
    },
    {
        id: 11,
        title: "Find the Length of the Longest Word in a String",
        description: "This function splits the string into words, then iterates through each word to find and return the length of the longest word.",
        example: `// Longest word length function
    function findLongestWord(str) {
      const words = str.split(' ');
      let maxLength = 0;
      for (let word of words) {
        maxLength = Math.max(maxLength, word.length);
      }
      return maxLength;
    }
    console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 6`,
      },
      {
        id: 12,
        title: "Count the Occurrences of a Character in a String",
        description: "This function counts how many times a specific character appears in a string by looping through the string and incrementing a counter each time the character is found.",
        example: `// Character count function
    function countChar(str, char) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
          count++;
        }
      }
      return count;
    }
    console.log(countChar("hello world", "l")); // Output: 3`,
      },
      {
        id: 13,
        title: "Find the Second Largest Number in an Array",
        description: "This function sorts the array in descending order and returns the second element, which is the second largest number.",
        example: `// Second largest number function
    function secondLargest(arr) {
      const sortedArr = [...arr].sort((a, b) => b - a);
      return sortedArr[1];
    }
    console.log(secondLargest([3, 5, 7, 2, 8])); // Output: 7`,
      },
      {
        id: 14,
        title: "Capitalize the First Letter of Each Word in a String",
        description: "This function splits the string into words, capitalizes the first letter of each word, and joins the words back into a single string.",
        example: `// Capitalize first letter function
    function capitalizeWords(str) {
      return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
    console.log(capitalizeWords("hello world")); // Output: "Hello World"`,
      },
      {
        id: 15,
        title: "Flatten a Nested Array",
        description: "This function flattens a nested array into a single array by recursively concatenating nested arrays.",
        example: `// Flatten nested array function
    function flattenArray(arr) {
      return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
    }
    console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]`,
      },
      {
        id: 16,
        title: "Generate a Random Integer Between Two Numbers",
        description: "This function generates a random integer between two numbers, inclusive. It uses the Math.random() method and scales it to the desired range.",
        example: `// Random integer generator
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(randomInt(1, 10)); // Output: Random number between 1 and 10`,
      },
      {
        id: 17,
        title: "Check if Two Strings Are Anagrams",
        description: "An anagram is a word or phrase formed by rearranging the letters of another. This function checks if two strings are anagrams by sorting and comparing them.",
        example: `// Anagram check function
    function isAnagram(str1, str2) {
      const normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
      return normalize(str1) === normalize(str2);
    }
    console.log(isAnagram("listen", "silent")); // Output: true`,
      },
      {
        id: 18,
        title: "Count the Number of Vowels in a String",
        description: "This function counts how many vowels are present in a string by checking each character against a set of vowels.",
        example: `// Vowel count function
    function countVowels(str) {
      const vowels = 'aeiouAEIOU';
      let count = 0;
      for (let char of str) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    }
    console.log(countVowels("hello world")); // Output: 3`,
      },
      {
        id: 19,
        title: "Remove Duplicates from an Array",
        description: "This function removes duplicate values from an array by converting it to a Set and then back to an array.",
        example: `// Remove duplicates function
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]`,
      },
      {
        id: 20,
        title: "Sum of All Odd Numbers in an Array",
        description: "This function calculates the sum of all odd numbers in an array by filtering for odd values and reducing them to a sum.",
        example: `// Sum odd numbers function
    function sumOddNumbers(arr) {
      return arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
    }
    console.log(sumOddNumbers([1, 2, 3, 4, 5])); // Output: 9`,
      },
      {
        id: 21,
        title: "Reverse a String",
        description: "This function reverses the given string by splitting it into an array, reversing the array, and joining it back together.",
        example: `// Reverse string function
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
    console.log(reverseString("hello")); // Output: "olleh"`,
      },
      {
        id: 22,
        title: "Find Factorial of a Number",
        description: "This function recursively calculates the factorial of a number by multiplying it by the factorial of the previous number.",
        example: `// Factorial function
    function factorial(n) {
      return n === 0 ? 1 : n * factorial(n - 1);
    }
    console.log(factorial(5)); // Output: 120`,
      },
      {
        id: 23,
        title: "Find the Intersection of Two Arrays",
        description: "This function returns the common elements between two arrays by using the filter method.",
        example: `// Array intersection function
    function arrayIntersection(arr1, arr2) {
      return arr1.filter(value => arr2.includes(value));
    }
    console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]`,
      },
      {
        id: 24,
        title: "Find the GCD of Two Numbers",
        description: "This function recursively finds the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
        example: `// GCD function
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    }
    console.log(gcd(48, 18)); // Output: 6`,
      },
      {
        id: 25,
        title: "Merge Two Sorted Arrays",
        description: "This function merges two sorted arrays into a single sorted array by comparing elements from both arrays.",
        example: `// Merge sorted arrays function
    function mergeSortedArrays(arr1, arr2) {
      let result = [];
      let i = 0, j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
        } else {
          result.push(arr2[j]);
          j++;
        }
      }
      return result.concat(arr1.slice(i)).concat(arr2.slice(j));
    }
    console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]`,
      },
      {
        id: 26,
        title: "Check for Palindrome",
        description: "This function checks if a given string is a palindrome by comparing it to its reversed version.",
        example: `// Palindrome check function
    function isPalindrome(str) {
      const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return cleaned === cleaned.split('').reverse().join('');
    }
    console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true`,
      },
      {
        id: 27,
        title: "Remove a Specific Element from an Array",
        description: "This function removes all instances of a specified element from an array by filtering the array.",
        example: `// Remove specific element function
    function removeElement(arr, elem) {
      return arr.filter(item => item !== elem);
    }
    console.log(removeElement([1, 2, 3, 2, 4], 2)); // Output: [1, 3, 4]`,
      },
      {
        id: 28,
        title: "Find Missing Number in an Array",
        description: "This function finds the missing number in a range by summing the range and subtracting the sum of the array elements.",
        example: `// Find missing number function
    function findMissingNumber(arr, n) {
      const total = (n * (n + 1)) / 2;
      const arrSum = arr.reduce((acc, num) => acc + num, 0);
      return total - arrSum;
    }
    console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3`,
      },
      {
        id: 29,
        title: "Convert a String to Title Case",
        description: "This function converts a string to title case by capitalizing the first letter of each word.",
        example: `// Title case conversion function
    function toTitleCase(str) {
      return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    console.log(toTitleCase("hello world")); // Output: "Hello World"`,
      },
      {
        id: 30,
        title: "Check if a Number is Prime",
        description: "This function checks if a number is prime by determining whether it has any divisors other than 1 and itself.",
        example: `// Prime check function
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    console.log(isPrime(7)); // Output: true`,
      },
      {
        id: 31,
        title: "Group Array Elements by Frequency",
        description: "This function groups the elements of an array by their frequency of occurrence.",
        example: `// Group elements by frequency
    function groupByFrequency(arr) {
      const frequency = {};
      arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
      });
      return frequency;
    }
    console.log(groupByFrequency([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}`,
      },
      {
        id: 32,
        title: "Convert a Number to Binary",
        description: "This function converts a given decimal number to binary using the toString() method.",
        example: `// Decimal to binary function
    function decimalToBinary(num) {
      return num.toString(2);
    }
    console.log(decimalToBinary(10)); // Output: "1010"`,
      },
      {
        id: 33,
        title: "Find the Sum of All Digits in a Number",
        description: "This function calculates the sum of all digits in a given number by converting it to a string and summing its digits.",
        example: `// Sum of digits function
    function sumOfDigits(num) {
      return num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    console.log(sumOfDigits(123)); // Output: 6`,
      },
      {
        id: 34,
        title: "Check if a Year is a Leap Year",
        description: "This function checks if a given year is a leap year based on the leap year rules.",
        example: `// Leap year check function
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    console.log(isLeapYear(2020)); // Output: true`,
      },
      {
        id: 35,
        title: "Find the Maximum Difference in an Array",
        description: "This function finds the maximum difference between two elements in an array where the larger element appears after the smaller one.",
        example: `// Maximum difference function
    function maxDifference(arr) {
      let minElem = arr[0];
      let maxDiff = -1;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElem) {
          minElem = arr[i];
        } else {
          maxDiff = Math.max(maxDiff, arr[i] - minElem);
        }
      }
      return maxDiff;
    }
    console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // Output: 8`,
      },
      {
        id: 36,
        title: "Implement Array Chunking",
        description: "This function splits an array into smaller arrays of a specified length (chunk size).",
        example: `// Array chunking function
    function chunkArray(arr, size) {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    }
    console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // Output: [[1, 2], [3, 4], [5, 6]]`,
      },
      {
        id: 37,
        title: "Generate a Fibonacci Sequence",
        description: "This function generates a Fibonacci sequence of a given length.",
        example: `// Fibonacci sequence function
    function fibonacci(n) {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    }
    console.log(fibonacci(6)); // Output: [0, 1, 1, 2, 3, 5]`,
      },
      {
        id: 38,
        title: "Implement Binary Search",
        description: "This function performs a binary search on a sorted array to find the index of a target element.",
        example: `// Binary search function
    function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) return middle;
        if (arr[middle] < target) left = middle + 1;
        else right = middle - 1;
      }
      return -1;
    }
    console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3`,
      },
      {
        id: 39,
        title: "Flatten a Nested Array",
        description: "This function flattens a nested array into a single-level array.",
        example: `// Flatten array function
    function flattenArray(arr) {
      return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
    }
    console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]`,
      },
      {
        id: 40,
        title: "Remove Duplicates from an Array",
        description: "This function removes duplicates from an array using a Set.",
        example: `// Remove duplicates function
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]`,
      },
      {
        id: 41,
        title: "Find Longest Word in a Sentence",
        description: "This function finds the longest word in a sentence by splitting the sentence into words and checking their lengths.",
        example: `// Find longest word function
    function findLongestWord(sentence) {
      return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
    }
    console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"`,
      },
      {
        id: 42,
        title: "Count Vowels in a String",
        description: "This function counts the number of vowels in a string by using a regular expression to match vowels.",
        example: `// Count vowels function
    function countVowels(str) {
      return (str.match(/[aeiou]/gi) || []).length;
    }
    console.log(countVowels("hello world")); // Output: 3`,
      },
      {
        id: 43,
        title: "Capitalize the First Letter of Each Word",
        description: "This function capitalizes the first letter of each word in a string.",
        example: `// Capitalize first letter function
    function capitalizeFirstLetter(str) {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"`,
      },
      {
        id: 44,
        title: "Count the Frequency of Characters in a String",
        description: "This function counts the frequency of each character in a string and returns an object.",
        example: `// Count character frequency function
    function countCharacterFrequency(str) {
      const frequency = {};
      for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
      }
      return frequency;
    }
    console.log(countCharacterFrequency("hello")); // Output: {h: 1, e: 1, l: 2, o: 1}`,
      },
      {
        id: 45,
        title: "Find the First Non-Repeating Character in a String",
        description: "This function finds the first character in a string that does not repeat.",
        example: `// First non-repeating character function
    function firstNonRepeatingChar(str) {
      const frequency = {};
      for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
      }
      for (const char of str) {
        if (frequency[char] === 1) return char;
      }
      return null;
    }
    console.log(firstNonRepeatingChar("swiss")); // Output: "w"`,
      },
      {
        id: 46,
        title: "Rotate an Array",
        description: "This function rotates an array to the right by a specified number of steps.",
        example: `// Rotate array function
    function rotateArray(arr, steps) {
      return arr.slice(-steps).concat(arr.slice(0, -steps));
    }
    console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]`,
      },
      {
        id: 47,
        title: "Find the Most Frequent Element in an Array",
        description: "This function finds the most frequent element in an array by counting occurrences.",
        example: `// Most frequent element function
    function mostFrequent(arr) {
      const frequency = {};
      arr.forEach(value => frequency[value] = (frequency[value] || 0) + 1);
      return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    }
    console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // Output: "3"`,
      },
      {
        id: 48,
        title: "Generate a Random Integer Between Two Values",
        description: "This function generates a random integer between two given values, inclusive.",
        example: `// Random integer generation function
    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(randomInteger(1, 10)); // Output: a random number between 1 and 10`,
      },
      {
        id: 49,
        title: "Check if Two Strings are Anagrams",
        description: "This function checks if two strings are anagrams by sorting their characters and comparing them.",
        example: `// Anagram check function
    function areAnagrams(str1, str2) {
      const sortStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
      return sortStr(str1) === sortStr(str2);
    }
    console.log(areAnagrams("listen", "silent")); // Output: true`,
      },
      {
        id: 50,
        title: "Calculate the Power of a Number",
        description: "This function calculates the power of a base number raised to an exponent.",
        example: `// Power function
    function power(base, exponent) {
      return Math.pow(base, exponent);
    }
    console.log(power(2, 3)); // Output: 8`,
      },
      {
        id: 51,
        title: "Find the Sum of Digits of a Number",
        description: "This function calculates the sum of digits of a given number.",
        example: `// Sum of digits function
    function sumOfDigits(num) {
      return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    console.log(sumOfDigits(1234)); // Output: 10`,
      },
      {
        id: 52,
        title: "Reverse Words in a String",
        description: "This function reverses the order of words in a sentence.",
        example: `// Reverse words function
    function reverseWords(sentence) {
      return sentence.split(' ').reverse().join(' ');
    }
    console.log(reverseWords("hello world")); // Output: "world hello"`,
      },
      {
        id: 53,
        title: "Check if a Number is Prime",
        description: "This function checks whether a number is a prime number.",
        example: `// Prime number check function
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    console.log(isPrime(7)); // Output: true`,
      },
      {
        id: 54,
        title: "Find the Greatest Common Divisor (GCD) of Two Numbers",
        description: "This function finds the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
        example: `// GCD function
    function gcd(a, b) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    console.log(gcd(48, 18)); // Output: 6`,
      },
      {
        id: 55,
        title: "Find the Least Common Multiple (LCM) of Two Numbers",
        description: "This function calculates the least common multiple (LCM) of two numbers.",
        example: `// LCM function
    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }
    console.log(lcm(4, 6)); // Output: 12`,
      },
      {
        id: 56,
        title: "Convert Decimal to Binary",
        description: "This function converts a decimal number to its binary representation.",
        example: `// Decimal to binary function
    function decimalToBinary(num) {
      return num.toString(2);
    }
    console.log(decimalToBinary(10)); // Output: "1010"`,
      },
      {
        id: 57,
        title: "Convert Binary to Decimal",
        description: "This function converts a binary string to its decimal representation.",
        example: `// Binary to decimal function
    function binaryToDecimal(binary) {
      return parseInt(binary, 2);
    }
    console.log(binaryToDecimal("1010")); // Output: 10`,
      },
      {
        id: 58,
        title: "Find the Factorial of a Number",
        description: "This function calculates the factorial of a number using recursion.",
        example: `// Factorial function
    function factorial(n) {
      return n === 0 ? 1 : n * factorial(n - 1);
    }
    console.log(factorial(5)); // Output: 120`,
      },
      {
        id: 59,
        title: "Find the Nth Fibonacci Number",
        description: "This function returns the Nth number in the Fibonacci sequence using recursion.",
        example: `// Fibonacci function
    function fibonacci(n) {
      return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.log(fibonacci(6)); // Output: 8`,
      },
      {
        id: 60,
        title: "Find the Maximum Subarray Sum",
        description: "This function finds the largest sum of a contiguous subarray using Kadane's Algorithm.",
        example: `// Maximum subarray sum function
    function maxSubarraySum(arr) {
      let maxSum = arr[0];
      let currentSum = arr[0];
      for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
      }
      return maxSum;
    }
    console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6`,
      },
      {
        id: 61,
        title: "Find the Longest Palindromic Substring",
        description: "This function finds the longest palindromic substring in a string.",
        example: `// Longest palindromic substring function
    function longestPalindrome(s) {
      let longest = '';
      for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
          const substring = s.slice(i, j);
          if (substring === substring.split('').reverse().join('') && substring.length > longest.length) {
            longest = substring;
          }
        }
      }
      return longest;
    }
    console.log(longestPalindrome("babad")); // Output: "bab" or "aba"`,
      },
      {
        id: 62,
        title: "Generate All Subsets of an Array",
        description: "This function generates all possible subsets (power set) of an array.",
        example: `// Generate subsets function
    function subsets(arr) {
      return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
    }
    console.log(subsets([1, 2, 3])); // Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]`,
      },
      {
        id: 63,
        title: "Check if a String is a Palindrome",
        description: "This function checks whether a given string is a palindrome.",
        example: `// Palindrome check function
    function isPalindrome(str) {
      const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return cleaned === cleaned.split('').reverse().join('');
    }
    console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true`,
      },
      {
        id: 64,
        title: "Find the Longest Common Prefix",
        description: "This function finds the longest common prefix among an array of strings.",
        example: `// Longest common prefix function
    function longestCommonPrefix(strs) {
      if (!strs.length) return '';
      let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, -1);
          if (!prefix) return '';
        }
      }
      return prefix;
    }
    console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"`,
      },
      {
        id: 65,
        title: "Generate a Random String",
        description: "This function generates a random string of a specified length using alphanumeric characters.",
        example: `// Random string generation function
    function generateRandomString(length) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
    console.log(generateRandomString(8)); // Output: random 8-character string`,
      },
      {
        id: 66,
        title: "Merge Two Sorted Arrays",
        description: "This function merges two sorted arrays into one sorted array.",
        example: `// Merge sorted arrays function
    function mergeSortedArrays(arr1, arr2) {
      let merged = [];
      let i = 0;
      let j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
      return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
    }
    console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]`,
      },
      {
        id: 67,
        title: "Find the Missing Number in an Array",
        description: "This function finds the missing number in an array of consecutive integers.",
        example: `// Find missing number function
    function findMissingNumber(arr, n) {
      const expectedSum = (n * (n + 1)) / 2;
      const actualSum = arr.reduce((acc, num) => acc + num, 0);
      return expectedSum - actualSum;
    }
    console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3`,
      },
      {
        id: 68,
        title: "Find the Majority Element in an Array",
        description: "This function finds the majority element in an array, defined as the element that appears more than half the time.",
        example: `// Find majority element function
    function majorityElement(arr) {
      const countMap = {};
      for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > arr.length / 2) return num;
      }
      return null;
    }
    console.log(majorityElement([3, 2, 3])); // Output: 3`,
      },
      {
        id: 69,
        title: "Find the Nth Ugly Number",
        description: "This function finds the Nth ugly number, where an ugly number is a positive number whose prime factors only include 2, 3, and 5.",
        example: `// Find Nth ugly number function
    function nthUglyNumber(n) {
      const uglyNumbers = [1];
      let i2 = 0, i3 = 0, i5 = 0;
      for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(uglyNumbers[i2] * 2, uglyNumbers[i3] * 3, uglyNumbers[i5] * 5);
        uglyNumbers.push(nextUgly);
        if (nextUgly === uglyNumbers[i2] * 2) i2++;
        if (nextUgly === uglyNumbers[i3] * 3) i3++;
        if (nextUgly === uglyNumbers[i5] * 5) i5++;
      }
      return uglyNumbers[n - 1];
    }
    console.log(nthUglyNumber(10)); // Output: 12`,
      },
      {
        id: 70,
        title: "Check if a Number is Armstrong",
        description: "This function checks if a number is an Armstrong number (narcissistic number), where the sum of its own digits each raised to the power of the number of digits equals the original number.",
        example: `// Armstrong number check function
    function isArmstrong(num) {
      const digits = String(num).split('').map(Number);
      const power = digits.length;
      const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
      return sum === num;
    }
    console.log(isArmstrong(153)); // Output: true`,
      },
      {
        id: 71,
        title: "Check if Two Strings are Anagrams",
        description: "This function checks whether two strings are anagrams of each other.",
        example: `// Anagram check function
    function areAnagrams(str1, str2) {
      const sortString = str => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
      return sortString(str1) === sortString(str2);
    }
    console.log(areAnagrams("listen", "silent")); // Output: true`,
      },
      {
        id: 72,
        title: "Count the Number of Vowels in a String",
        description: "This function counts the number of vowels (a, e, i, o, u) in a given string.",
        example: `// Count vowels function
    function countVowels(str) {
      return str.match(/[aeiou]/gi)?.length || 0;
    }
    console.log(countVowels("hello world")); // Output: 3`,
      },
      {
        id: 73,
        title: "Flatten a Nested Array",
        description: "This function flattens a nested array into a single-level array.",
        example: `// Flatten array function
    function flatten(arr) {
      return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
    }
    console.log(flatten([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]`,
      },
      {
        id: 74,
        title: "Remove Duplicates from an Array",
        description: "This function removes duplicate values from an array.",
        example: `// Remove duplicates function
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]`,
      },
      {
        id: 75,
        title: "Rotate an Array by K Steps",
        description: "This function rotates an array to the right by K steps.",
        example: `// Rotate array function
    function rotateArray(arr, k) {
      k = k % arr.length;
      return arr.slice(-k).concat(arr.slice(0, -k));
    }
    console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]`,
      },
      {
        id: 76,
        title: "Find the First Non-Repeating Character",
        description: "This function finds the first non-repeating character in a string.",
        example: `// Find first non-repeating character function
    function firstNonRepeatingChar(str) {
      const countMap = {};
      for (const char of str) {
        countMap[char] = (countMap[char] || 0) + 1;
      }
      for (const char of str) {
        if (countMap[char] === 1) return char;
      }
      return null;
    }
    console.log(firstNonRepeatingChar("swiss")); // Output: "w"`,
      },
      {
        id: 77,
        title: "Implement Binary Search",
        description: "This function performs binary search on a sorted array.",
        example: `// Binary search function
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
    console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2`,
      },
      {
        id: 78,
        title: "Find the Median of Two Sorted Arrays",
        description: "This function finds the median of two sorted arrays.",
        example: `// Find median of two sorted arrays function
    function findMedianSortedArrays(nums1, nums2) {
      const merged = nums1.concat(nums2).sort((a, b) => a - b);
      const mid = Math.floor(merged.length / 2);
      return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
    }
    console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2`,
      },
      {
        id: 79,
        title: "Find the First Occurrence of a Substring",
        description: "This function finds the first occurrence of a substring within a string.",
        example: `// Find first occurrence of substring function
    function findFirstOccurrence(str, subStr) {
      return str.indexOf(subStr);
    }
    console.log(findFirstOccurrence("hello world", "world")); // Output: 6`,
      },
      {
        id: 80,
        title: "Implement Merge Sort",
        description: "This function implements the merge sort algorithm.",
        example: `// Merge sort function
    function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }
    function merge(left, right) {
      const sorted = [];
      while (left.length && right.length) {
        sorted.push(left[0] < right[0] ? left.shift() : right.shift());
      }
      return sorted.concat(left).concat(right);
    }
    console.log(mergeSort([3, 1, 4, 1, 5, 9])); // Output: [1, 1, 3, 4, 5, 9]`,
      },
      {
        id: 81,
        title: "Find the Longest Increasing Subsequence",
        description: "This function finds the longest increasing subsequence in an array.",
        example: `// Longest increasing subsequence function
    function longestIncreasingSubsequence(arr) {
      const lis = Array(arr.length).fill(1);
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
          if (arr[i] > arr[j]) {
            lis[i] = Math.max(lis[i], lis[j] + 1);
          }
        }
      }
      return Math.max(...lis);
    }
    console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4`,
      },
      {
        id: 82,
        title: "Find the Number of Islands",
        description: "This function counts the number of islands in a 2D grid (represented as '1's surrounded by water represented as '0's).",
        example: `// Number of islands function
    function numIslands(grid) {
      if (!grid || !grid.length) return 0;
      let count = 0;
      const dfs = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
      };
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === '1') {
            count++;
            dfs(i, j);
          }
        }
      }
      return count;
    }
    console.log(numIslands([
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ])); // Output: 1`,
      },
      {
        id: 83,
        title: "Find the Maximum Depth of a Binary Tree",
        description: "This function finds the maximum depth of a binary tree.",
        example: `// Maximum depth of binary tree function
    function maxDepth(root) {
      if (!root) return 0;
      const leftDepth = maxDepth(root.left);
      const rightDepth = maxDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
    console.log(maxDepth({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } },
    })); // Output: 3`,
      },
      {
        id: 84,
        title: "Find the Longest Common Prefix",
        description: "This function finds the longest common prefix string among an array of strings.",
        example: `// Longest common prefix function
    function longestCommonPrefix(strs) {
      if (!strs.length) return '';
      let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, -1);
          if (!prefix) return '';
        }
      }
      return prefix;
    }
    console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"`,
      },
      {
        id: 85,
        title: "Implement Heap Sort",
        description: "This function implements the heap sort algorithm.",
        example: `// Heap sort function
    function heapSort(arr) {
      const heapify = (arr, length, i) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < length && arr[left] > arr[largest]) largest = left;
        if (right < length && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          heapify(arr, length, largest);
        }
      };
      for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
      }
      for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
      }
      return arr;
    }
    console.log(heapSort([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]`,
      },
      {
        id: 86,
        title: "Find the Maximum Profit in Stock Trading",
        description: "This function finds the maximum profit that can be made by buying and selling stocks on different days.",
        example: `// Maximum profit function
    function maxProfit(prices) {
      let minPrice = Infinity;
      let maxProfit = 0;
      for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
      }
      return maxProfit;
    }
    console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5`,
      },
      {
        id: 87,
        title: "Implement Dijkstra's Algorithm",
        description: "This function implements Dijkstra's algorithm to find the shortest path in a graph.",
        example: `// Dijkstra's algorithm function
    function dijkstra(graph, start) {
      const distances = {};
      const visited = new Set();
      const priorityQueue = [[start, 0]];
      distances[start] = 0;
      while (priorityQueue.length) {
        const [node, dist] = priorityQueue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        for (const [neighbor, weight] of graph[node]) {
          const newDist = dist + weight;
          if (newDist < (distances[neighbor] || Infinity)) {
            distances[neighbor] = newDist;
            priorityQueue.push([neighbor, newDist]);
          }
        }
      }
      return distances;
    }
    const graph = {
      A: [['B', 1], ['C', 4]],
      B: [['A', 1], ['C', 2], ['D', 5]],
      C: [['A', 4], ['B', 2], ['D', 1]],
      D: [['B', 5], ['C', 1]],
    };
    console.log(dijkstra(graph, 'A')); // Output: { A: 0, B: 1, C: 3, D: 4 }`,
      },
      {
        id: 88,
        title: "Find the Minimum Path Sum in a Grid",
        description: "This function finds the minimum path sum from the top-left to the bottom-right corner of a grid.",
        example: `// Minimum path sum function
    function minPathSum(grid) {
      for (let i = 1; i < grid.length; i++) {
        grid[i][0] += grid[i - 1][0];
      }
      for (let j = 1; j < grid[0].length; j++) {
        grid[0][j] += grid[0][j - 1];
      }
      for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
          grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
      }
      return grid[grid.length - 1][grid[0].length - 1];
    }
    console.log(minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])); // Output: 7`,
      },
      {
        id: 89,
        title: "Find the Longest Palindromic Substring",
        description: "This function finds the longest palindromic substring in a string.",
        example: `// Longest palindromic substring function
    function longestPalindrome(s) {
      let longest = '';
      const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
        }
        return s.slice(left + 1, right);
      };
      for (let i = 0; i < s.length; i++) {
        const oddPalindrome = expandAroundCenter(i, i);
        const evenPalindrome = expandAroundCenter(i, i + 1);
        const longerPalindrome = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
        if (longerPalindrome.length > longest.length) longest = longerPalindrome;
      }
      return longest;
    }
    console.log(longestPalindrome("babad")); // Output: "bab"`,
      },
      {
        id: 90,
        title: "Implement the Knuth-Morris-Pratt (KMP) Algorithm",
        description: "This function implements the KMP algorithm to search for occurrences of a substring in a string.",
        example: `// KMP algorithm function
    function kmpSearch(pattern, text) {
      const buildLPS = (pattern) => {
        const lps = Array(pattern.length).fill(0);
        let len = 0;
        for (let i = 1; i < pattern.length; i++) {
          while (len > 0 && pattern[i] !== pattern[len]) {
            len = lps[len - 1];
          }
          if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
          }
        }
        return lps;
      };
      const lps = buildLPS(pattern);
      let i = 0, j = 0;
      while (i < text.length) {
        if (pattern[j] === text[i]) {
          i++;
          j++;
        }
        if (j === pattern.length) {
          return i - j;
        }
        if (i < text.length && pattern[j] !== text[i]) {
          j ? j = lps[j - 1] : i++;
        }
      }
      return -1;
    }
    console.log(kmpSearch("abc", "abxabcabcaby")); // Output: 3`,
      },
  ];
  export default concepts
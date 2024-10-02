const concepts = [
    {
      id: 1,
      title: "Count All Vowels",
      description: "A function to count the number of vowels in a given string.",
      example: `// Count all vowels in a string
  const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  };
  
  // Example usage:
  console.log(countVowels('hello world')); // Output: 3
  `
    },
    {
      id: 2,
      title: "Reverse a String",
      description: "A function that reverses a given string.",
      example: `// Reverse a string
  const reverseString = (str) => {
    return str.split('').reverse().join('');
  };
  
  // Example usage:
  console.log(reverseString('hello')); // Output: 'olleh'
  `
    },
    {
      id: 3,
      title: "Check Palindrome",
      description: "A function to check if a given string is a palindrome.",
      example: `// Check if a string is a palindrome
  const isPalindrome = (str) => {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  };
  
  // Example usage:
  console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
  `
    },
    {
      id: 4,
      title: "Remove Duplicates",
      description: "A function to remove duplicates from an array.",
      example: `// Remove duplicates from an array
  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  
  // Example usage:
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  `
    },
    {
      id: 5,
      title: "Find Min and Max",
      description: "A function to find the minimum and maximum values in an array.",
      example: `// Find minimum and maximum in an array
  const findMinMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
  };
  
  // Example usage:
  console.log(findMinMax([1, 2, 3, 4, 5])); // Output: { min: 1, max: 5 }
  `
    },
    {
      id: 6,
      title: "Check Anagram",
      description: "A function to check if two strings are anagrams.",
      example: `// Check if two strings are anagrams
  const isAnagram = (str1, str2) => {
    const cleanString = (str) => str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('').sort().join('');
    return cleanString(str1) === cleanString(str2);
  };
  
  // Example usage:
  console.log(isAnagram('listen', 'silent')); // Output: true
  `
    },
    {
      id: 7,
      title: "Fizz Buzz",
      description: "A classic Fizz Buzz problem in one line.",
      example: `// Fizz Buzz in one line
  const fizzBuzz = (n) => Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
  
  // Example usage:
  console.log(fizzBuzz(15)); 
  // Output: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
  `
    },
    {
      id: 8,
      title: "Capitalize Words",
      description: "A function to capitalize all words in a sentence.",
      example: `// Capitalize all words in a sentence
  const capitalizeWords = (sentence) => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Example usage:
  console.log(capitalizeWords('hello world')); // Output: 'Hello World'
  `
    },
    {
      id: 9,
      title: "Get Max Character",
      description: "A function to find the most frequent character in a string.",
      example: `// Get the max occurring character in a string
  const getMaxChar = (str) => {
    const charMap = {};
    let maxChar = '';
    let maxCount = 0;
  
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
  
    return maxChar;
  };
  
  // Example usage:
  console.log(getMaxChar('javascript')); // Output: 'a'
  `
    },
    {
      id: 10,
      title: "Balanced Parenthesis",
      description: "A function to check if a string has balanced parentheses.",
      example: `// Check if the parentheses are balanced
  const isBalanced = (str) => {
    const stack = [];
    const map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let char of str) {
      if (map[char]) {
        stack.push(char);
      } else if (Object.values(map).includes(char)) {
        if (map[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
  
  // Example usage:
  console.log(isBalanced('(){}[]')); // Output: true
  `
    },
  ];
  export default concepts 
<<<<<<< HEAD
// src/components/ReverseVowels.js
import React from 'react';

export function ReverseVowels({ s }) {
    const result = reverseVowels(s);

    return (
        <>
            <h3>Reverse Vowels of a String</h3>
            <p>Given a string s, reverse only the vowels of the string.</p>
            <h6>Input string: <p>{s}</p></h6>
            <h4 style={{backgroundColor:"#019B31" , color:"white"}}>Output: {result}</h4>
        </>
    );
}

function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    const arr = s.split('');
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
        } else if (!vowels.includes(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
}
=======
// src/components/ReverseVowels.js
import React from 'react';

export function ReverseVowels({ s }) {
    const result = reverseVowels(s);

    return (
        <>
            <h3>Reverse Vowels of a String</h3>
            <p>Given a string s, reverse only the vowels of the string.</p>
            <h6>Input string: <p>{s}</p></h6>
            <h4 style={{backgroundColor:"#019B31" , color:"white"}}>Output: {result}</h4>
        </>
    );
}

function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    const arr = s.split('');
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
        } else if (!vowels.includes(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

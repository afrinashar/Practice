/* eslint-disable react/prop-types */
import Input from "../../assets/Input";
import { useState } from "react";

export const ArraysL = () => {
    const [arrays, setArrays] = useState([])
    const [array, setArray] = useState([])
    const handleInputChange = (inputValue) => {
        setArray(inputValue.split(''));
    }
    const handleInputChanges = (inputValue) => {
        setArrays(inputValue.split(''));
    }

    return (
        <div>
            <h1>Array</h1>
            <Input onInputChange={handleInputChange} />
            <Input onInputChange={handleInputChanges} />
            <MergeAlternately word1={array} word2={arrays} />
            <GcdOfStringsComponent str1={array} str2={arrays} />
        </div>
    )
}

// eslint-disable-next-line react/prop-types
export function MergeAlternately({word1, word2}) {
    let merged = '';
    let i = 0;
    const maxLength = Math.max(word1.length, word2.length);
    
    while (i < maxLength) {
        if (i < word1.length) merged += word1[i];
        if (i < word2.length) merged += word2[i];
        i++;
    }

    return (
        <>
            <h3>Merge Array</h3>
            <p>You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>
            <h6>Input array: <p>[{word1.join(', ')}]</p>
            Input array: <p>[{word2.join(', ')}]</p></h6>
            <h4>output: {merged}</h4>
        </>
    );
}

function GcdOfStringsComponent({str1, str2}) {
    const result = str1.length > 0 && str2.length > 0 
        ? gcdOfStrings(str1.join(''), str2.join(''))
        : '';

    return (
        <>
            <h3>GCD of Strings</h3>
            <p>For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times). Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.</p>
            <h6>Input string 1: <p>{str1.join('')}</p>
            Input string 2: <p>{str2.join('')}</p></h6>
            <h4>output: {result}</h4>
        </>
    );
}

function gcdOfStrings(str1, str2) {
    // If str1 + str2 !== str2 + str1, there's no valid divisor
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // Use the Euclidean algorithm to find the GCD of the string lengths
    const gcdLength = gcd(str1.length, str2.length);
    
    // Return the substring of length gcdLength
    return str1.slice(0, gcdLength);
}

// Helper function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
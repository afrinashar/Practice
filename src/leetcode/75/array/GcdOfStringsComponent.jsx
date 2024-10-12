// src/components/GcdOfStringsComponent.js
import React from 'react';

export function GcdOfStringsComponent({ str1, str2 }) {
    const result = str1.length > 0 && str2.length > 0 
        ? gcdOfStrings(str1.join(''), str2.join(''))
        : '';

    return (
        <>
            <h3>GCD of Strings</h3>
            <p>For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times). Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.</p>
            <h6>Input string 1: <p>{str1.join('')}</p>
            Input string 2: <p>{str2.join('')}</p></h6>
            <h4 style={{backgroundColor:"#019B31" , color:"white"}}>Output: {result}</h4>
        </>
    );
}

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/* eslint-disable react/prop-types */
// src/components/ReverseWords.js
 
export function ReverseWords({ s }) {
    const result = reverseWords(s);

    return (
        <>
            <h3>Reverse Words in a String</h3>
            <p>Given an input string s, reverse the order of the words.</p>
            <h6>Input string: <p>{s}</p></h6>
            <h4>Output: {result}</h4>
        </>
    );
}

function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

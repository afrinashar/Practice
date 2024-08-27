/* eslint-disable react/prop-types */
 
export function MergeAlternately({ word1 = '', word2 = '' }) {
    // Ensure word1 and word2 are strings
    if (typeof word1 !== 'string') {
        console.warn('Expected word1 to be a string, but got:', word1);
        word1 = String(word1);  // Convert to string
    }
    if (typeof word2 !== 'string') {
        console.warn('Expected word2 to be a string, but got:', word2);
        word2 = String(word2);  // Convert to string
    }

    let merged = '';
    let i = 0;
    const maxLength = Math.max(word1.length, word2.length);

    // Merge words alternately
    while (i < maxLength) {
        if (i < word1.length) merged += word1[i];
        if (i < word2.length) merged += word2[i];
        i++;
    }

    return (
        <>
            <h3>Merge Strings Alternately</h3>
            <p>You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>
            <h6>Input word1: <p>[{word1.split('').join(', ')}]</p></h6>
            <h6>Input word2: <p>[{word2.split('').join(', ')}]</p></h6>
            <h4>Output: {merged}</h4>
        </>
    );
}

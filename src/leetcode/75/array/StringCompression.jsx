<<<<<<< HEAD
// src/components/StringCompression.js
import React,{useState} from 'react';

export function StringCompression({ chars }) {
    const [compressedLength] = React.useState(compress(chars));

    return (
        <>
            <h3>String Compression</h3>
            <p>Compress the string using the following algorithm.</p>
            <h6>Input array: <p>[{chars.join(', ')}]</p></h6>
            <h4>Output length: {compressedLength}</h4>
        </>
    );
}

function compress(chars) {
    let index = 0, i = 0;

    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }
        chars[index++] = chars[i];
        if (j - i > 1) {
            const count = (j - i) + '';
            for (let c of count) {
                chars[index++] = c;
            }
        }
        i = j;
    }
    return index;
}
=======
// src/components/StringCompression.js
import React,{useState} from 'react';

export function StringCompression({ chars }) {
    const [compressedLength] = React.useState(compress(chars));

    return (
        <>
            <h3>String Compression</h3>
            <p>Compress the string using the following algorithm.</p>
            <h6>Input array: <p>[{chars.join(', ')}]</p></h6>
            <h4>Output length: {compressedLength}</h4>
        </>
    );
}

function compress(chars) {
    let index = 0, i = 0;

    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }
        chars[index++] = chars[i];
        if (j - i > 1) {
            const count = (j - i) + '';
            for (let c of count) {
                chars[index++] = c;
            }
        }
        i = j;
    }
    return index;
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

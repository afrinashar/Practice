// src/components/CanPlaceFlowers.js
import React from 'react';

export function CanPlaceFlowers({ flowerbed, n }) {
    const result = canPlaceFlowers(flowerbed, n);

    return (
        <>
            <h3>Can Place Flowers</h3>
            <p>Given a flowerbed (array containing 0 and 1) and an integer n, return true if n new flowers can be planted without violating the no-adjacent-flowers rule.</p>
            <h6>Input flowerbed: <p>[{flowerbed.join(', ')}]</p>
            Input n: <p>{n}</p></h6>
            <h4 style={{backgroundColor:"#019B31" , color:"white"}}>Output: {result.toString()}</h4>
        </>
    );
}

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
        if (count >= n) return true;
    }
    return false;
}

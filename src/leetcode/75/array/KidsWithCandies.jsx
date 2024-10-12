<<<<<<< HEAD
/* eslint-disable react/prop-types */
// src/components/KidsWithCandies.js
 
export function KidsWithCandies({ candies, extraCandies }) {
    const result = kidsWithCandies(candies, extraCandies);

    return (
        <>
            <h3>Kids With the Greatest Number of Candies</h3>
            <p>Given the array candies and an integer extraCandies, return a boolean array indicating whether each child can have the greatest number of candies after receiving extraCandies.</p>
            <h6>Input candies: <p>[{candies.join(', ')}]</p>
            Input extraCandies: <p>{extraCandies}</p></h6>
            <h4>Output: [{result.join(', ')}]</h4>
        </>
    );
}

function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
}
=======
/* eslint-disable react/prop-types */
// src/components/KidsWithCandies.js
 
export function KidsWithCandies({ candies, extraCandies }) {
    const result = kidsWithCandies(candies, extraCandies);

    return (
        <>
            <h3>Kids With the Greatest Number of Candies</h3>
            <p>Given the array candies and an integer extraCandies, return a boolean array indicating whether each child can have the greatest number of candies after receiving extraCandies.</p>
            <h6>Input candies: <p>[{candies.join(', ')}]</p>
            Input extraCandies: <p>{extraCandies}</p></h6>
            <h4>Output: [{result.join(', ')}]</h4>
        </>
    );
}

function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
}
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

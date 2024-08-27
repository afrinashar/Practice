/* eslint-disable react/prop-types */
// src/components/IncreasingTriplet.js
 
export function IncreasingTriplet({ nums }) {
    const result = increasingTriplet(nums);

    return (
        <>
            <h3>Increasing Triplet Subsequence</h3>
            {/* <p>"Return true if there exists a triplet (i, j, k) such that nums[i] < nums[j] < nums[k]".</p> */}
            <h6>Input array: <p>[{nums.join(', ')}]</p></h6>
            <h4>Output: {result.toString()}</h4>
        </>
    );
}

function increasingTriplet(nums) {
    let first = Infinity, second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
}

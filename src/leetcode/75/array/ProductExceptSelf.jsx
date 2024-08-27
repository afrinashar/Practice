/* eslint-disable react/prop-types */
// src/components/ProductExceptSelf.js
 
export function ProductExceptSelf({ nums }) {
    const result = productExceptSelf(nums);

    return (
        <>
            <h3>Product of Array Except Self</h3>
            <p>Given an array nums, return an array such that each element at index i is the product of all elements in the array except nums[i].</p>
            <h6>Input array: <p>[{nums.join(', ')}]</p></h6>
            <h4>Output: [{result.join(', ')}]</h4>
        </>
    );
}

function productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] *= prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
}

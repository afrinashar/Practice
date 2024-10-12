import React, { useState } from 'react';

const TreeNode = (val, left = null, right = null) => ({ val, left, right });

const searchBST = (root, val) => {
    if (root === null || root.val === val) {
        return root;
    }
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};

const SearchInBinarySearchTree = () => {
    const [value, setValue] = useState(5);
    const [found, setFound] = useState(null);

    const tree = TreeNode(4);
    tree.left = TreeNode(2);
    tree.right = TreeNode(7);
    tree.left.left = TreeNode(1);
    tree.left.right = TreeNode(3);

    const handleSearch = () => {
        const result = searchBST(tree, value);
        setFound(result ? result.val : 'Not found');
    };

    return (
        <div>
            <h3>Search in Binary Search Tree</h3>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="Enter a value to search"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                <strong>Result:</strong> {found !== null ? found : 'Not searched yet'}
            </div>
        </div>
    );
};

export default SearchInBinarySearchTree;


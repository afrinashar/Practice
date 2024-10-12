import React, { useState } from 'react';

// Helper function to create a new tree node
const TreeNode = (val, left = null, right = null) => ({ val, left, right });

const maxLevelSum = (root) => {
    if (!root) return 0;

    const queue = [root];
    let maxSum = -Infinity;
    let maxLevel = 1;
    let currentLevel = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++;
    }

    return maxLevel;
};

const MaximumLevelSumOfBinaryTree = () => {
    // Sample binary tree
    const tree = TreeNode(1);
    tree.left = TreeNode(7);
    tree.right = TreeNode(0);
    tree.left.left = TreeNode(7);
    tree.left.right = TreeNode(-8);

    const [level, setLevel] = useState(null);

    const handleFindMaxLevel = () => {
        const maxLevel = maxLevelSum(tree);
        setLevel(maxLevel);
    };

    return (
        <div>
            <h3>Maximum Level Sum of a Binary Tree</h3>
            <button onClick={handleFindMaxLevel}>Find Maximum Level Sum</button>
            <div>
                <strong>Maximum Level with Highest Sum:</strong> {level !== null ? level : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default MaximumLevelSumOfBinaryTree;

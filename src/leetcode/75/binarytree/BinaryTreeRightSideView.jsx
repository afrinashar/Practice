import React, { useState } from 'react';

// Helper function to create a new tree node
const TreeNode = (val, left = null, right = null) => ({ val, left, right });

const rightSideView = (root) => {
    const result = [];
    const dfs = (node, level) => {
        if (!node) return;
        if (level === result.length) result.push(node.val);
        dfs(node.right, level + 1);
        dfs(node.left, level + 1);
    };
    dfs(root, 0);
    return result;
};

const BinaryTreeRightSideView = () => {
    // Sample binary tree
    const tree = TreeNode(1);
    tree.left = TreeNode(2);
    tree.right = TreeNode(3);
    tree.left.right = TreeNode(5);
    tree.right.right = TreeNode(4);

    const [rightView, setRightView] = useState([]);

    const handleViewRightSide = () => {
        const view = rightSideView(tree);
        setRightView(view);
    };

    return (
        <div>
            <h3>Binary Tree Right Side View</h3>
            <button onClick={handleViewRightSide}>Show Right Side View</button>
            <div>
                <strong>Right Side View:</strong> {rightView.join(', ')}
            </div>
        </div>
    );
};

export default BinaryTreeRightSideView;

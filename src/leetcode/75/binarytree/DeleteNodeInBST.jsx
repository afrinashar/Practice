import React, { useState } from 'react';

const TreeNode = (val, left = null, right = null) => ({ val, left, right });

const deleteNode = (root, key) => {
    if (root === null) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        let minNode = root.right;
        while (minNode.left !== null) {
            minNode = minNode.left;
        }
        root.val = minNode.val;
        root.right = deleteNode(root.right, root.val);
    }
    return root;
};

const DeleteNodeInBST = () => {
    const [value, setValue] = useState(2);
    const [root, setRoot] = useState(null);

    const tree = TreeNode(4);
    tree.left = TreeNode(2);
    tree.right = TreeNode(7);
    tree.left.left = TreeNode(1);
    tree.left.right = TreeNode(3);

    const handleDelete = () => {
        const newTree = deleteNode(tree, value);
        setRoot(newTree);
    };

    const printTree = (node) => {
        if (node === null) return 'null';
        return `${node.val} (${printTree(node.left)}, ${printTree(node.right)})`;
    };

    return (
        <div>
            <h3>Delete Node in BST</h3>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="Enter a value to delete"
            />
            <button onClick={handleDelete}>Delete</button>
            <div>
                <strong>Updated Tree:</strong> {root !== null ? printTree(root) : 'Tree not modified yet'}
            </div>
        </div>
    );
};

export default DeleteNodeInBST;

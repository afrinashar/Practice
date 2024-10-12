import { useState } from 'react';
import './DFS.css'; // Ensure you have appropriate CSS styles

const DFS = () => {
    const [tree, setTree] = useState([]);
    const [pathSum, setPathSum] = useState(0);
    const [targetSum, setTargetSum] = useState(0);
    const [goodNodes, setGoodNodes] = useState(0);
    const [zigzag, setZigzag] = useState(0);
    const [ancestor, setAncestor] = useState(null);

    const maxDepth = (node) => {
        if (!node) return 0;
        return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    };

    const leafSimilarTrees = (tree1, tree2) => {
        const getLeafSequence = (node) => {
            const sequence = [];
            const dfs = (n) => {
                if (!n) return;
                if (!n.left && !n.right) sequence.push(n.val);
                dfs(n.left);
                dfs(n.right);
            };
            dfs(node);
            return sequence;
        };
        const leafSeq1 = getLeafSequence(tree1);
        const leafSeq2 = getLeafSequence(tree2);
        return JSON.stringify(leafSeq1) === JSON.stringify(leafSeq2);
    };

    const countGoodNodes = (node, maxVal = -Infinity) => {
        if (!node) return 0;
        const isGood = node.val >= maxVal ? 1 : 0;
        const newMaxVal = Math.max(maxVal, node.val);
        return isGood + countGoodNodes(node.left, newMaxVal) + countGoodNodes(node.right, newMaxVal);
    };

    const pathSumIII = (node, sum) => {
        if (!node) return 0;
        const checkPath = (n, sum) => {
            if (!n) return 0;
            let count = 0;
            if (n.val === sum) count++;
            count += checkPath(n.left, sum - n.val);
            count += checkPath(n.right, sum - n.val);
            return count;
        };
        return checkPath(node, sum) + pathSumIII(node.left, sum) + pathSumIII(node.right, sum);
    };

    const longestZigZag = (node) => {
        let maxZigzag = 0;
        const dfs = (n, isLeft, length) => {
            if (!n) return;
            maxZigzag = Math.max(maxZigzag, length);
            if (isLeft) {
                dfs(n.left, false, length + 1);
                dfs(n.right, true, 1);
            } else {
                dfs(n.right, true, length + 1);
                dfs(n.left, false, 1);
            }
        };
        dfs(node, true, 0);
        dfs(node, false, 0);
        return maxZigzag;
    };

    const lowestCommonAncestor = (node, p, q) => {
        if (!node) return null;
        if (node === p || node === q) return node;
        const left = lowestCommonAncestor(node.left, p, q);
        const right = lowestCommonAncestor(node.right, p, q);
        if (left && right) return node;
        return left || right;
    };

    const componentContent = {
        "Maximum Depth of Binary Tree": (
            <>
                <input
                    placeholder="Enter tree nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <p>Maximum Depth: {maxDepth(tree)}</p>
            </>
        ),
        "Leaf-Similar Trees": (
            <>
                <input
                    placeholder="Enter tree1 nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter tree2 nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <p>Are Trees Leaf-Similar? {leafSimilarTrees(tree, tree) ? 'Yes' : 'No'}</p>
            </>
        ),
        "Count Good Nodes in Binary Tree": (
            <>
                <input
                    placeholder="Enter tree nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <p>Good Nodes Count: {countGoodNodes(tree)}</p>
            </>
        ),
        "Path Sum III": (
            <>
                <input
                    placeholder="Enter tree nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter target sum"
                    onChange={e => setTargetSum(Number(e.target.value))}
                />
                <p>Path Sum III Count: {pathSumIII(tree, targetSum)}</p>
            </>
        ),
        "Longest ZigZag Path in a Binary Tree": (
            <>
                <input
                    placeholder="Enter tree nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <p>Longest ZigZag Path: {longestZigZag(tree)}</p>
            </>
        ),
        "Lowest Common Ancestor of a Binary Tree": (
            <>
                <input
                    placeholder="Enter tree nodes (comma-separated)"
                    onChange={e => setTree(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter node p"
                    onChange={e => setAncestor(Number(e.target.value))}
                />
                <input
                    placeholder="Enter node q"
                    onChange={e => setAncestor(Number(e.target.value))}
                />
                <p>Lowest Common Ancestor: {lowestCommonAncestor(tree, ancestor, ancestor)?.val || 'None'}</p>
            </>
        )
    };

    const components = [
        "Maximum Depth of Binary Tree",
        "Leaf-Similar Trees",
        "Count Good Nodes in Binary Tree",
        "Path Sum III",
        "Longest ZigZag Path in a Binary Tree",
        "Lowest Common Ancestor of a Binary Tree"
    ];

    const [selectedComponent, setSelectedComponent] = useState(components[0]);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const currentIndex = components.indexOf(selectedComponent);

    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="binarytree-container">
            {sidebarVisible && (
                <div className="sidebar">
                    <button onClick={toggleSidebar} className="toggle-sidebar-btn">▲ Hide Sidebar</button>
                    {components.map((component, index) => (
                        <h6 key={index} onClick={() => setSelectedComponent(component)}>
                            {component}
                        </h6>
                    ))}
                </div>
            )}
            {!sidebarVisible && (
                <button className="show-sidebar-btn" onClick={toggleSidebar}>
                    ▼ Show Sidebar
                </button>
            )}
            <div className="main-content">
                <h2>{selectedComponent}</h2>
                {componentContent[selectedComponent]}
                <div className="navigation-buttons">
                    <button onClick={handlePrevious} className="btn btn-secondary">
                        Previous
                    </button>
                    <button onClick={handleNext} className="btn btn-secondary">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DFS;

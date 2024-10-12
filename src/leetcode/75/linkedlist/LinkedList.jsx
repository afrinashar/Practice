import React, { useState } from 'react';
import './LinkedList.css'; // Ensure you have appropriate CSS styles

const LinkedList = () => {
    const [list, setList] = useState([]);
    const [newNode, setNewNode] = useState('');
    const [middleNodeIndex, setMiddleNodeIndex] = useState(0);
    const [oddEvenList, setOddEvenList] = useState([]);
    const [reversedList, setReversedList] = useState([]);
    const [twinSum, setTwinSum] = useState(0);

    const handleAddNode = () => {
        setList(prevList => [...prevList, Number(newNode)]);
        setNewNode('');
    };

    const deleteMiddleNode = () => {
        const mid = Math.floor(list.length / 2);
        const newList = list.filter((_, index) => index !== mid);
        setList(newList);
    };

    const oddEvenLinkedList = () => {
        const oddList = [];
        const evenList = [];
        list.forEach((node, index) => {
            if (index % 2 === 0) {
                evenList.push(node);
            } else {
                oddList.push(node);
            }
        });
        return [...oddList, ...evenList];
    };

    const reverseLinkedList = () => {
        return list.slice().reverse();
    };

    const maxTwinSum = () => {
        const reversed = list.slice().reverse();
        let maxSum = 0;
        for (let i = 0; i < list.length / 2; i++) {
            maxSum = Math.max(maxSum, list[i] + reversed[i]);
        }
        return maxSum;
    };

    const componentContent = {
        "Delete the Middle Node of a Linked List": (
            <>
                <input
                    placeholder="Enter nodes (comma-separated)"
                    onChange={e => setList(e.target.value.split(',').map(Number))}
                />
                <button onClick={deleteMiddleNode}>Delete Middle Node</button>
                <p>Updated List: {list.join(', ')}</p>
            </>
        ),
        "Odd Even Linked List": (
            <>
                <input
                    placeholder="Enter nodes (comma-separated)"
                    onChange={e => setOddEvenList(e.target.value.split(',').map(Number))}
                />
                <button onClick={() => setOddEvenList(oddEvenLinkedList())}>Odd Even Linked List</button>
                <p>Reordered List: {oddEvenList.join(', ')}</p>
            </>
        ),
        "Reverse Linked List": (
            <>
                <input
                    placeholder="Enter nodes (comma-separated)"
                    onChange={e => setReversedList(e.target.value.split(',').map(Number))}
                />
                <button onClick={() => setReversedList(reverseLinkedList())}>Reverse Linked List</button>
                <p>Reversed List: {reversedList.join(', ')}</p>
            </>
        ),
        "Maximum Twin Sum of a Linked List": (
            <>
                <input
                    placeholder="Enter nodes (comma-separated)"
                    onChange={e => setList(e.target.value.split(',').map(Number))}
                />
                <button onClick={() => setTwinSum(maxTwinSum())}>Maximum Twin Sum</button>
                <p>Maximum Twin Sum: {twinSum}</p>
            </>
        )
    };

    const components = [
        "Delete the Middle Node of a Linked List",
        "Odd Even Linked List",
        "Reverse Linked List",
        "Maximum Twin Sum of a Linked List"
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
        <div className="linkedlist-container">
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

export default LinkedList;

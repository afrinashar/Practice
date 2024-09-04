import React, { useState } from 'react';
import './HashMap.css'; // Ensure you have appropriate CSS styles

const HashMap = () => {
    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);
    const [arr, setArr] = useState([]);
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');

    const findDifference = () => {
        const set1 = new Set(array1);
        const set2 = new Set(array2);
        const diff1 = array1.filter(x => !set2.has(x));
        const diff2 = array2.filter(x => !set1.has(x));
        return { diff1, diff2 };
    };

    const uniqueOccurrences = () => {
        const count = {};
        arr.forEach(num => count[num] = (count[num] || 0) + 1);
        return new Set(Object.values(count)).size === Object.keys(count).length;
    };

    const areClose = () => {
        if (str1.length !== str2.length) return false;
        const count1 = {};
        const count2 = {};
        for (let i = 0; i < str1.length; i++) {
            count1[str1[i]] = (count1[str1[i]] || 0) + 1;
            count2[str2[i]] = (count2[str2[i]] || 0) + 1;
        }
        return JSON.stringify(Object.keys(count1).sort()) === JSON.stringify(Object.keys(count2).sort()) &&
               JSON.stringify(Object.values(count1).sort()) === JSON.stringify(Object.values(count2).sort());
    };

    const equalPairs = () => {
        const count = {};
        for (const row of arr) {
            const key = row.join(',');
            count[key] = (count[key] || 0) + 1;
        }
        const transposed = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
        let pairs = 0;
        for (const row of transposed) {
            const key = row.join(',');
            pairs += count[key] || 0;
        }
        return pairs;
    };

    const componentContent = {
        "Find the Difference of Two Arrays": (
            <>
                <input
                    placeholder="Enter first array (comma-separated)"
                    onChange={e => setArray1(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter second array (comma-separated)"
                    onChange={e => setArray2(e.target.value.split(',').map(Number))}
                />
                <button onClick={findDifference}>Calculate Difference</button>
                <p>Difference 1: {JSON.stringify(findDifference().diff1)}</p>
                <p>Difference 2: {JSON.stringify(findDifference().diff2)}</p>
            </>
        ),
        "Unique Number of Occurrences": (
            <>
                <input
                    placeholder="Enter numbers (comma-separated)"
                    onChange={e => setArr(e.target.value.split(',').map(Number))}
                />
                <button onClick={uniqueOccurrences}>Check Unique Occurrences</button>
                <p>Result: {uniqueOccurrences() ? "True" : "False"}</p>
            </>
        ),
        "Determine if Two Strings Are Close": (
            <>
                <input
                    placeholder="Enter first string"
                    onChange={e => setStr1(e.target.value)}
                />
                <input
                    placeholder="Enter second string"
                    onChange={e => setStr2(e.target.value)}
                />
                <button onClick={areClose}>Check if Close</button>
                <p>Result: {areClose() ? "True" : "False"}</p>
            </>
        ),
        "Equal Row and Column Pairs": (
            <>
                <input
                    placeholder="Enter 2D array (comma-separated rows)"
                    onChange={e => {
                        const rows = e.target.value.split(';').map(row => row.split(',').map(Number));
                        setArr(rows);
                    }}
                />
                <button onClick={equalPairs}>Calculate Equal Pairs</button>
                <p>Result: {equalPairs()}</p>
            </>
        )
    };

    const components = [
        "Find the Difference of Two Arrays",
        "Unique Number of Occurrences",
        "Determine if Two Strings Are Close",
        "Equal Row and Column Pairs"
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
        <div className="hash-map-container">
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

export default HashMap;

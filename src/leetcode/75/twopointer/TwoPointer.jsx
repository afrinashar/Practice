import  { useState } from 'react';
import './TwoPointer.css'; // Ensure you have appropriate CSS styles

const TwoPointer = () => {
    const [nums, setNums] = useState([]);
    const [s, setS] = useState('');
    const [t, setT] = useState('');
    const [heights, setHeights] = useState([]);
    const [k, setK] = useState(0);
    const [target, setTarget] = useState(0);

    const handleMoveZeroes = () => {
        let lastNonZeroFoundAt = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
                lastNonZeroFoundAt++;
            }
        }
        return nums;
    };

    const handleIsSubsequence = () => {
        let sPointer = 0;
        let tPointer = 0;

        while (tPointer < t.length) {
            if (sPointer < s.length && s[sPointer] === t[tPointer]) {
                sPointer++;
            }
            tPointer++;
        }

        return sPointer === s.length;
    };

    const handleMaxArea = () => {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const width = right - left;
            const minHeight = Math.min(heights[left], heights[right]);
            maxArea = Math.max(maxArea, width * minHeight);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    };

    const handleMaxKSumPairs = () => {
        nums.sort((a, b) => a - b);
        let left = 0;
        let right = nums.length - 1;
        let count = 0;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                count++;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return count;
    };

    const componentContent = {
        "Move Zeroes": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <button onClick={handleMoveZeroes}>Move Zeroes</button>
                <p>Result: {JSON.stringify(handleMoveZeroes())}</p>
            </>
        ),
        "Is Subsequence": (
            <>
                <input
                    placeholder="Enter s"
                    onChange={e => setS(e.target.value)}
                />
                <input
                    placeholder="Enter t"
                    onChange={e => setT(e.target.value)}
                />
                <button onClick={handleIsSubsequence}>Is Subsequence</button>
                <p>Result: {handleIsSubsequence() ? 'True' : 'False'}</p>
            </>
        ),
        "Container With Most Water": (
            <>
                <input
                    placeholder="Enter heights (comma-separated)"
                    onChange={e => setHeights(e.target.value.split(',').map(Number))}
                />
                <button onClick={handleMaxArea}>Max Area</button>
                <p>Result: {handleMaxArea()}</p>
            </>
        ),
        "Max Number of K-Sum Pairs": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter target"
                    onChange={e => setTarget(Number(e.target.value))}
                />
                <button onClick={handleMaxKSumPairs}>Max K-Sum Pairs</button>
                <p>Result: {handleMaxKSumPairs()}</p>
            </>
        )
    };

    const components = [
        "Move Zeroes",
        "Is Subsequence",
        "Container With Most Water",
        "Max Number of K-Sum Pairs"
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
        <div className="two-pointer-container">
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

export default TwoPointer;

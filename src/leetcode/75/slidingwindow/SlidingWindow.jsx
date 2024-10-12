import { useState } from 'react';
import './SlidingWindow.css'; // Ensure you have appropriate CSS styles

const SlidingWindow = () => {
    const [nums, setNums] = useState([]);
    const [k, setK] = useState(0);
    const [s, setS] = useState('');
    const [length, setLength] = useState(0);
    const [maxOnes, setMaxOnes] = useState(0);
    const [deleted, setDeleted] = useState(false);

    const handleMaxAverage = () => {
        let maxSum = 0, sum = 0;
        for (let i = 0; i < k; i++) {
            sum += nums[i];
        }
        maxSum = sum;
        for (let i = k; i < nums.length; i++) {
            sum = sum - nums[i - k] + nums[i];
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum / k;
    };

    const handleMaxVowels = () => {
        const vowels = new Set('aeiou');
        let maxVowels = 0, currentVowels = 0;

        for (let i = 0; i < length; i++) {
            if (vowels.has(s[i])) currentVowels++;
        }
        maxVowels = currentVowels;

        for (let i = length; i < s.length; i++) {
            if (vowels.has(s[i])) currentVowels++;
            if (vowels.has(s[i - length])) currentVowels--;
            maxVowels = Math.max(maxVowels, currentVowels);
        }

        return maxVowels;
    };

    const handleMaxConsecutiveOnes = () => {
        let left = 0, maxOnes = 0, zeros = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === 0) zeros++;
            while (zeros > maxOnes) {
                if (nums[left] === 0) zeros--;
                left++;
            }
            maxOnes = Math.max(maxOnes, right - left + 1);
        }

        return maxOnes;
    };

    const handleLongestSubarray = () => {
        let left = 0, maxLength = 0, zeroCount = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === 0) zeroCount++;
            while (zeroCount > 1) {
                if (nums[left] === 0) zeroCount--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    };

    const componentContent = {
        "Maximum Average Subarray I": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter k"
                    onChange={e => setK(Number(e.target.value))}
                />
                <button onClick={handleMaxAverage}>Calculate Maximum Average</button>
                <p>Result: {handleMaxAverage()}</p>
            </>
        ),
        "Maximum Number of Vowels in a Substring of Given Length": (
            <>
                <input
                    placeholder="Enter string"
                    onChange={e => setS(e.target.value)}
                />
                <input
                    placeholder="Enter length"
                    onChange={e => setLength(Number(e.target.value))}
                />
                <button onClick={handleMaxVowels}>Calculate Max Vowels</button>
                <p>Result: {handleMaxVowels()}</p>
            </>
        ),
        "Max Consecutive Ones III": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter maxOnes"
                    onChange={e => setMaxOnes(Number(e.target.value))}
                />
                <button onClick={handleMaxConsecutiveOnes}>Calculate Max Consecutive Ones</button>
                <p>Result: {handleMaxConsecutiveOnes()}</p>
            </>
        ),
        "Longest Subarray of 1's After Deleting One Element": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <button onClick={handleLongestSubarray}>Calculate Longest Subarray</button>
                <p>Result: {handleLongestSubarray()}</p>
            </>
        )
    };

    const components = [
        "Maximum Average Subarray I",
        "Maximum Number of Vowels in a Substring of Given Length",
        "Max Consecutive Ones III",
        "Longest Subarray of 1's After Deleting One Element"
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
        <div className="sliding-window-container">
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

export default SlidingWindow;

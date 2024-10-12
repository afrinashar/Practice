import { useState } from 'react';
import './PrefixSum.css';  

const PrefixSum = () => {
    const [altitudes, setAltitudes] = useState([]);
    const [nums, setNums] = useState([]);

    const findHighestAltitude = () => {
        let maxAltitude = 0, currentAltitude = 0;
        for (let altitude of altitudes) {
            currentAltitude += altitude;
            maxAltitude = Math.max(maxAltitude, currentAltitude);
        }
        return maxAltitude;
    };

    const findPivotIndex = () => {
        let totalSum = nums.reduce((a, b) => a + b, 0);
        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (leftSum === totalSum - leftSum - nums[i]) {
                return i;
            }
            leftSum += nums[i];
        }
        return -1;
    };

    const componentContent = {
        "Find the Highest Altitude": (
            <>
                <input
                    placeholder="Enter altitudes (comma-separated)"
                    onChange={e => setAltitudes(e.target.value.split(',').map(Number))}
                />
                <button onClick={findHighestAltitude}>Calculate Highest Altitude</button>
                <p>Result: {findHighestAltitude()}</p>
            </>
        ),
        "Find Pivot Index": (
            <>
                <input
                    placeholder="Enter nums (comma-separated)"
                    onChange={e => setNums(e.target.value.split(',').map(Number))}
                />
                <button onClick={findPivotIndex}>Calculate Pivot Index</button>
                <p>Result: {findPivotIndex()}</p>
            </>
        )
    };

    const components = [
        "Find the Highest Altitude",
        "Find Pivot Index"
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
        <div className="prefix-sum-container">
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

export default PrefixSum;

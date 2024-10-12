import  { useState } from 'react';
import  KthLargestElement  from './KthLargestElement';
import  SmallestNumberInfiniteSet  from './SmallestNumberInfiniteSet';
import  MaximumSubsequenceScore  from './SmallestNumberInfiniteSet';
import  TotalCostHireWorkers  from './TotalCostHireWorkers';
import './Heap.css';

const Heap = () => {
    const [selectedComponent, setSelectedComponent] = useState('Kth Largest Element in an Array');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Kth Largest Element in an Array',
        'Smallest Number in Infinite Set',
        'Maximum Subsequence Score',
        'Total Cost to Hire K Workers'
    ];

    const componentContent = {
        'Kth Largest Element in an Array': (
            <>
                <input placeholder="Enter array (comma-separated)" />
                <input placeholder="Enter k" />
                <KthLargestElement />
            </>
        ),
        'Smallest Number in Infinite Set': (
            <>
                <input placeholder="Enter a list of numbers (comma-separated)" />
                <SmallestNumberInfiniteSet />
            </>
        ),
        'Maximum Subsequence Score': (
            <>
                <input placeholder="Enter nums (comma-separated)" />
                <input placeholder="Enter k" />
                <MaximumSubsequenceScore />
            </>
        ),
        'Total Cost to Hire K Workers': (
            <>
                <input placeholder="Enter costs (comma-separated)" />
                <input placeholder="Enter k" />
                <TotalCostHireWorkers />
            </>
        )
    };

    const handlePrevious = () => {
        const currentIndex = components.indexOf(selectedComponent);
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);
    };

    const handleNext = () => {
        const currentIndex = components.indexOf(selectedComponent);
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="heap-container">
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

export default Heap;

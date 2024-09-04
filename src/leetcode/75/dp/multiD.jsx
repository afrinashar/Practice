import  { useState } from 'react';
import  UniquePaths  from './UniquePaths';
import  LongestCommonSubsequence  from './LongestCommonSubsequence';
import BestTimeToBuyAndSellStockWithTransactionFee  from './BestTimeToBuyAndSellStockWithTransactionFee';
import EditDistance  from './EditDistance';
import './MultiD.css';

const MultiD = () => {
    const [selectedComponent, setSelectedComponent] = useState('Unique Paths');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Unique Paths',
        'Longest Common Subsequence',
        'Best Time to Buy and Sell Stock with Transaction Fee',
        'Edit Distance'
    ];

    const componentContent = {
        'Unique Paths': (
            <>
                <input placeholder="Enter m" type="number" />
                <input placeholder="Enter n" type="number" />
                <UniquePaths />
            </>
        ),
        'Longest Common Subsequence': (
            <>
                <input placeholder="Enter text1" />
                <input placeholder="Enter text2" />
                <LongestCommonSubsequence />
            </>
        ),
        'Best Time to Buy and Sell Stock with Transaction Fee': (
            <>
                <input placeholder="Enter prices (comma-separated)" />
                <input placeholder="Enter fee" type="number" />
                <BestTimeToBuyAndSellStockWithTransactionFee />
            </>
        ),
        'Edit Distance': (
            <>
                <input placeholder="Enter word1" />
                <input placeholder="Enter word2" />
                <EditDistance />
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
        <div className="multid-container">
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

export default MultiD;

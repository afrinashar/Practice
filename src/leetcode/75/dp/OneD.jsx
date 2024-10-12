import   { useState } from 'react';
import NThTribonacciNumber  from './NThTribonacciNumber';
import  MinCostClimbingStairs  from './MinCostClimbingStairs';
import  HouseRobber  from './HouseRobber';
import  DominoAndTrominoTiling  from './DominoAndTrominoTiling';
import './OneD.css';

const OneD = () => {
    const [selectedComponent, setSelectedComponent] = useState('N-th Tribonacci Number');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'N-th Tribonacci Number',
        'Min Cost Climbing Stairs',
        'House Robber',
        'Domino and Tromino Tiling'
    ];

    const componentContent = {
        'N-th Tribonacci Number': (
            <>
                <input placeholder="Enter n" type="number" />
                <NThTribonacciNumber />
            </>
        ),
        'Min Cost Climbing Stairs': (
            <>
                <input placeholder="Enter cost (comma-separated)" />
                <MinCostClimbingStairs />
            </>
        ),
        'House Robber': (
            <>
                <input placeholder="Enter nums (comma-separated)" />
                <HouseRobber />
            </>
        ),
        'Domino and Tromino Tiling': (
            <>
                <input placeholder="Enter n" type="number" />
                <DominoAndTrominoTiling />
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
        <div className="oned-container">
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

export default OneD;

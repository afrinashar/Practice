import   { useState } from 'react';
import  NonOverlappingIntervals  from './NonOverlappingIntervel';
import  MinimumNumberOfArrowsToBurstBalloons  from './MinimumNumberOfArrowsToBurstbaloon';
import './Intervals.css';

const Intervals = () => {
    const [selectedComponent, setSelectedComponent] = useState('Non-overlapping Intervals');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Non-overlapping Intervals',
        'Minimum Number of Arrows to Burst Balloons'
    ];

    const componentContent = {
        'Non-overlapping Intervals': (
            <>
                <input placeholder="Enter intervals (comma-separated)" />
                <NonOverlappingIntervals />
            </>
        ),
        'Minimum Number of Arrows to Burst Balloons': (
            <>
                <input placeholder="Enter points (comma-separated)" />
                <MinimumNumberOfArrowsToBurstBalloons />
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
        <div className="intervals-container">
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

export default Intervals;

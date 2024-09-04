import  { useState } from 'react';
import DailyTemperatures  from './DailyTemperature';
import  OnlineStockSpan  from './OnlineStockSpan';
import './Monotonic.css';

const Monotonic = () => {
    const [selectedComponent, setSelectedComponent] = useState('Daily Temperatures');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Daily Temperatures',
        'Online Stock Span'
    ];

    const componentContent = {
        'Daily Temperatures': (
            <>
                <input placeholder="Enter temperatures (comma-separated)" />
                <DailyTemperatures />
            </>
        ),
        'Online Stock Span': (
            <>
                <input placeholder="Enter prices (comma-separated)" />
                <OnlineStockSpan />
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
        <div className="monotonicstack-container">
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

export default Monotonic;

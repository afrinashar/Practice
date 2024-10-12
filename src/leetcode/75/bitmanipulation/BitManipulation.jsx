import  { useState } from 'react';
import  CountingBits from './CountingBits';
import  SingleNumber  from './SingleNumber';
import  MinimumFlipsToMakeOrEqual  from './MinimumFlipsToMakeOrEqual';
import './BitManipulation.css';

const BitManipulation = () => {
    const [selectedComponent, setSelectedComponent] = useState('Counting Bits');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Counting Bits',
        'Single Number',
        'Minimum Flips to Make a OR b Equal to c'
    ];

    const componentContent = {
        'Counting Bits': (
            <>
                <input placeholder="Enter n" type="number" />
                <CountingBits />
            </>
        ),
        'Single Number': (
            <>
                <input placeholder="Enter nums (comma-separated)" />
                <SingleNumber />
            </>
        ),
        'Minimum Flips to Make a OR b Equal to c': (
            <>
                <input placeholder="Enter a" />
                <input placeholder="Enter b" />
                <input placeholder="Enter c" />
                <MinimumFlipsToMakeOrEqual />
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
        <div className="bitmanipulation-container">
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

export default BitManipulation;

import   { useState } from 'react';
import  LetterCombinations  from './LetterCombinations';
//import CombinationSumIII from './CombinationSumIII';
import './BackTracking.css';

const BackTracking = () => {
    const [selectedComponent, setSelectedComponent] = useState('Letter Combinations of a Phone Number');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Letter Combinations of a Phone Number',
        'Combination Sum III'
    ];

    const componentContent = {
        'Letter Combinations of a Phone Number': (
            <>
                <input placeholder="Enter digits" />
                <LetterCombinations />
            </>
        ),
        'Combination Sum III': (
            <>
                <input placeholder="Enter k (number of elements)" />
                <input placeholder="Enter n (target sum)" />
                <CombinationSumIII />
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
        <div className="backtracking-container">
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

export default BackTracking;

import  { useState } from 'react';
import NearestExit  from './NearestExit';
import RottingOranges  from './RottingOranges';
import './GraphBFS.css';

const GraphBFS = () => {
    const [selectedComponent, setSelectedComponent] = useState('Nearest Exit from Entrance in Maze');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Nearest Exit from Entrance in Maze',
        'Rotting Oranges'
    ];

    const componentContent = {
        'Nearest Exit from Entrance in Maze': (
            <>
                <input placeholder="Enter maze (comma-separated rows)" />
                <input placeholder="Enter entrance position (x,y)" />
                <NearestExit />
            </>
        ),
        'Rotting Oranges': (
            <>
                <input placeholder="Enter grid (comma-separated rows)" />
                <RottingOranges />
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
        <div className="graphbfs-container">
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

export default GraphBFS;

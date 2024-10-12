import  { useState } from 'react';
import  KeysAndRooms  from './KeysAndRoom';
import  NumberOfProvinces  from './NumberofBrovinces';
import  ReorderRoutes  from './ReorderRoutes';
import  EvaluateDivision  from './Evaluation';
import './GraphDFS.css';

const GraphDFS = () => {
    const [selectedComponent, setSelectedComponent] = useState('Keys and Rooms');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Keys and Rooms',
        'Number of Provinces',
        'Reorder Routes to Make All Paths Lead to the City Zero',
        'Evaluate Division'
    ];

    const componentContent = {
        'Keys and Rooms': (
            <>
                <input placeholder="Enter rooms and keys (comma-separated)" />
                <KeysAndRooms />
            </>
        ),
        'Number of Provinces': (
            <>
                <input placeholder="Enter connections (comma-separated)" />
                <NumberOfProvinces />
            </>
        ),
        'Reorder Routes to Make All Paths Lead to the City Zero': (
            <>
                <input placeholder="Enter routes (comma-separated)" />
                <ReorderRoutes />
            </>
        ),
        'Evaluate Division': (
            <>
                <input placeholder="Enter equations and values (comma-separated)" />
                <EvaluateDivision />
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
        <div className="graphdfs-container">
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

export default GraphDFS;

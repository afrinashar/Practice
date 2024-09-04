import   { useState } from 'react';
import  BinaryTreeRightSideView  from './BinaryTreeRightSideView';
import  MaximumLevelSumOfBinaryTree  from './MaximumLevelSumOfBinaryTree';
import './BFS.css';

const BFS = () => {
    const [selectedComponent, setSelectedComponent] = useState('Binary Tree Right Side View');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Binary Tree Right Side View',
        'Maximum Level Sum of a Binary Tree'
    ];

    const componentContent = {
        'Binary Tree Right Side View': (
            <>
                <input placeholder="Enter tree nodes (comma-separated)" />
                <BinaryTreeRightSideView />
            </>
        ),
        'Maximum Level Sum of a Binary Tree': (
            <>
                <input placeholder="Enter tree nodes (comma-separated)" />
                <MaximumLevelSumOfBinaryTree />
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
        <div className="bfs-container">
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

export default BFS;

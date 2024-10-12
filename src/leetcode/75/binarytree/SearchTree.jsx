import  { useState } from 'react';
import  SearchInBinarySearchTree  from './SearchInBinarySearchTree';
import  DeleteNodeInBST  from './DeleteNodeInBST';
import './SearchTree.css';

const SearchTree = () => {
    const [selectedComponent, setSelectedComponent] = useState('Search in a Binary Search Tree');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Search in a Binary Search Tree',
        'Delete Node in a BST'
    ];

    const componentContent = {
        'Search in a Binary Search Tree': (
            <>
                <input placeholder="Enter tree nodes (comma-separated)" />
                <input placeholder="Enter value to search" />
                <SearchInBinarySearchTree />
            </>
        ),
        'Delete Node in a BST': (
            <>
                <input placeholder="Enter tree nodes (comma-separated)" />
                <input placeholder="Enter value to delete" />
                <DeleteNodeInBST />
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
        <div className="searchtree-container">
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

export default SearchTree;

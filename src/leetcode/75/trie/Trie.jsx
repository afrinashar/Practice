import  { useState } from 'react';
import ImplementTrie  from './ImplementTrie';
import SearchSuggestionsSystem  from './SearchSuggetionSystem';
import './Trie.css';

const Trie = () => {
    const [selectedComponent, setSelectedComponent] = useState('Implement Trie (Prefix Tree)');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Implement Trie (Prefix Tree)',
        'Search Suggestions System'
    ];

    const componentContent = {
        'Implement Trie (Prefix Tree)': (
            <>
                <input placeholder="Enter word" />
                <ImplementTrie />
            </>
        ),
        'Search Suggestions System': (
            <>
                <input placeholder="Enter search word" />
                <SearchSuggestionsSystem />
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
        <div className="trie-container">
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

export default Trie;

import  { useState } from 'react';
import  GuessNumberHigherOrLower  from './GuessNumberHigherOrLower';
import  SuccessfulPairsOfSpellsAndPotions  from './SuccessfulPairsOfSpellsAndPotions';
import  FindPeakElement from './FindPeakElement';
import  KokoEatingBananas  from './KokoEatingBananas';
import './BinarySearch.css';

const BinaryTree = () => {
    const [selectedComponent, setSelectedComponent] = useState('Guess Number Higher or Lower');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const components = [
        'Guess Number Higher or Lower',
        'Successful Pairs of Spells and Potions',
        'Find Peak Element',
        'Koko Eating Bananas'
    ];

    const componentContent = {
        'Guess Number Higher or Lower': (
            <>
                <input placeholder="Enter your guess" />
                <GuessNumberHigherOrLower />
            </>
        ),
        'Successful Pairs of Spells and Potions': (
            <>
                <input placeholder="Enter spells (comma-separated)" />
                <input placeholder="Enter potions (comma-separated)" />
                <SuccessfulPairsOfSpellsAndPotions />
            </>
        ),
        'Find Peak Element': (
            <>
                <input placeholder="Enter nums (comma-separated)" />
                <FindPeakElement />
            </>
        ),
        'Koko Eating Bananas': (
            <>
                <input placeholder="Enter piles (comma-separated)" />
                <input placeholder="Enter h (hours)" />
                <KokoEatingBananas />
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
        <div className="binarytree-container">
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

export default BinaryTree;

import React, { useState } from 'react';
import './Queue.css'; // Ensure you have appropriate CSS styles

const Queue = () => {
    const [recentCalls, setRecentCalls] = useState([]);
    const [recentCallTime, setRecentCallTime] = useState(0);
    const [dota2SenateVotes, setDota2SenateVotes] = useState([]);
    const [senateResult, setSenateResult] = useState('');

    // Number of Recent Calls
    const addRecentCall = (time) => {
        setRecentCalls(prevCalls => [...prevCalls, time]);
    };

    const numRecentCalls = () => {
        const threshold = Date.now() - recentCallTime;
        return recentCalls.filter(call => call > threshold).length;
    };

    // Dota2 Senate
    const determineSenateResult = () => {
        const queue = [];
        for (const senator of dota2SenateVotes) {
            if (senator === 'R') {
                queue.push('R');
            } else {
                while (queue.length && queue[queue.length - 1] === 'R') {
                    queue.pop();
                }
                if (!queue.length || senator === 'D') {
                    queue.push(senator);
                }
            }
        }
        return queue.length === 0 ? 'Yes' : 'No';
    };

    const componentContent = {
        "Number of Recent Calls": (
            <>
                <input
                    placeholder="Enter call times (comma-separated)"
                    onChange={e => setRecentCalls(e.target.value.split(',').map(Number))}
                />
                <input
                    placeholder="Enter time to check recent calls"
                    onChange={e => setRecentCallTime(Number(e.target.value))}
                />
                <button onClick={() => alert(numRecentCalls())}>Number of Recent Calls</button>
                <p>Result: {numRecentCalls()}</p>
            </>
        ),
        "Dota2 Senate": (
            <>
                <input
                    placeholder="Enter Senate votes (comma-separated)"
                    onChange={e => setDota2SenateVotes(e.target.value.split(','))}
                />
                <button onClick={() => setSenateResult(determineSenateResult())}>Determine Senate Result</button>
                <p>Result: {senateResult}</p>
            </>
        )
    };

    const components = [
        "Number of Recent Calls",
        "Dota2 Senate"
    ];

    const [selectedComponent, setSelectedComponent] = useState(components[0]);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const currentIndex = components.indexOf(selectedComponent);

    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="queue-container">
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

export default Queue;

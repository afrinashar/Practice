import  { useState } from 'react';
import './Stack.css'; // Ensure you have appropriate CSS styles

const Stack = () => {
    const [inputString, setInputString] = useState('');
    const [asteroids, setAsteroids] = useState([]);
    const [encodedStr, setEncodedStr] = useState('');
    const [decodedStr, setDecodedStr] = useState('');

    const removeStars = () => {
        const stack = [];
        for (const char of inputString) {
            if (char === '*') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };

    const asteroidCollision = () => {
        const stack = [];
        for (const asteroid of asteroids) {
            let destroyed = false;
            while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
                if (stack[stack.length - 1] < -asteroid) {
                    stack.pop();
                } else if (stack[stack.length - 1] === -asteroid) {
                    stack.pop();
                    destroyed = true;
                    break;
                } else {
                    destroyed = true;
                    break;
                }
            }
            if (!destroyed) stack.push(asteroid);
        }
        return stack;
    };

    const decodeString = () => {
        const stack = [];
        let num = 0;
        let str = '';

        for (const char of encodedStr) {
            if (char >= '0' && char <= '9') {
                num = num * 10 + parseInt(char, 10);
            } else if (char === '[') {
                stack.push([str, num]);
                str = '';
                num = 0;
            } else if (char === ']') {
                const [prevStr, repeat] = stack.pop();
                str = prevStr + str.repeat(repeat);
            } else {
                str += char;
            }
        }

        return str;
    };

    const componentContent = {
        "Removing Stars From a String": (
            <>
                <input
                    placeholder="Enter string with stars"
                    value={inputString}
                    onChange={e => setInputString(e.target.value)}
                />
                <button onClick={() => setInputString(removeStars())}>Remove Stars</button>
                <p>Result: {removeStars()}</p>
            </>
        ),
        "Asteroid Collision": (
            <>
                <input
                    placeholder="Enter asteroids (comma-separated)"
                    onChange={e => setAsteroids(e.target.value.split(',').map(Number))}
                />
                <button onClick={() => setAsteroids(asteroidCollision())}>Check Collision</button>
                <p>Result: {JSON.stringify(asteroidCollision())}</p>
            </>
        ),
        "Decode String": (
            <>
                <input
                    placeholder="Enter encoded string"
                    value={encodedStr}
                    onChange={e => setEncodedStr(e.target.value)}
                />
                <button onClick={() => setDecodedStr(decodeString())}>Decode String</button>
                <p>Result: {decodedStr}</p>
            </>
        )
    };

    const components = [
        "Removing Stars From a String",
        "Asteroid Collision",
        "Decode String"
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
        <div className="stack-container">
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

export default Stack;

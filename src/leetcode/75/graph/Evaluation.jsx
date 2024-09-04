import  { useState } from 'react';
import  EvaluateDivision  from './EvaluateDivision';
import './YourStyle.css'; // Ensure you include necessary styles

const MainComponent = () => {
    const [selectedComponent, setSelectedComponent] = useState('EvaluateDivision');

    const components = {
        'EvaluateDivision': <EvaluateDivision
            equations={[['a', 'b'], ['b', 'c']]}
            values={[2.0, 3.0]}
            queries={[['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]}
        />
    };

    return (
        <div className="main-container">
            <h2>{selectedComponent}</h2>
            {components[selectedComponent]}
        </div>
    );
};

export default MainComponent;

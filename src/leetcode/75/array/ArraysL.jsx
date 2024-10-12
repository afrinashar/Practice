<<<<<<< HEAD
import { useState } from 'react';
import { MergeAlternately } from './MergeAlternately';
import { GcdOfStringsComponent } from './GcdOfStringsComponent';
import { KidsWithCandies } from './KidsWithCandies';
import { CanPlaceFlowers } from './CanPlaceFlowers';
import { ReverseVowels } from './ReverseVowels';
import { ReverseWords } from './ReverseWords';
import { ProductExceptSelf } from './ProductExceptSelf';
import { IncreasingTriplet } from './IncreasingTriplet';
import { StringCompression } from './StringCompression';
import './ArraysL.css'; // Assuming CSS is in the same directory

const ArraysL = () => {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');
    const [candies, setCandies] = useState([]);
    const [extraCandies, setExtraCandies] = useState(0);
    const [flowerbed, setFlowerbed] = useState([]);
    const [n, setN] = useState(0);
    const [s, setS] = useState('');
    const [nums, setNums] = useState([]);
    const [chars, setChars] = useState([]);
    const components = [
        "Merge Strings Alternately",
        "Greatest Common Divisor of Strings",
        "Kids With the Greatest Number of Candies",
        "Can Place Flowers",
        "Reverse Vowels of a String",
        "Reverse Words in a String",
        "Product of Array Except Self",
        "Increasing Triplet Subsequence",
        "String Compression"
    ];

    const [selectedComponent, setSelectedComponent] = useState(components[0]);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const componentContent = {
        "Merge Strings Alternately": (
            <>
                <input placeholder="Enter word1" value={word1} onChange={e => setWord1(e.target.value)} />
                <input placeholder="Enter word2" value={word2}  onChange={e => setWord2(e.target.value)} />
                <MergeAlternately word1={word1.split('')} word2={word2.split('')} />
                </>
        ),
        "Greatest Common Divisor of Strings": (
            <>
                <input placeholder="Enter str1" onChange={e => setStr1(e.target.value)} />
                <input placeholder="Enter str2" onChange={e => setStr2(e.target.value)} />
                <GcdOfStringsComponent str1={str1.split('')} str2={str2.split('')} />
            </>
        ),
        "Kids With the Greatest Number of Candies": (
            <>
                <input placeholder="Enter candies (comma-separated)" onChange={e => setCandies(e.target.value.split(',').map(Number))} />
                <input placeholder="Enter extraCandies" onChange={e => setExtraCandies(Number(e.target.value))} />
                <KidsWithCandies candies={candies} extraCandies={extraCandies} />
            </>
        ),
        "Can Place Flowers": (
            <>
                <input placeholder="Enter flowerbed (comma-separated)" onChange={e => setFlowerbed(e.target.value.split(',').map(Number))} />
                <input placeholder="Enter n" onChange={e => setN(Number(e.target.value))} />
                <CanPlaceFlowers flowerbed={flowerbed} n={n} />
            </>
        ),
        "Reverse Vowels of a String": (
            <>
                <input placeholder="Enter string" onChange={e => setS(e.target.value)} />
                <ReverseVowels s={s} />
            </>
        ),
        "Reverse Words in a String": (
            <>
                <input placeholder="Enter string" onChange={e => setS(e.target.value)} />
                <ReverseWords s={s} />
            </>
        ),
        "Product of Array Except Self": (
            <>
                <input placeholder="Enter nums (comma-separated)" onChange={e => setNums(e.target.value.split(',').map(Number))} />
                <ProductExceptSelf nums={nums} />
            </>
        ),
        "Increasing Triplet Subsequence": (
            <>
                <input placeholder="Enter nums (comma-separated)" onChange={e => setNums(e.target.value.split(',').map(Number))} />
                <IncreasingTriplet nums={nums} />
            </>
        ),
        "String Compression": (
            <>
                <input placeholder="Enter chars (comma-separated)" onChange={e => setChars(e.target.value.split(','))} />
                <StringCompression chars={chars} />
            </>
        )
    };

    const currentIndex = components.indexOf(selectedComponent);

    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);

        // setCandies("")
        // setCandies('')
        //     setChars('')
        //     setN('')
        //     setS('')
        //  setFlowerbed('')
        //  setStr1('')
        //  setStr2('')
        //  setWord1('')
        //  setWord2('')
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
         
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="arraysl-container">
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

export default ArraysL;
=======
import { useState } from 'react';
import { MergeAlternately } from './MergeAlternately';
import { GcdOfStringsComponent } from './GcdOfStringsComponent';
import { KidsWithCandies } from './KidsWithCandies';
import { CanPlaceFlowers } from './CanPlaceFlowers';
import { ReverseVowels } from './ReverseVowels';
import { ReverseWords } from './ReverseWords';
import { ProductExceptSelf } from './ProductExceptSelf';
import { IncreasingTriplet } from './IncreasingTriplet';
import { StringCompression } from './StringCompression';
import './ArraysL.css';

const ArraysL = () => {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');
    const [candies, setCandies] = useState([]);
    const [extraCandies, setExtraCandies] = useState(0);
    const [flowerbed, setFlowerbed] = useState([]);
    const [n, setN] = useState(0);
    const [s, setS] = useState('');
    const [nums, setNums] = useState([]);
    const [chars, setChars] = useState([]);
    const components = [
        "Merge Strings Alternately",
        "Greatest Common Divisor of Strings",
        "Kids With the Greatest Number of Candies",
        "Can Place Flowers",
        "Reverse Vowels of a String",
        "Reverse Words in a String",
        "Product of Array Except Self",
        "Increasing Triplet Subsequence",
        "String Compression"
    ];

    const [selectedComponent, setSelectedComponent] = useState(components[0]);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const componentContent = {
        "Merge Strings Alternately": (
            <>
                <input placeholder="Enter word1" value={word1} onChange={e => setWord1(e.target.value)} />
                <input placeholder="Enter word2" value={word2}  onChange={e => setWord2(e.target.value)} />
                <MergeAlternately word1={word1.split('')} word2={word2.split('')} />
                </>
        ),
        "Greatest Common Divisor of Strings": (
            <>
                <input placeholder="Enter str1" onChange={e => setStr1(e.target.value)} />
                <input placeholder="Enter str2" onChange={e => setStr2(e.target.value)} />
                <GcdOfStringsComponent str1={str1.split('')} str2={str2.split('')} />
            </>
        ),
        "Kids With the Greatest Number of Candies": (
            <>
                <input placeholder="Enter candies (comma-separated)" onChange={e => setCandies(e.target.value.split(',').map(Number))} />
                <input placeholder="Enter extraCandies" onChange={e => setExtraCandies(Number(e.target.value))} />
                <KidsWithCandies candies={candies} extraCandies={extraCandies} />
            </>
        ),
        "Can Place Flowers": (
            <>
                <input placeholder="Enter flowerbed (comma-separated)" onChange={e => setFlowerbed(e.target.value.split(',').map(Number))} />
                <input placeholder="Enter n" onChange={e => setN(Number(e.target.value))} />
                <CanPlaceFlowers flowerbed={flowerbed} n={n} />
            </>
        ),
        "Reverse Vowels of a String": (
            <>
                <input placeholder="Enter string" onChange={e => setS(e.target.value)} />
                <ReverseVowels s={s} />
            </>
        ),
        "Reverse Words in a String": (
            <>
                <input placeholder="Enter string" onChange={e => setS(e.target.value)} />
                <ReverseWords s={s} />
            </>
        ),
        "Product of Array Except Self": (
            <>
                <input placeholder="Enter nums (comma-separated)" onChange={e => setNums(e.target.value.split(',').map(Number))} />
                <ProductExceptSelf nums={nums} />
            </>
        ),
        "Increasing Triplet Subsequence": (
            <>
                <input placeholder="Enter nums (comma-separated)" onChange={e => setNums(e.target.value.split(',').map(Number))} />
                <IncreasingTriplet nums={nums} />
            </>
        ),
        "String Compression": (
            <>
                <input placeholder="Enter chars (comma-separated)" onChange={e => setChars(e.target.value.split(','))} />
                <StringCompression chars={chars} />
            </>
        )
    };

    const currentIndex = components.indexOf(selectedComponent);

    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);

        // setCandies("")
        // setCandies('')
        //     setChars('')
        //     setN('')
        //     setS('')
        //  setFlowerbed('')
        //  setStr1('')
        //  setStr2('')
        //  setWord1('')
        //  setWord2('')
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
         
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="arraysl-container">
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

export default ArraysL;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

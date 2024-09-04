import   { useState } from 'react';
import ArraysL from "./array/ArraysL";
import BackTracking from "./backtracking/BackTracking";
import BinaryTree from "./binarysearch/BinarySearch";
import BFS from "./binarytree/BFS";
import DFS from "./binarytree/DFS";
import SearchTree from "./binarytree/SearchTree";
import BitManipulation from "./bitmanipulation/BitManipulation";
import MultiD from "./dp/multiD";
import OneD from "./dp/OneD";
import GraphBFS from "./graph/GraphBFS";
import GraphDFS from "./graph/GraphDFS";
import HashMap from "./hashmap/HashMap";
import Heap from "./heap/Heap";
import Intervals from "./intervals/Intervals";
import LinkedList from "./linkedlist/LinkedList";
import PrefixSum from "./prefixsum/PrefixSum";
import Queue from "./queue/Queue";
import SlidingWindow from "./slidingwindow/SlidingWindow";
import Monotonic from "./stack/Monotonic";
import Stack from "./stack/Stack";
import Trie from "./trie/Trie";
import TwoPointer from "./twopointer/TwoPointer";
import Card2 from '../../assets/Card2';
import './Leetcode75.css';  // Import the CSS file for the layout
import { Row, Col } from 'react-bootstrap';

export const Leetcode75 = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleCard2Click = (component) => {
        console.log('Card2 clicked:', component); // Debug line
        setSelectedComponent(component);
    };

    const renderComponent = () => {
        console.log('Rendering component:', selectedComponent); // Debug line
        switch (selectedComponent) {
            case 'ArraysL': return <ArraysL /> 
            case 'TwoPointer': return <TwoPointer /> 
            case 'SlidingWindow': return <SlidingWindow /> 
            case 'HashMap': return <HashMap /> 
            case 'Stack': return <Stack /> 
            case 'Queue': return <Queue /> 
            case 'LinkedList': return <LinkedList /> 
            case 'BFS': return <BFS /> 
            case 'DFS': return <DFS /> 
            case 'SearchTree': return <SearchTree /> 
            case 'GraphBFS': return <GraphBFS /> 
            case 'GraphDFS': return <GraphDFS /> 
            case 'Heap': return <Heap /> 
            case 'BinaryTree': return <BinaryTree /> 
            case 'BackTracking': return <BackTracking /> 
            case 'OneD': return <OneD /> 
            case 'MultiD': return <MultiD /> 
            case 'BitManipulation': return <BitManipulation /> 
            case 'Trie': return <Trie /> 
            case 'Intervals': return <Intervals /> 
            case 'Monotonic': return <Monotonic /> 
            default: return null;
        }
    };

    return (
        <div className="leetcode75-container">
            {selectedComponent ? (
                <div className="component-view">
                    {renderComponent()}
                    <button onClick={() => setSelectedComponent(null)} className="back-btn">
                        Back to Categories
                    </button>
                </div>
            ) : (
                <div className="Card2-container">
                <Row>
                <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="ArraysL" onClick={() => handleCard2Click('ArraysL')} /></Col>
                <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="TwoPointer" onClick={() => handleCard2Click('TwoPointer')} /></Col>
                <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="SlidingWindow" onClick={() => handleCard2Click('SlidingWindow')} /></Col>
                </Row>
                <Row><Col sm={12} md={6} lg={4} className="mb-4">  <Card2 title="PrefixSum" onClick={() => handleCard2Click('PrefixSum')} /></Col>
                <Col sm={12} md={6} lg={4} className="mb-4">  <Card2 title="HashMap" onClick={() => handleCard2Click('HashMap')} /></Col>
                <Col sm={12} md={6} lg={4} className="mb-4">  <Card2 title="Stack" onClick={() => handleCard2Click('Stack')} /></Col>
                </Row>
                <Row> <Col sm={12} md={6} lg={4} className="mb-4">  <Card2 title="Queue" onClick={() => handleCard2Click('Queue')} /></Col>
                <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="LinkedList" onClick={() => handleCard2Click('LinkedList')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="BFS" onClick={() => handleCard2Click('BFS')} /></Col>
                  </Row> 
                   <Row>  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="DFS" onClick={() => handleCard2Click('DFS')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="SearchTree" onClick={() => handleCard2Click('SearchTree')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="GraphBFS" onClick={() => handleCard2Click('GraphBFS')} /></Col>
                  </Row> 
                   <Row><Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="GraphDFS" onClick={() => handleCard2Click('GraphDFS')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="Heap" onClick={() => handleCard2Click('Heap')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="BinaryTree" onClick={() => handleCard2Click('BinaryTree')} /></Col>
                  </Row>
                  <Row> <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="BackTracking" onClick={() => handleCard2Click('BackTracking')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="OneD" onClick={() => handleCard2Click('OneD')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="MultiD" onClick={() => handleCard2Click('MultiD')} /></Col>
                  </Row><Row> <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="BitManipulation" onClick={() => handleCard2Click('BitManipulation')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="Trie" onClick={() => handleCard2Click('Trie')} /></Col>
                  <Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="Intervals" onClick={() => handleCard2Click('Intervals')} /></Col>
                  </Row> <Row><Col sm={12} md={6} lg={4} className="mb-4"> <Card2 title="Monotonic" onClick={() => handleCard2Click('Monotonic')} /></Col></Row>
                </div>
            )}
        </div>
    );
};

import  { useState } from 'react';
import styled from 'styled-components';
import './css.css';
import ProgressCircle from './ProgressCiecle';
import GridLayout from './Grid';
import Flex from './Flex';
import Centering from './Centering';
import DarkMode from './DarkMode';
import Functions from './Functions';
import MediaQueries from './MediaQuries';
import Model from './Model';
import Navbar from './Navbar';
import ResponsiveImage from './ResponsiveImage';

 

export const Css = () => {
  const components = [
    'Navbar',
    'Flex',
    'Grid',
    'Centering',
    'DarkMode',
    'Functions',
    'MediaQueries',
    'Model',
    'ResponsiveImage',
    'ProgressCircle',
  ];

  const [activeComponent, setActiveComponent] = useState(components[0]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const renderComponent = () => {
     switch (activeComponent) {
      case 'Navbar':
        return <Navbar />;
      case 'Flex':
        return <Flex />;
      case 'Grid':
        return <GridLayout />;
      case 'Centering':
        return <Centering />;
      case 'DarkMode':
        return <DarkMode />;
      case 'Functions':
        return <Functions />;
      case 'MediaQueries':
        return <MediaQueries />;
      case 'Model':
        return <Model />;
      case 'ResponsiveImage':
        return <ResponsiveImage />;
      case 'ProgressCircle':
        return <ProgressCircle />;
      default:
        return <Flex />;
    }
  };


  const goToPreviousComponent = () => {
    const currentIndex = components.indexOf(activeComponent);
    const previousIndex = (currentIndex - 1 + components.length) % components.length;
    setActiveComponent(components[previousIndex]);
  };

  const goToNextComponent = () => {
    const currentIndex = components.indexOf(activeComponent);
    const nextIndex = (currentIndex + 1) % components.length;
    setActiveComponent(components[nextIndex]);
  };

  return (
    <div className="projects-container">
      {sidebarVisible && (
        <div className="sidebar" style={{backgroundColor:"#011655", color:"white" , MozUserFocus:"normal"}}>
          <h6  style={{backgroundColor:"#011655", color:"white"}} onClick={() => setSidebarVisible(false)}>▲ Hide Sidebar</h6>
          {components.map((component, index) => (
            <h6 key={index} onClick={() => setActiveComponent(component)}>
              {component}
            </h6>
          ))}
        </div>
      )}
      {!sidebarVisible && (
        <button style={{backgroundColor:"#011655", color:"white"}} className="show-sidebar-btn" onClick={() => setSidebarVisible(true)}>
          ▼ Show Sidebar
        </button>
      )}
      <div className="main-content " >
        {renderComponent()}
        <div className="navigation-buttons">
          <button style={{backgroundColor:"#011655", color:"white"}} onClick={goToPreviousComponent} className="btn btn-secondary">
            Previous
          </button>
          <button style={{backgroundColor:"#011655", color:"white"}} onClick={goToNextComponent} className="btn btn-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Css;

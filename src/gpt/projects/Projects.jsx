<<<<<<< HEAD
import { useState } from "react";
import Calculator from "./Calculator";
import Contact from "./Contact";
import DynamicForm from "./DynamicForm";
import Expense from "./Expense";
import Fitness from "./Fitness";
import Habit from "./Habit";
import Markdown from "./Markdown";
import MemoryGame from "./MemoryGame";
import Trivia from "./Trivia";
import Promodoro from "./Promodoro";
import Flashcard from "./Flashcard";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import Priorities from "./Priorities";
import "./Projects.css"; // Assuming CSS is in the same directory

const Projects = () => {
  const components = [
    "Calculator",
    "Expense",
    "Markdown",
    "Contact",
    "Habit",
    "DynamicForm",
    "Fitness",
    "MemoryGame",
    "Trivia",
    "Promodoro",
    "Flashcard",
    "Stopwatch",
    "Countdown",
    "Priorities",
  ];

  const [activeComponent, setActiveComponent] = useState(components[0]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Calculator":
        return <Calculator />;
      case "Expense":
        return <Expense />;
      case "Markdown":
        return <Markdown />;
      case "Contact":
        return <Contact />;
      case "Habit":
        return <Habit />;
      case "DynamicForm":
        return <DynamicForm />;
      case "Fitness":
        return <Fitness />;
      case "MemoryGame":
        return <MemoryGame />;
      case "Trivia":
        return <Trivia />;
      case "Promodoro":
        return <Promodoro />;
      case "Flashcard":
        return <Flashcard />;
      case "Stopwatch":
        return <Stopwatch />;
      case "Countdown":
        return <Countdown />;
      case "Priorities":
        return <Priorities />;
      default:
        return <div>Select a component</div>;
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
        <div className="sidebar" style={{backgroundColor:"#9DB309", color:"white" , MozUserFocus:"normal"}}>
          <h6  style={{backgroundColor:"#9DB309", color:"white"}} onClick={() => setSidebarVisible(false)}>▲ Hide Sidebar</h6>
          {components.map((component, index) => (
            <h6 key={index} onClick={() => setActiveComponent(component)}>
              {component}
            </h6>
          ))}
        </div>
      )}
      {!sidebarVisible && (
        <button style={{backgroundColor:"#9DB309", color:"white"}} className="show-sidebar-btn" onClick={() => setSidebarVisible(true)}>
          ▼ Show Sidebar
        </button>
      )}
      <div className="main-content " >
        {renderComponent()}
        <div className="navigation-buttons">
          <button style={{backgroundColor:"#9DB309", color:"white"}} onClick={goToPreviousComponent} className="btn btn-secondary">
            Previous
          </button>
          <button style={{backgroundColor:"#9DB309", color:"white"}} onClick={goToNextComponent} className="btn btn-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
=======
import { useState } from "react";
import Calculator from "./Calculator";
import Contact from "./Contact";
import DynamicForm from "./DynamicForm";
import Expense from "./Expense";
import Fitness from "./Fitness";
import Habit from "./Habit";
import Markdown from "./Markdown";
import MemoryGame from "./MemoryGame";
import Trivia from "./Trivia";
import Promodoro from "./Promodoro";
import Flashcard from "./Flashcard";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import Priorities from "./Priorities";
import "./Projects.css"; // Assuming CSS is in the same directory

const Projects = () => {
  const components = [
    "Calculator",
    "Expense",
    "Markdown",
    "Contact",
    "Habit",
    "DynamicForm",
    "Fitness",
    "MemoryGame",
    "Trivia",
    "Promodoro",
    "Flashcard",
    "Stopwatch",
    "Countdown",
    "Priorities",
  ];

  const [activeComponent, setActiveComponent] = useState(components[0]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Calculator":
        return <Calculator />;
      case "Expense":
        return <Expense />;
      case "Markdown":
        return <Markdown />;
      case "Contact":
        return <Contact />;
      case "Habit":
        return <Habit />;
      case "DynamicForm":
        return <DynamicForm />;
      case "Fitness":
        return <Fitness />;
      case "MemoryGame":
        return <MemoryGame />;
      case "Trivia":
        return <Trivia />;
      case "Promodoro":
        return <Promodoro />;
      case "Flashcard":
        return <Flashcard />;
      case "Stopwatch":
        return <Stopwatch />;
      case "Countdown":
        return <Countdown />;
      case "Priorities":
        return <Priorities />;
      default:
        return <div>Select a component</div>;
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
        <div className="sidebar" style={{backgroundColor:"#9DB309", color:"white" , MozUserFocus:"normal"}}>
          <h6  style={{backgroundColor:"#9DB309", color:"white"}} onClick={() => setSidebarVisible(false)}>▲ Hide Sidebar</h6>
          {components.map((component, index) => (
            <h6 key={index} onClick={() => setActiveComponent(component)}>
              {component}
            </h6>
          ))}
        </div>
      )}
      {!sidebarVisible && (
        <button style={{backgroundColor:"#9DB309", color:"white"}} className="show-sidebar-btn" onClick={() => setSidebarVisible(true)}>
          ▼ Show Sidebar
        </button>
      )}
      <div className="main-content " >
        {renderComponent()}
        <div className="navigation-buttons">
          <button style={{backgroundColor:"#9DB309", color:"white"}} onClick={goToPreviousComponent} className="btn btn-secondary">
            Previous
          </button>
          <button style={{backgroundColor:"#9DB309", color:"white"}} onClick={goToNextComponent} className="btn btn-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

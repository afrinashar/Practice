const concept= [
    {
      id: 1,
      title: "React Lifecycle Methods",
      description: "Lifecycle methods are hooks that allow you to run code at specific points in a component's life, such as mounting, updating, and unmounting.",
      example: `// Example of componentDidMount
  class ExampleComponent extends React.Component {
    componentDidMount() {
      console.log("Component mounted!");
    }
  
    render() {
      return <div>Hello, World!</div>;
    }
  }`,
    },
    {
      id: 2,
      title: "Higher-Order Components (HOCs)",
      description: "HOCs are functions that take a component and return a new component, allowing for code reuse and manipulation of props.",
      example: `// Example of a Higher-Order Component
  const withLoading = (WrappedComponent) => {
    return class extends React.Component {
      render() {
        return this.props.isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} />;
      }
    };
  }`,
    },
    {
      id: 3,
      title: "React Context API",
      description: "The Context API allows you to share state across the entire app without passing props down manually at every level.",
      example: `// Example of Context API
  const ThemeContext = React.createContext();
  
  class ThemedComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <div style={{ background: theme }}>Hello, World!</div>}
        </ThemeContext.Consumer>
      );
    }
  }`,
    },
    {
      id: 4,
      title: "React Hooks",
      description: "Hooks are functions that let you use state and other React features without writing a class.",
      example: `// Example of useState hook
  const Counter = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }`,
    },
    {
      id: 5,
      title: "Custom Hooks",
      description: "Custom Hooks are JavaScript functions whose names start with 'use' and can call other hooks.",
      example: `// Example of a Custom Hook
  const useFetch = (url) => {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    }, [url]);
  
    return data;
  }`,
    },
    {
      id: 6,
      title: "React Router",
      description: "React Router enables navigation between different components in a React application, maintaining UI in sync with the URL.",
      example: `// Example of React Router
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
  
  const App = () => (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )`,
    },
    {
      id: 7,
      title: "React.memo",
      description: "React.memo is a higher-order component that prevents unnecessary re-renders of a component by memoizing it.",
      example: `// Example of React.memo
  const MyComponent = React.memo(({ data }) => {
    return <div>{data}</div>;
  });`,
    },
    {
      id: 8,
      title: "React.lazy and Suspense",
      description: "React.lazy allows you to dynamically import components, while Suspense can show a fallback while the component is being loaded.",
      example: `// Example of React.lazy and Suspense
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  const App = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  )`,
    },
    {
      id: 9,
      title: "Error Boundaries",
      description: "Error Boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
      example: `// Example of Error Boundaries
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Error:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }`,
    },
    {
      id: 10,
      title: "Render Props",
      description: "Render Props is a technique for sharing code between React components using a prop that is a function.",
      example: `// Example of Render Props
  const DataProvider = ({ render }) => {
    const data = "Some data";
    return render(data);
  };
  
  const App = () => (
    <DataProvider render={(data) => <div>{data}</div>} />
  )`,
    },
    {
      id: 11,
      title: "React Fragment",
      description: "Fragments let you group a list of children without adding extra nodes to the DOM.",
      example: `// Example of React Fragment
  const List = () => (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  )`,
    },
    {
      id: 12,
      title: "Controlled Components",
      description: "A controlled component is an input element whose value is controlled by React state.",
      example: `// Example of Controlled Components
  const ControlledInput = () => {
    const [value, setValue] = React.useState("");
  
    return (
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    );
  }`,
    },
    {
      id: 13,
      title: "Uncontrolled Components",
      description: "Uncontrolled components store their own state internally and can be accessed using refs.",
      example: `// Example of Uncontrolled Components
  const UncontrolledInput = () => {
    const inputRef = React.useRef(null);
  
    const handleSubmit = () => {
      alert(inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }`,
    },
    {
      id: 14,
      title: "Portals",
      description: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
      example: `// Example of Portals
  const Modal = ({ children }) => {
    return ReactDOM.createPortal(
      <div className="modal">{children}</div>,
      document.getElementById('modal-root')
    );
  }`,
    },
    {
      id: 15,
      title: "React DevTools",
      description: "React DevTools is a browser extension for debugging React applications, allowing you to inspect the React component hierarchy.",
      example: `// Example of using React DevTools
  // Just install the React DevTools extension in your browser to use it.`,
    },
    {
      id: 16,
      title: "Optimizing Performance with useMemo",
      description: "The useMemo hook is used to memoize expensive calculations to improve performance.",
      example: `// Example of useMemo
  const ExpensiveComponent = ({ data }) => {
    const expensiveCalculation = React.useMemo(() => {
      return data.reduce((acc, val) => acc + val, 0);
    }, [data]);
  
    return <div>{expensiveCalculation}</div>;
  }`,
    },
    {
      id: 17,
      title: "Optimizing Performance with useCallback",
      description: "The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.",
      example: `// Example of useCallback
  const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
  
    const handleClick = React.useCallback(() => {
      console.log("Button clicked!");
    }, []);
  
    return <button onClick={handleClick}>Click me</button>;
  }`,
    },
    {
      id: 18,
      title: "Code Splitting",
      description: "Code splitting allows you to split your code into separate bundles, which can then be loaded on demand.",
      example: `// Example of Code Splitting using React.lazy
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  const App = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  )`,
    },
    {
      id: 19,
      title: "React Hooks for Form Handling",
      description: "Using hooks like useState and useEffect to manage form state and validation.",
      example: `// Example of Form Handling with Hooks
  const FormExample = () => {
    const [name, setName] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted name:", name);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
  }`,
    },
    {
      id: 20,
      title: "State Management with Redux",
      description: "Redux is a predictable state container for JavaScript apps, helping you manage global application state.",
      example: `// Example of Redux setup
  import { createStore } from 'redux';
  
  const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, item: action.payload };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);`,
    },
    {
      id: 21,
      title: "React Testing with Jest",
      description: "Jest is a testing framework that works well with React applications, allowing you to test components and logic.",
      example: `// Example of testing a component with Jest
  import { render, screen } from '@testing-library/react';
  import MyComponent from './MyComponent';
  
  test('renders learn react link', () => {
    render(<MyComponent />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });`,
    },
    {
      id: 22,
      title: "Styling Components with Styled Components",
      description: "Styled Components allows you to write actual CSS in your JavaScript, scoped to the component.",
      example: `// Example of Styled Components
  import styled from 'styled-components';
  
  const Button = styled.button\`
    background-color: blue;
    color: white;
    padding: 10px;
  \`;
  
  const App = () => <Button>Click Me!</Button>;`,
    },
    {
      id: 23,
      title: "React Transition Group",
      description: "React Transition Group is a library for managing transitions and animations when elements enter or leave the DOM.",
      example: `// Example of React Transition Group
  import { Transition } from 'react-transition-group';
  
  const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={200}>
      {state => <div className={state}>Fade me in/out!</div>}
    </Transition>
  );`,
    },
    {
      id: 24,
      title: "React Query",
      description: "React Query is a data-fetching library that simplifies server state management in React applications.",
      example: `// Example of React Query
  import { useQuery } from 'react-query';
  
  const fetchUser = async () => {
    const response = await fetch('/api/user');
    return response.json();
  };
  
  const User = () => {
    const { data, error, isLoading } = useQuery('user', fetchUser);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching user data.</div>;
  
    return <div>{data.name}</div>;
  }`,
    },
    {
      id: 25,
      title: "React Hook Form",
      description: "React Hook Form is a library that simplifies form handling in React applications with minimal re-renders.",
      example: `// Example of React Hook Form
  import { useForm } from 'react-hook-form';
  
  const MyForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input type="submit" />
      </form>
    );
  }`,
    },
    {
      id: 26,
      title: "React Hook for Debouncing",
      description: "A custom hook to debounce a value, preventing it from updating too frequently.",
      example: `// Example of a debounce hook
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
  
    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }`,
    },
    {
      id: 27,
      title: "Using refs for DOM Manipulation",
      description: "Refs provide a way to access DOM nodes directly and can be useful for animations, focus management, and more.",
      example: `// Example of using refs
  const TextInput = () => {
    const inputRef = React.useRef();
  
    const focusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }`,
    },
    {
      id: 28,
      title: "Memoization with useMemo and useCallback",
      description: "These hooks help you optimize performance by memorizing values and functions to prevent unnecessary re-renders.",
      example: `// Example of useMemo and useCallback
  const Parent = () => {
    const [count, setCount] = React.useState(0);
  
    const memoizedValue = React.useMemo(() => computeExpensiveValue(count), [count]);
    const memoizedCallback = React.useCallback(() => {
      doSomething(count);
    }, [count]);
  
    return (
      <Child value={memoizedValue} onClick={memoizedCallback} />
    );
  }`,
    },
    {
      id: 29,
      title: "Dynamic Imports",
      description: "Dynamic imports allow you to load components or libraries on demand, which can improve performance.",
      example: `// Example of dynamic import
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  const App = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  )`,
    },
    {
      id: 30,
      title: "Handling Events in React",
      description: "Handling events in React is done using camelCase syntax and passing functions as event handlers.",
      example: `// Example of handling events
  const Button = () => {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return <button onClick={handleClick}>Click Me</button>;
  }`,
    },
    {
      id: 31,
      title: "Using Context for Theming",
      description: "Using React Context to provide theme settings across your application.",
      example: `// Example of theming with Context
  const ThemeContext = React.createContext('light');
  
  const App = () => {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  };
  
  const Toolbar = () => (
    <ThemeContext.Consumer>
      {theme => <div style={{ background: theme }}>Toolbar</div>}
    </ThemeContext.Consumer>
  );`,
    },
    {
      id: 32,
      title: "UseEffect for Data Fetching",
      description: "Using useEffect to fetch data when a component mounts.",
      example: `// Example of data fetching in useEffect
  const DataFetchingComponent = () => {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    return <div>{data ? data : 'Loading...'}</div>;
  }`,
    },
    {
      id: 33,
      title: "UseReducer for State Management",
      description: "The useReducer hook is an alternative to useState for complex state management.",
      example: `// Example of useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  
  const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
    );
  }`,
    },
    {
      id: 34,
      title: "Building Forms with Formik",
      description: "Formik is a popular library for building forms in React with validation.",
      example: `// Example of Formik
  import { Formik, Form, Field } from 'formik';
  
  const MyForm = () => (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )`,
    },
    {
      id: 35,
      title: "Using Axios for HTTP Requests",
      description: "Axios is a promise-based HTTP client for the browser and Node.js.",
      example: `// Example of using Axios
  import axios from 'axios';
  
  const fetchData = async () => {
    const response = await axios.get('/api/data');
    console.log(response.data);
  };
  
  fetchData();`,
    },
    {
      id: 36,
      title: "Handling Multiple Inputs in Forms",
      description: "Handling multiple input fields using a single state object.",
      example: `// Example of handling multiple inputs
  const MyForm = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <form>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }`,
    },
    {
      id: 37,
      title: "Client-Side Routing with React Router",
      description: "React Router is a standard library for routing in React applications.",
      example: `// Example of React Router
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
  const App = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )`,
    },
    {
      id: 38,
      title: "Custom Hooks in React",
      description: "Creating reusable logic using custom hooks.",
      example: `// Example of a custom hook
  const useFetch = (url) => {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      };
  
      fetchData();
    }, [url]);
  
    return data;
  }`,
    },
    {
      id: 39,
      title: "React Performance Optimization Techniques",
      description: "Techniques to optimize the performance of your React applications.",
      example: `// Example of performance optimization
  const ExpensiveComponent = React.memo(({ data }) => {
    // Only re-renders if data changes
    return <div>{data}</div>;
  });`,
    },
    {
      id: 40,
      title: "Using the useLayoutEffect Hook",
      description: "The useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations.",
      example: `// Example of useLayoutEffect
  const Component = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useLayoutEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return <div>Width: {width}</div>;
  }`,
    },
    {
      id: 41,
      title: "Using useImperativeHandle with Forward Ref",
      description: "useImperativeHandle allows you to customize the instance value that is exposed when using ref.",
      example: `// Example of useImperativeHandle
  import React, { useImperativeHandle, forwardRef } from 'react';
  
  const FancyInput = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      focus: () => {
        // Focus the input
      },
    }));
  
    return <input />;
  });`,
    },
    {
      id: 42,
      title: "React Fragments",
      description: "React Fragments let you group a list of children without adding extra nodes to the DOM.",
      example: `// Example of React Fragments
  const App = () => (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>World</h2>
    </React.Fragment>
  )`,
    },
    {
      id: 43,
      title: "Controlled vs Uncontrolled Components",
      description: "Controlled components are managed by React state, while uncontrolled components store their own state internally.",
      example: `// Example of controlled and uncontrolled components
  const ControlledComponent = () => {
    const [value, setValue] = React.useState('');
  
    return (
      <input value={value} onChange={e => setValue(e.target.value)} />
    );
  };
  
  const UncontrolledComponent = () => {
    const inputRef = React.useRef();
  
    const handleSubmit = () => {
      alert(inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  };`,
    },
    {
      id: 44,
      title: "Using the Context API for State Management",
      description: "The Context API allows you to share state across your application without prop drilling.",
      example: `// Example of Context API
  const MyContext = React.createContext();
  
  const App = () => {
    return (
      <MyContext.Provider value="some value">
        <Child />
      </MyContext.Provider>
    );
  };
  
  const Child = () => {
    const value = React.useContext(MyContext);
    return <div>{value}</div>;
  }`,
    },
    {
      id: 45,
      title: "React Hooks for Lifecycle Management",
      description: "Using hooks to manage component lifecycle events.",
      example: `// Example of lifecycle management with hooks
  const MyComponent = () => {
    React.useEffect(() => {
      // Component did mount
  
      return () => {
        // Component will unmount
      };
    }, []);
  };`,
    },
    {
      id: 46,
      title: "Using CSS Modules for Scoped Styles",
      description: "CSS Modules help you write CSS that is scoped locally to the component.",
      example: `// Example of CSS Modules
  import styles from './MyComponent.module.css';
  
  const MyComponent = () => <div className={styles.myClass}>Hello</div>;`,
    },
    {
      id: 47,
      title: "Handling Form Validation",
      description: "Handling form validation using a library like Yup.",
      example: `// Example of form validation with Yup
  import * as Yup from 'yup';
  
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });`,
    },
    {
      id: 48,
      title: "Conditional Rendering in React",
      description: "Conditional rendering allows you to render different components or elements based on a condition.",
      example: `// Example of conditional rendering
  const MyComponent = ({ isLoggedIn }) => {
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>;
  };`,
    },
    {
      id: 49,
      title: "Using Tailwind CSS in React",
      description: "Tailwind CSS is a utility-first CSS framework that can be used with React.",
      example: `// Example of Tailwind CSS
  const MyComponent = () => (
    <div className="p-4 bg-blue-500 text-white">
      Hello, Tailwind!
    </div>
  )`,
    },
    {
      id: 50,
      title: "Integrating Google Maps in React",
      description: "Integrate Google Maps into your React application using a library like @react-google-maps/api.",
      example: `// Example of Google Maps integration
  import { GoogleMap, LoadScript } from '@react-google-maps/api';
  
  const MyMapComponent = () => (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        id="example-map"
        mapContainerStyle={{ height: "400px", width: "800px" }}
        zoom={10}
        center={{ lat: -34.397, lng: 150.644 }}
      />
    </LoadScript>
  )`,
    },
    {
      id: 51,
      title: "Using Redux Toolkit",
      description: "Redux Toolkit is a library that simplifies the process of writing Redux logic.",
      example: `// Example of using Redux Toolkit
  import { configureStore, createSlice } from '@reduxjs/toolkit';
  
  const slice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: state => { state.value += 1; },
      decrement: state => { state.value -= 1; },
    },
  });
  
  const store = configureStore({ reducer: slice.reducer });`,
    },

    {
        id: 52,
        title: "Higher-Order Components (HOCs)",
        description: "HOCs are functions that take a component and return a new component, often used for code reuse.",
        example: `// Example of a Higher-Order Component
    const withLogging = (WrappedComponent) => {
      return (props) => {
        console.log('Rendering:', WrappedComponent.name);
        return <WrappedComponent {...props} />;
      };
    };`,
      },
      {
        id: 53,
        title: "React.lazy and Suspense",
        description: "Use React.lazy to dynamically import components, wrapped with Suspense for loading fallback UI.",
        example: `// Example of React.lazy and Suspense
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    const App = () => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    );`,
      },
      {
        id: 54,
        title: "Error Boundaries",
        description: "Error boundaries catch JavaScript errors in their child component tree and display a fallback UI.",
        example: `// Example of an error boundary
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        console.log(error, info);
      }
    
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
      }
    }`,
      },
      {
        id: 55,
        title: "Context API with Multiple Contexts",
        description: "Using multiple contexts to manage different pieces of state across your application.",
        example: `// Example of multiple contexts
    const AuthContext = React.createContext();
    const ThemeContext = React.createContext();
    
    const App = () => (
      <AuthContext.Provider value={authValue}>
        <ThemeContext.Provider value={themeValue}>
          <Main />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );`,
      },
      {
        id: 56,
        title: "React Portals",
        description: "Portals allow you to render a child into a different DOM node outside the parent hierarchy.",
        example: `// Example of a portal
    import ReactDOM from 'react-dom';
    
    const Modal = ({ isOpen, onClose }) => {
      if (!isOpen) return null;
    
      return ReactDOM.createPortal(
        <div className="modal">
          <button onClick={onClose}>Close</button>
        </div>,
        document.getElementById('modal-root')
      );
    };`,
      },
      {
        id: 57,
        title: "React.memo for Performance Optimization",
        description: "React.memo is a higher-order component that memoizes the result of a component to avoid unnecessary re-renders.",
        example: `// Example of React.memo
    const MyComponent = React.memo(({ value }) => {
      return <div>{value}</div>;
    });`,
      },
      {
        id: 58,
        title: "Dynamic Imports in React",
        description: "Dynamically importing modules to improve initial load time.",
        example: `// Example of dynamic import
    const MyComponent = () => {
      const [Component, setComponent] = React.useState(null);
    
      const loadComponent = async () => {
        const { default: ImportedComponent } = await import('./ImportedComponent');
        setComponent(() => ImportedComponent);
      };
    
      return (
        <div>
          <button onClick={loadComponent}>Load Component</button>
          {Component && <Component />}
        </div>
      );
    };`,
      },
      {
        id: 59,
        title: "Styling with Emotion",
        description: "Emotion is a library for writing CSS styles with JavaScript.",
        example: `// Example of styling with Emotion
    /** @jsxImportSource @emotion/react */
    import { css } from '@emotion/react';
    
    const MyComponent = () => {
      return <div css={css"color: hotpink;"}>Hello, Emotion!</div>;
    };`,
      },
      {
        id: 60,
        title: "React Hook Form for Form Management",
        description: "React Hook Form is a library for managing forms in React using hooks.",
        example: `// Example of React Hook Form
    import { useForm } from 'react-hook-form';
    
    const MyForm = () => {
      const { register, handleSubmit } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} />
          <button type="submit">Submit</button>
        </form>
      );
    };`,
      },
      {
        id: 61,
        title: "Memoization with useMemo Hook",
        description: "useMemo allows you to memoize expensive calculations to avoid unnecessary recalculations.",
        example: `// Example of useMemo
    const ExpensiveComponent = ({ items }) => {
      const sortedItems = React.useMemo(() => {
        return items.sort();
      }, [items]);
    
      return <ul>{sortedItems.map(item => <li key={item}>{item}</li>)}</ul>;
    };`,
      },
      {
        id: 62,
        title: "Form Handling with Formik",
        description: "Formik is a library for building forms in React with easy validation.",
        example: `// Example of Formik
    import { Formik, Form, Field } from 'formik';
    
    const MyForm = () => (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => console.log(values)}
      >
        {() => (
          <Form>
            <Field name="name" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );`,
      },
      {
        id: 63,
        title: "React Testing Library",
        description: "A library for testing React components using the DOM.",
        example: `// Example of React Testing Library
    import { render, screen } from '@testing-library/react';
    import MyComponent from './MyComponent';
    
    test('renders hello world', () => {
      render(<MyComponent />);
      const linkElement = screen.getByText(/hello world/i);
      expect(linkElement).toBeInTheDocument();
    });`,
      },
      {
        id: 64,
        title: "Controlled vs Uncontrolled Form Components",
        description: "Controlled components are controlled by React state, while uncontrolled components manage their own state.",
        example: `// Example of controlled vs uncontrolled components
    const ControlledComponent = () => {
      const [value, setValue] = React.useState('');
    
      return <input value={value} onChange={e => setValue(e.target.value)} />;
    };
    
    const UncontrolledComponent = () => {
      const inputRef = React.useRef();
    
      return (
        <form>
          <input ref={inputRef} />
          <button onClick={() => alert(inputRef.current.value)}>Submit</button>
        </form>
      );
    };`,
      },
      {
        id: 65,
        title: "React DevTools for Debugging",
        description: "React DevTools is a Chrome/Firefox extension for debugging React applications.",
        example: `// Usage example, no code needed
    // Use React DevTools to inspect components and view their props and state.`,
      },
      {
        id: 66,
        title: "Use of TypeScript in React",
        description: "TypeScript adds static typing to JavaScript, enhancing React applications with type safety.",
        example: `// Example of TypeScript with React
    interface MyComponentProps {
      title: string;
    }
    
    const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
      return <h1>{title}</h1>;
    };`,
      },
      {
        id: 67,
        title: "Managing Side Effects with useEffect",
        description: "The useEffect hook is used to manage side effects in function components.",
        example: `// Example of useEffect
    const MyComponent = () => {
      React.useEffect(() => {
        console.log('Component mounted');
        return () => {
          console.log('Component unmounted');
        };
      }, []);
    
      return <div>Hello, World!</div>;
    };`,
      },
      {
        id: 68,
        title: "Using Axios for API Calls",
        description: "Axios is a promise-based HTTP client for making API requests.",
        example: `// Example of using Axios
    import axios from 'axios';
    
    const fetchData = async () => {
      const response = await axios.get('https://api.example.com/data');
      console.log(response.data);
    };`,
      },
      {
        id: 69,
        title: "React-Router-Dom for Client-Side Routing",
        description: "React Router DOM is used for navigating between different components in React applications.",
        example: `// Example of React Router DOM
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    
    const App = () => (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );`,
      },
      {
        id: 70,
        title: "Handling Keyboard Events",
        description: "Using keyboard events to trigger actions within components.",
        example: `// Example of keyboard events
    const MyComponent = () => {
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed');
        }
      };
    
      return <input onKeyDown={handleKeyDown} />;
    };`,
      },
      {
        id: 71,
        title: "Throttling and Debouncing in React",
        description: "Throttling and debouncing techniques help manage event handlers for better performance.",
        example: `// Example of debouncing
    const useDebounce = (value, delay) => {
      const [debouncedValue, setDebouncedValue] = React.useState(value);
    
      React.useEffect(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
    
        return () => {
          clearTimeout(handler);
        };
      }, [value, delay]);
    
      return debouncedValue;
    };`,
      },
      {
        id: 72,
        title: "CSS Modules for Scoped Styles",
        description: "CSS Modules allow you to write modular and reusable CSS with scoped class names.",
        example: `// Example of CSS Modules
    import styles from './MyComponent.module.css';
    
    const MyComponent = () => {
      return <div className={styles.container}>Hello, CSS Modules!</div>;
    };`,
      },
      {
        id: 73,
        title: "React Refs for Accessing DOM Elements",
        description: "Refs provide a way to access DOM nodes or React elements created in the render method.",
        example: `// Example of refs
    const MyComponent = () => {
      const inputRef = React.useRef(null);
    
      const focusInput = () => {
        inputRef.current.focus();
      };
    
      return (
        <div>
          <input ref={inputRef} />
          <button onClick={focusInput}>Focus Input</button>
        </div>
      );
    };`,
      },
      {
        id: 74,
        title: "Custom Hooks for Reusable Logic",
        description: "Custom hooks allow you to extract component logic into reusable functions.",
        example: `// Example of a custom hook
    const useCounter = (initialValue = 0) => {
      const [count, setCount] = React.useState(initialValue);
      const increment = () => setCount(c => c + 1);
      return { count, increment };
    };`,
      },
      {
        id: 75,
        title: "Using WebSockets for Real-Time Communication",
        description: "WebSockets allow for real-time communication between the client and server.",
        example: `// Example of using WebSockets
    const useWebSocket = (url) => {
      const [data, setData] = React.useState(null);
      
      React.useEffect(() => {
        const socket = new WebSocket(url);
        socket.onmessage = (event) => setData(event.data);
    
        return () => socket.close();
      }, [url]);
    
      return data;
    };`,
      },
      {
        id: 76,
        title: "SVG Icons in React",
        description: "Using SVG files as components for icons in React applications.",
        example: `// Example of using SVG as a component
    import { ReactComponent as MyIcon } from './icon.svg';
    
    const MyComponent = () => {
      return <MyIcon />;
    };`,
      },
      {
        id: 77,
        title: "React Fragments for Grouping Elements",
        description: "Fragments allow you to group multiple elements without adding extra nodes to the DOM.",
        example: `// Example of React Fragments
    const MyComponent = () => (
      <>
        <h1>Title</h1>
        <p>Description</p>
      </>
    );`,
      },
      {
        id: 78,
        title: "React Performance Optimization with useCallback",
        description: "The useCallback hook memoizes a function to prevent unnecessary re-creations.",
        example: `// Example of useCallback
    const MyComponent = () => {
      const handleClick = React.useCallback(() => {
        console.log('Button clicked');
      }, []);
    
      return <button onClick={handleClick}>Click me</button>;
    };`,
      },
      {
        id: 79,
        title: "Building Custom Select Components",
        description: "Creating reusable select components to handle custom options.",
        example: `// Example of a custom select component
    const CustomSelect = ({ options, onChange }) => {
      const [isOpen, setIsOpen] = React.useState(false);
      const [selected, setSelected] = React.useState(options[0]);
    
      const toggleDropdown = () => setIsOpen(!isOpen);
      const selectOption = (option) => {
        setSelected(option);
        onChange(option);
        setIsOpen(false);
      };
    
      return (
        <div>
          <button onClick={toggleDropdown}>{selected}</button>
          {isOpen && (
            <ul>
              {options.map(option => (
                <li key={option} onClick={() => selectOption(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };`,
      },
      {
        id: 80,
        title: "Progressive Web Apps (PWA) with React",
        description: "Creating PWAs using React for offline capabilities and enhanced performance.",
        example: `// Example of creating a PWA
    // Use Create React App with --template cra-template-pwa to set up a PWA easily.`,
      },
      {
        id: 81,
        title: "Responsive Design with React",
        description: "Implementing responsive design in React components using CSS media queries.",
        example: `// Example of responsive design
    const MyComponent = () => (
      <div style={{ 
        width: '100%', 
        padding: '20px', 
        background: 'lightgray', 
        '@media (max-width: 600px)': { 
          background: 'pink' 
        } 
      }}>
        Responsive Component
      </div>
    );`,
      },
      {
        id: 82,
        title: "React Animation Libraries (React Spring, Framer Motion)",
        description: "Using animation libraries to add animations and transitions in React applications.",
        example: `// Example of Framer Motion
    import { motion } from 'framer-motion';
    
    const MyComponent = () => (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Animated Component
      </motion.div>
    );`,
      },
      {
        id: 83,
        title: "Server-Side Rendering (SSR) with Next.js",
        description: "Using Next.js to implement server-side rendering in React applications.",
        example: `// Example of Next.js page component
    import React from 'react';
    
    const Page = () => {
      return <div>Hello, SSR!</div>;
    };
    
    export default Page;`,
      },
      {
        id: 84,
        title: "Static Site Generation (SSG) with Next.js",
        description: "Using Next.js to implement static site generation for pre-rendering pages.",
        example: `// Example of Next.js static generation
    export async function getStaticProps() {
      const data = await fetchData();
      return { props: { data } };
    }
    
    const Page = ({ data }) => {
      return <div>{data}</div>;
    };`,
      },
      {
        id: 85,
        title: "Localization and Internationalization in React",
        description: "Implementing localization in React applications using libraries like react-i18next.",
        example: `// Example of react-i18next
    import { useTranslation } from 'react-i18next';
    
    const MyComponent = () => {
      const { t } = useTranslation();
    
      return <div>{t('welcome_message')}</div>;
    };`,
      },
      {
        id: 86,
        title: "React Native for Mobile Development",
        description: "Using React Native to build mobile applications with React.",
        example: `// Example of a React Native component
    import { View, Text } from 'react-native';
    
    const MyComponent = () => (
      <View>
        <Text>Hello, React Native!</Text>
      </View>
    );`,
      },
      {
        id: 87,
        title: "Using GraphQL with Apollo Client",
        description: "Integrating GraphQL APIs in React applications using Apollo Client.",
        example: `// Example of Apollo Client
    import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
    
    const client = new ApolloClient({
      uri: 'https://api.example.com/graphql',
      cache: new InMemoryCache(),
    });
    
    const App = () => (
      <ApolloProvider client={client}>
        <MyComponent />
      </ApolloProvider>
    );`,
      },
      {
        id: 88,
        title: "Using Redux Toolkit for State Management",
        description: "Using Redux Toolkit to simplify Redux store setup and state management.",
        example: `// Example of Redux Toolkit
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './counterSlice';
    
    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });`,
      },
      {
        id: 89,
        title: "Integrating React with Backend APIs",
        description: "Connecting React applications with backend services using Axios or Fetch API.",
        example: `// Example of integrating with a backend API
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    };`,
      },
      {
        id: 90,
        title: "Using SWR for Data Fetching",
        description: "SWR is a React Hooks library for data fetching with caching and revalidation.",
        example: `// Example of using SWR
    import useSWR from 'swr';
    
    const fetcher = (url) => fetch(url).then(res => res.json());
    
    const MyComponent = () => {
      const { data, error } = useSWR('/api/data', fetcher);
    
      if (error) return <div>Error loading data</div>;
      if (!data) return <div>Loading...</div>;
    
      return <div>{data.message}</div>;
    };`,
      },
      {
        id: 91,
        title: "Using TypeScript with React",
        description: "Integrating TypeScript for type safety in React applications.",
        example: `// Example of TypeScript with React
    interface MyComponentProps {
      title: string;
    }
    
    const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
      return <h1>{title}</h1>;
    };`,
      },
      {
        id: 92,
        title: "Building Progressive Enhancement in React",
        description: "Implementing progressive enhancement to ensure functionality in various environments.",
        example: `// Example of progressive enhancement
    const MyComponent = () => {
      return <div>{window.navigator.onLine ? 'Online' : 'Offline'}</div>;
    };`,
      },
      {
        id: 93,
        title: "Error Boundaries for Error Handling",
        description: "Using error boundaries to catch errors in React components.",
        example: `// Example of an error boundary
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
    };`,
      },
      {
        id: 94,
        title: "Using Context API for Global State Management",
        description: "Using Context API to manage global state in a React application.",
        example: `// Example of Context API
    const MyContext = React.createContext();
    
    const MyProvider = ({ children }) => {
      const [state, setState] = React.useState('default');
    
      return (
        <MyContext.Provider value={{ state, setState }}>
          {children}
        </MyContext.Provider>
      );
    };
    
    const MyComponent = () => {
      const { state } = React.useContext(MyContext);
      return <div>{state}</div>;
    };`,
      },
      {
        id: 95,
        title: "Using React Router for Navigation",
        description: "Implementing client-side routing using React Router.",
        example: `// Example of React Router
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    
    const App = () => (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );`,
      },
      {
        id: 96,
        title: "Using Hooks for Lifecycle Methods",
        description: "Using the useEffect hook to mimic lifecycle methods in functional components.",
        example: `// Example of useEffect
    const MyComponent = () => {
      React.useEffect(() => {
        console.log('Component mounted');
    
        return () => {
          console.log('Component unmounted');
        };
      }, []);
    
      return <div>My Component</div>;
    };`,
      },
      {
        id: 97,
        title: "Handling Form State with Formik",
        description: "Using Formik for managing form state and validation in React applications.",
        example: `// Example of using Formik
    import { Formik, Form, Field } from 'formik';
    
    const MyForm = () => (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );`,
      },
      {
        id: 98,
        title: "Using Styled Components for CSS-in-JS",
        description: "Creating styled components for modular and dynamic styling.",
        example: `"// Example of styled-components
    import styled from 'styled-components';
    
    const Button = styled.button 
      background: blue;
      color: white;"
     "const MyComponent = () => <Button>Click me</Button>; ,"`
      },
      {
        id: 99,
        title: "Using React Testing Library for Testing",
        description: "Testing React components using React Testing Library.",
        example: `// Example of testing with React Testing Library
    import { render, screen } from '@testing-library/react';
    import MyComponent from './MyComponent';
    
    test('renders MyComponent', () => {
      render(<MyComponent />);
      const linkElement = screen.getByText(/hello/i);
      expect(linkElement).toBeInTheDocument();
    });`,
      },
      {
        id: 100,
        title: "Using Web Workers in React",
        description: "Leveraging Web Workers to run heavy computations in the background.",
        example: `// Example of using Web Workers
    const MyComponent = () => {
      const worker = new Worker('worker.js');
    
      worker.onmessage = (event) => {
        console.log(event.data);
      };
    
      return <div>Worker Example</div>;
    };`,
      },
      {
        id: 101,
        title: "React Suspense for Data Fetching",
        description: "Using React Suspense to handle asynchronous data fetching.",
        example: `// Example of React Suspense
    const MyComponent = () => {
      const resource = createResource(); // Assume createResource fetches data
    
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <DataDisplay resource={resource} />
        </React.Suspense>
      );
    };`,
      },
      {
        id: 102,
        title: "Custom Hooks for Reusable Logic",
        description: "Creating custom hooks to encapsulate reusable logic.",
        example: `// Example of a custom hook
    const useFetch = (url) => {
      const [data, setData] = React.useState(null);
      const [loading, setLoading] = React.useState(true);
    
      React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
          setLoading(false);
        };
    
        fetchData();
      }, [url]);
    
      return { data, loading };
    };
    
    const MyComponent = () => {
      const { data, loading } = useFetch('/api/data');
    
      if (loading) return <div>Loading...</div>;
      return <div>{data.message}</div>;
    };`,
      },
      {
        id: 103,
        title: "Using React.memo for Performance Optimization",
        description: "Optimizing component rendering using React.memo.",
        example: `// Example of React.memo
    const MyComponent = React.memo(({ value }) => {
      console.log('Rendering MyComponent');
      return <div>{value}</div>;
    });
    
    // Usage
    <MyComponent value="Hello" />;`,
      },
      {
        id: 104,
        title: "Using useRef for DOM Manipulation",
        description: "Utilizing useRef to directly interact with DOM elements.",
        example: `// Example of useRef
    const MyComponent = () => {
      const inputRef = React.useRef(null);
    
      const focusInput = () => {
        inputRef.current.focus();
      };
    
      return (
        <>
          <input ref={inputRef} type="text" />
          <button onClick={focusInput}>Focus Input</button>
        </>
      );
    };`,
      },
      {
        id: 105,
        title: "Using useReducer for Complex State Management",
        description: "Managing complex state with useReducer instead of useState.",
        example: `// Example of useReducer
    const initialState = { count: 0 };
    
    const reducer = (state, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    };
    
    const MyComponent = () => {
      const [state, dispatch] = React.useReducer(reducer, initialState);
    
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
      );
    };`,
      },
      {
        id: 106,
        title: "Using React Fragments for Grouping",
        description: "Using React fragments to group elements without adding extra nodes.",
        example: `// Example of React fragments
    const MyComponent = () => (
      <>
        <h1>Title</h1>
        <p>Description</p>
      </>
    );`,
      },
      {
        id: 107,
        title: "Using useCallback for Memoizing Functions",
        description: "Memoizing callback functions to prevent unnecessary re-renders.",
        example: `// Example of useCallback
    const MyComponent = () => {
      const [count, setCount] = React.useState(0);
    
      const increment = React.useCallback(() => {
        setCount((c) => c + 1);
      }, []);
    
      return (
        <div>
          Count: {count}
          <button onClick={increment}>Increment</button>
        </div>
      );
    };`,
      },
      {
        id: 108,
        title: "Using useLayoutEffect for Synchronous Effects",
        description: "Using useLayoutEffect to perform side effects synchronously.",
        example: `// Example of useLayoutEffect
    const MyComponent = () => {
      const [width, setWidth] = React.useState(window.innerWidth);
    
      React.useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return <div>Width: {width}</div>;
    };`,
      },
      {
        id: 109,
        title: "Using Dynamic Imports for Code Splitting",
        description: "Implementing dynamic imports for code splitting in React applications.",
        example: `// Example of dynamic imports
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    const MyComponent = () => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    );`,
      },
      {
        id: 110,
        title: "Implementing Server-Side Rendering with Next.js",
        description: "Using Next.js for server-side rendering in React applications.",
        example: `// Example of server-side rendering in Next.js
    import { useEffect } from 'react';
    
    const Home = ({ data }) => {
      useEffect(() => {
        console.log(data);
      }, [data]);
    
      return <div>{data}</div>;
    };
    
    export async function getServerSideProps() {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
    
      return { props: { data } };
    }
    
    export default Home;`,
      },
      {
        id: 111,
        title: "Using PropTypes for Prop Validation",
        description: "Using PropTypes to validate props passed to components.",
        example: `// Example of PropTypes
    import PropTypes from 'prop-types';
    
    const MyComponent = ({ title }) => <h1>{title}</h1>;
    
    MyComponent.propTypes = {
      title: PropTypes.string.isRequired,
    };`,
      },
      {
        id: 112,
        title: "Handling API Requests with Axios",
        description: "Using Axios for making HTTP requests in React applications.",
        example: `// Example of using Axios
    import axios from 'axios';
    
    const MyComponent = () => {
      const fetchData = async () => {
        const response = await axios.get('/api/data');
        console.log(response.data);
      };
    
      React.useEffect(() => {
        fetchData();
      }, []);
    
      return <div>Data fetched</div>;
    };`,
      },
      {
        id: 113,
        title: "Using Redux for State Management",
        description: "Integrating Redux for managing global state in React applications.",
        example: `// Example of using Redux
    import { createStore } from 'redux';
    import { Provider, useSelector, useDispatch } from 'react-redux';
    
    const initialState = { count: 0 };
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        default:
          return state;
      }
    };
    
    const store = createStore(reducer);
    
    const MyComponent = () => {
      const count = useSelector(state => state.count);
      const dispatch = useDispatch();
    
      return (
        <>
          Count: {count}
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </>
      );
    };
    
    const App = () => (
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );`,
      },
      {
        id: 114,
        title: "Using React Query for Data Fetching",
        description: "Using React Query for managing server state and caching data.",
        example: `// Example of React Query
    import { useQuery } from 'react-query';
    
    const MyComponent = () => {
      const { data, error, isLoading } = useQuery('data', () => fetch('/api/data').then(res => res.json()));
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading data</div>;
    
      return <div>{data.message}</div>;
    };`,
      },
      {
        id: 115,
        title: "Using Local Storage with useEffect",
        description: "Persisting state in local storage using useEffect.",
        example: `// Example of local storage
    const MyComponent = () => {
      const [value, setValue] = React.useState(() => localStorage.getItem('myValue') || '');
    
      React.useEffect(() => {
        localStorage.setItem('myValue', value);
      }, [value]);
    
      return (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      );
    };`,
      },
      {
        id: 116,
        title: "Creating Higher-Order Components (HOCs)",
        description: "Creating HOCs to share common functionality between components.",
        example: `// Example of a Higher-Order Component
    const withLoading = (WrappedComponent) => {
      return ({ isLoading, ...props }) => {
        return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
      };
    };
    
    const MyComponent = withLoading(({ data }) => <div>{data}</div>);`,
      },
      {
        id: 117,
        title: "Using React DevTools for Debugging",
        description: "Leveraging React DevTools to inspect component hierarchies and props.",
        example: `// No code example; React DevTools is used in the browser for debugging.`,
      },
      {
        id: 118,
        title: "Implementing Responsive Design with Media Queries",
        description: "Using CSS media queries in React for responsive design.",
        example: `// Example of media queries in styled-components
    import styled from 'styled-components';
    
    const Container = styled.div\`
      @media (max-width: 600px) {
        background-color: lightblue;
      }
    \`;
    
    const MyComponent = () => <Container>Responsive Container</Container>;`,
      },
      {
        id: 119,
        title: "Handling Click Outside with useRef",
        description: "Detecting clicks outside a component using useRef.",
        example: `// Example of detecting clicks outside
    const MyComponent = () => {
      const ref = React.useRef();
    
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log('Clicked outside!');
        }
      };
    
      React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      return <div ref={ref}>Click outside this box</div>;
    };`,
      },
      {
        id: 120,
        title: "Using useImperativeHandle for Parent Interaction",
        description: "Customizing the instance value of a child component using useImperativeHandle.",
        example: `// Example of useImperativeHandle
    const MyInput = React.forwardRef((props, ref) => {
      const inputRef = React.useRef();
    
      React.useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        },
      }));
    
      return <input ref={inputRef} />;
    });
    
    const Parent = () => {
      const inputRef = React.useRef();
    
      return (
        <>
          <MyInput ref={inputRef} />
          <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </>
      );
    };`,
      },
      {
        id: 121,
        title: "Using Portals for Modals and Tooltips",
        description: "Rendering children into a DOM node outside the parent component using React Portals.",
        example: `// Example of using Portals
    const Modal = ({ children }) => {
      return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.getElementById('modal-root')
      );
    };
    
    const MyComponent = () => {
      return (
        <>
          <h1>My Component</h1>
          <Modal>
            <h2>Modal Content</h2>
          </Modal>
        </>
      );
    };`,
      },
      {
        id: 122,
        title: "Using useContext for Theming",
        description: "Creating a theme context to manage global theming.",
        example: `// Example of theming with useContext
    const ThemeContext = React.createContext('light');
    
    const ThemedComponent = () => {
      const theme = React.useContext(ThemeContext);
      return <div className={theme}>Themed Component</div>;
    };
    
    const App = () => (
      <ThemeContext.Provider value="dark">
        <ThemedComponent />
      </ThemeContext.Provider>
    );`,
      },
      {
        id: 123,
        title: "Using React Hook Form for Form Handling",
        description: "Managing form state with React Hook Form for better performance.",
        example: `// Example of using React Hook Form
    import { useForm } from 'react-hook-form';
    
    const MyForm = () => {
      const { register, handleSubmit } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      );
    };`,
      },
      {
        id: 124,
        title: "Optimizing Performance with React.lazy",
        description: "Code-splitting with React.lazy to optimize performance.",
        example: `// Example of React.lazy
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    const MyComponent = () => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    );`,
      },
      {
        id: 125,
        title: "Using CSS Modules for Scoped Styles",
        description: "Implementing CSS Modules for scoped and modular styles.",
        example: `// Example of CSS Modules
    import styles from './MyComponent.module.css';
    
    const MyComponent = () => <div className={styles.container}>Scoped Styles</div>;`,
      },
      {
        id: 126,
        title: "Implementing Infinite Scroll with Intersection Observer",
        description: "Using Intersection Observer to implement infinite scrolling.",
        example: `// Example of infinite scroll with Intersection Observer
    const MyComponent = () => {
      const [items, setItems] = React.useState([]);
    
      const loadMore = (entries) => {
        if (entries[0].isIntersecting) {
          setItems((prev) => [...prev, ...newItems]);
        }
      };
    
      React.useEffect(() => {
        const observer = new IntersectionObserver(loadMore);
        observer.observe(document.querySelector('#load-more'));
    
        return () => observer.disconnect();
      }, []);
    
      return (
        <>
          {items.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
          <div id="load-more">Loading more...</div>
        </>
      );
    };`,
      },
      {
        id: 127,
        title: "Custom Hooks for Reusable Logic",
        description: "Creating custom hooks for encapsulating reusable logic.",
        example: `// Example of a custom hook
    const useFetch = (url) => {
      const [data, setData] = React.useState(null);
      const [error, setError] = React.useState(null);
    
      React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          }
        };
        fetchData();
      }, [url]);
    
      return { data, error };
    };
    
    const MyComponent = () => {
      const { data, error } = useFetch('/api/data');
      return <div>{error ? error.message : JSON.stringify(data)}</div>;
    };`,
      },
      {
        id: 128,
        title: "Using useMemo for Performance Optimization",
        description: "Using useMemo to memoize expensive calculations.",
        example: `// Example of useMemo
    const MyComponent = ({ items }) => {
      const computedValue = React.useMemo(() => {
        return items.reduce((acc, item) => acc + item, 0);
      }, [items]);
    
      return <div>Total: {computedValue}</div>;
    };`,
      },
      {
        id: 129,
        title: "Using useCallback to Optimize Event Handlers",
        description: "Using useCallback to memoize functions to prevent unnecessary renders.",
        example: `// Example of useCallback
    const MyComponent = () => {
      const [count, setCount] = React.useState(0);
    
      const increment = React.useCallback(() => {
        setCount((prev) => prev + 1);
      }, []);
    
      return <button onClick={increment}>Count: {count}</button>;
    };`,
      },
      {
        id: 130,
        title: "Using useLayoutEffect for Layout Calculations",
        description: "Using useLayoutEffect for DOM measurements before painting.",
        example: `// Example of useLayoutEffect
    const MyComponent = () => {
      const [size, setSize] = React.useState(0);
      const ref = React.useRef();
    
      React.useLayoutEffect(() => {
        setSize(ref.current.getBoundingClientRect().width);
      }, []);
    
      return <div ref={ref}>Size: {size}px</div>;
    };`,
      },
      {
        id: 131,
        title: "Using Framer Motion for Animations",
        description: "Integrating Framer Motion for advanced animations in React components.",
        example: `// Example of Framer Motion
    import { motion } from 'framer-motion';
    
    const MyComponent = () => (
      <motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        Animated Component
      </motion.div>
    );`,
      },
      {
        id: 132,
        title: "Using Styled Components for CSS-in-JS",
        description: "Leveraging styled-components for scoped styles in React.",
        example: `// Example of styled-components
    import styled from 'styled-components';
    
    const Button = styled.button\`
      background: blue;
      color: white;
      &:hover {
        background: darkblue;
      }
    \`;
    
    const MyComponent = () => <Button>Click Me</Button>;`,
      },
      {
        id: 133,
        title: "Using React Testing Library for Unit Testing",
        description: "Writing unit tests for React components using React Testing Library.",
        example: `// Example of unit testing with React Testing Library
    import { render, screen } from '@testing-library/react';
    import MyComponent from './MyComponent';
    
    test('renders learn react link', () => {
      render(<MyComponent />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });`,
      },
      {
        id: 134,
        title: "Using Enzyme for Component Testing",
        description: "Using Enzyme for shallow rendering and testing components.",
        example: `// Example of Enzyme for testing
    import { shallow } from 'enzyme';
    import MyComponent from './MyComponent';
    
    test('renders without crashing', () => {
      const wrapper = shallow(<MyComponent />);
      expect(wrapper.find('h1').text()).toBe('Hello World');
    });`,
      },
      {
        id: 135,
        title: "Implementing Route Guards with React Router",
        description: "Protecting routes in a React application using React Router.",
        example: `// Example of route guards
    const PrivateRoute = ({ component: Component, ...rest }) => {
      const isAuthenticated = useAuth();
    
      return (
        <Route
          {...rest}
          render={props =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
    };`,
      },
      {
        id: 136,
        title: "Creating a Responsive Navbar with React Router",
        description: "Building a responsive navigation bar using React Router.",
        example: `// Example of a responsive navbar
    import { Link } from 'react-router-dom';
    
    const Navbar = () => (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );`,
      },
      {
        id: 137,
        title: "Implementing Lazy Loading Images",
        description: "Using the Intersection Observer API for lazy loading images.",
        example: `// Example of lazy loading images
    const LazyImage = ({ src, alt }) => {
      const [loaded, setLoaded] = React.useState(false);
      const ref = React.useRef();
    
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      });
    
      React.useEffect(() => {
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          observer.disconnect();
        };
      }, []);
    
      return <img ref={ref} src={loaded ? src : ''} alt={alt} />;
    };`,
      },
      {
        id: 138,
        title: "Creating a Custom Context API",
        description: "Building a custom context API for managing global state.",
        example: `// Example of custom context API
    const MyContext = React.createContext();
    
    const MyProvider = ({ children }) => {
      const [value, setValue] = React.useState('default');
    
      return (
        <MyContext.Provider value={{ value, setValue }}>
          {children}
        </MyContext.Provider>
      );
    };
    
    const MyComponent = () => {
      const { value, setValue } = React.useContext(MyContext);
      return <button onClick={() => setValue('new value')}>{value}</button>;
    };`,
      },
      {
        id: 139,
        title: "Using React Helmet for Document Head Management",
        description: "Managing the document head for SEO and metadata using React Helmet.",
        example: `// Example of React Helmet
    import { Helmet } from 'react-helmet';
    
    const MyComponent = () => (
      <>
        <Helmet>
          <title>My Page Title</title>
          <meta name="description" content="Description of my page" />
        </Helmet>
        <h1>Hello World</h1>
      </>
    );`,
      },
      {
        id: 140,
        title: "Using Framer Motion for Page Transitions",
        description: "Implementing page transitions with Framer Motion.",
        example: `// Example of page transitions with Framer Motion
    import { motion } from 'framer-motion';
    
    const pageVariants = {
      initial: { opacity: 0 },
      in: { opacity: 1 },
      out: { opacity: 0 },
    };
    
    const MyComponent = () => (
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <h1>Page Transition</h1>
      </motion.div>
    );`,
      },
      {
        id: 141,
        title: "Using Formik for Form Management",
        description: "Using Formik for managing form state and validation.",
        example: `// Example of using Formik
    import { Formik, Form, Field } from 'formik';
    
    const MyForm = () => (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );`,
      },
      {
        id: 142,
        title: "Using React Spring for Animation",
        description: "Animating components using React Spring for smooth transitions.",
        example: `// Example of React Spring
    import { useSpring, animated } from 'react-spring';
    
    const MyComponent = () => {
      const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    
      return <animated.div style={props}>Animated Component</animated.div>;
    };`,
      },
      {
        id: 143,
        title: "Handling Forms with Custom Validation",
        description: "Implementing custom validation logic for forms.",
        example: `// Example of custom validation
    const MyForm = () => {
      const [value, setValue] = React.useState('');
      const [error, setError] = React.useState('');
    
      const validate = (value) => {
        if (!value) {
          setError('Required');
        } else {
          setError('');
        }
      };
    
      return (
        <div>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              validate(e.target.value);
            }}
          />
          {error && <span>{error}</span>}
        </div>
      );
    };`,
      },
      {
        id: 144,
        title: "Using CSS Modules for Scoped Styles",
        description: "Applying CSS modules for styling React components with scoped styles.",
        example: `// Example of CSS Modules
    import styles from './MyComponent.module.css';
    
    const MyComponent = () => (
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
    );`,
      },
      {
        id: 145,
        title: "Creating a Modal Component",
        description: "Building a reusable modal component in React.",
        example: `// Example of a Modal component
    const Modal = ({ isOpen, onClose, children }) => {
      if (!isOpen) return null;
    
      return (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            {children}
          </div>
        </div>
      );
    };
    
    const MyComponent = () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return (
        <>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h1>Modal Content</h1>
          </Modal>
        </>
      );
    };`,
      },
      {
        id: 146,
        title: "Creating a Tooltip Component",
        description: "Building a reusable tooltip component in React.",
        example: `// Example of a Tooltip component
    const Tooltip = ({ text, children }) => {
      const [visible, setVisible] = React.useState(false);
    
      return (
        <div
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {children}
          {visible && <div className="tooltip">{text}</div>}
        </div>
      );
    };`,
      },
      {
        id: 147,
        title: "Using React Router for Dynamic Routing",
        description: "Implementing dynamic routing in a React application.",
        example: `// Example of dynamic routing with React Router
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    
    const MyComponent = ({ match }) => <h1>ID: {match.params.id}</h1>;
    
    const App = () => (
      <Router>
        <Route path="/item/:id" component={MyComponent} />
      </Router>
    );`,
      },
      {
        id: 148,
        title: "Using Context API for Global State Management",
        description: "Managing global state with React's Context API.",
        example: `// Example of Context API for global state
    const ThemeContext = React.createContext();
    
    const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = React.useState('light');
    
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    const MyComponent = () => {
      const { theme, setTheme } = React.useContext(ThemeContext);
      return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>;
    };`,
      },
      {
        id: 149,
        title: "Using Axios for HTTP Requests",
        description: "Making HTTP requests using Axios in a React application.",
        example: `// Example of using Axios
    import axios from 'axios';
    import React, { useEffect } from 'react';
    
    const MyComponent = () => {
      useEffect(() => {
        const fetchData = async () => {
          const result = await axios('/api/data');
          console.log(result.data);
        };
        fetchData();
      }, []);
    
      return <div>Data fetched!</div>;
    };`,
      },
      {
        id: 150,
        title: "Implementing Redux for State Management",
        description: "Using Redux for global state management in React applications.",
        example: `// Example of implementing Redux
    import { createStore } from 'redux';
    import { Provider, useSelector, useDispatch } from 'react-redux';
    
    // Reducer
    const reducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        default:
          return state;
      }
    };
    
    const store = createStore(reducer);
    
    const Counter = () => {
      const count = useSelector((state) => state.count);
      const dispatch = useDispatch();
      return (
        <>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </>
      );
    };
    
    const App = () => (
      <Provider store={store}>
        <Counter />
      </Provider>
    );`,
      },


      {
        id: 151,
        title: "Creating a Custom Hook",
        description: "Building a reusable custom hook for managing local storage.",
        example: `// Example of a custom hook
    import { useState, useEffect } from 'react';
    
    const useLocalStorage = (key, initialValue) => {
      const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.log(error);
          return initialValue;
        }
      });
    
      useEffect(() => {
        try {
          window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
          console.log(error);
        }
      }, [key, storedValue]);
    
      return [storedValue, setStoredValue];
    };`,
      },
      {
        id: 152,
        title: "Fetching Data with Fetch API",
        description: "Making HTTP requests using the Fetch API in React.",
        example: `// Example of using Fetch API
    import React, { useEffect, useState } from 'react';
    
    const MyComponent = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/api/data');
          const result = await response.json();
          setData(result);
        };
        fetchData();
      }, []);
    
      return <div>{JSON.stringify(data)}</div>;
    };`,
      },
      {
        id: 153,
        title: "Using PropTypes for Type Checking",
        description: "Validating component props using PropTypes.",
        example: `// Example of using PropTypes
    import PropTypes from 'prop-types';
    
    const MyComponent = ({ name }) => <h1>Hello, {name}</h1>;
    
    MyComponent.propTypes = {
      name: PropTypes.string.isRequired,
    };`,
      },
      {
        id: 154,
        title: "Creating a Carousel Component",
        description: "Building a reusable carousel component in React.",
        example: `// Example of a Carousel component
    const Carousel = ({ images }) => {
      const [current, setCurrent] = React.useState(0);
      
      const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
      };
      
      return (
        <div>
          <img src={images[current]} alt="carousel" />
          <button onClick={nextSlide}>Next</button>
        </div>
      );
    };`,
      },
      {
        id: 155,
        title: "Implementing Lazy Loading with React.lazy",
        description: "Using React.lazy for code splitting and lazy loading components.",
        example: `// Example of lazy loading a component
    import React, { Suspense } from 'react';
    
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    const MyComponent = () => (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );`,
      },
      {
        id: 156,
        title: "Creating a Responsive Navigation Bar",
        description: "Building a responsive navigation bar using CSS Flexbox.",
        example: `// Example of a responsive navbar
    const Navbar = () => (
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Logo</div>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </nav>
    );`,
      },
      {
        id: 157,
        title: "Using React Fragments",
        description: "Using React Fragments to group elements without adding extra nodes to the DOM.",
        example: `// Example of using Fragments
    const MyComponent = () => (
      <>
        <h1>Title</h1>
        <p>Some content</p>
      </>
    );`,
      },
      {
        id: 158,
        title: "Implementing a Search Filter",
        description: "Creating a search filter for a list of items in React.",
        example: `// Example of a search filter
    import React, { useState } from 'react';
    
    const MyComponent = ({ items }) => {
      const [searchTerm, setSearchTerm] = useState('');
    
      const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div>
          <input
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <ul>
            {filteredItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };`,
      },
      {
        id: 159,
        title: "Handling Form Submission",
        description: "Managing form submissions in React.",
        example: `// Example of handling form submission
    import React, { useState } from 'react';
    
    const MyForm = () => {
      const [inputValue, setInputValue] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted: ' + inputValue);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>
      );
    };`,
      },
      {
        id: 160,
        title: "Using useMemo for Performance Optimization",
        description: "Optimizing performance with useMemo to memoize values.",
        example: `// Example of using useMemo
    import React, { useMemo } from 'react';
    
    const MyComponent = ({ items }) => {
      const total = useMemo(() => {
        return items.reduce((acc, item) => acc + item, 0);
      }, [items]);
    
      return <h1>Total: {total}</h1>;
    };`,
      },
      {
        id: 161,
        title: "Using useCallback for Memoized Functions",
        description: "Memoizing functions with useCallback for performance optimization.",
        example: `// Example of using useCallback
    import React, { useState, useCallback } from 'react';
    
    const MyComponent = () => {
      const [count, setCount] = useState(0);
    
      const increment = useCallback(() => {
        setCount(c => c + 1);
      }, []);
    
      return (
        <>
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
        </>
      );
    };`,
      },
      {
        id: 162,
        title: "Creating a Notification Component",
        description: "Building a reusable notification component in React.",
        example: `// Example of a Notification component
    const Notification = ({ message, onClose }) => (
      <div className="notification">
        {message}
        <button onClick={onClose}>Close</button>
      </div>
    );`,
      },
      {
        id: 163,
        title: "Implementing Pagination",
        description: "Creating a pagination component for a list of items.",
        example: `// Example of a Pagination component
    import React from 'react';
    
    const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      return (
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      );
    };`,
      },
      {
        id: 164,
        title: "Creating a Loading Spinner",
        description: "Building a loading spinner component.",
        example: `// Example of a loading spinner
    const Spinner = () => <div className="spinner">Loading...</div>;`,
      },
      {
        id: 165,
        title: "Using useReducer for State Management",
        description: "Managing complex state with useReducer in React.",
        example: `// Example of using useReducer
    import React, { useReducer } from 'react';
    
    const initialState = { count: 0 };
    
    const reducer = (state, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };
    
    const MyComponent = () => {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          <h1>{state.count}</h1>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
      );
    };`,
      },
      {
        id: 166,
        title: "Using useLayoutEffect for Synchronous Updates",
        description: "Handling synchronous updates with useLayoutEffect.",
        example: `// Example of using useLayoutEffect
    import React, { useLayoutEffect, useRef } from 'react';
    
    const MyComponent = () => {
      const boxRef = useRef();
    
      useLayoutEffect(() => {
        boxRef.current.style.border = '2px solid red';
      }, []);
    
      return <div ref={boxRef}>Box</div>;
    };`,
      },
      {
        id: 167,
        title: "Creating a Tabbed Interface",
        description: "Building a tabbed interface using React.",
        example: `// Example of a tabbed interface
    import React, { useState } from 'react';
    
    const Tab = ({ activeTab, tabId, onClick }) => (
      <button onClick={() => onClick(tabId)}>
        {tabId}
      </button>
    );
    
    const TabContent = ({ activeTab, tabId, children }) => (
      activeTab === tabId ? <div>{children}</div> : null
    );
    
    const Tabs = () => {
      const [activeTab, setActiveTab] = useState('Tab 1');
    
      return (
        <div>
          <Tab activeTab={activeTab} tabId="Tab 1" onClick={setActiveTab} />
          <Tab activeTab={activeTab} tabId="Tab 2" onClick={setActiveTab} />
          <TabContent activeTab={activeTab} tabId="Tab 1">Content for Tab 1</TabContent>
          <TabContent activeTab={activeTab} tabId="Tab 2">Content for Tab 2</TabContent>
        </div>
      );
    };`,
      },
      {
        id: 168,
        title: "Using Context API for Global State Management",
        description: "Creating a global state using React Context API.",
        example: `// Example of using Context API
    import React, { createContext, useContext, useState } from 'react';
    
    const MyContext = createContext();
    
    const MyProvider = ({ children }) => {
      const [value, setValue] = useState(0);
      return (
        <MyContext.Provider value={{ value, setValue }}>
          {children}
        </MyContext.Provider>
      );
    };
    
    const MyComponent = () => {
      const { value, setValue } = useContext(MyContext);
      return (
        <div>
          <h1>{value}</h1>
          <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
      );
    };`,
      },
      {
        id: 169,
        title: "Creating a Modal Component",
        description: "Building a reusable modal component in React.",
        example: `// Example of a Modal component
    const Modal = ({ isOpen, onClose, children }) => {
      if (!isOpen) return null;
    
      return (
        <div className="modal">
          <div className="modal-content">
            <button onClick={onClose}>Close</button>
            {children}
          </div>
        </div>
      );
    };`,
      },
      {
        id: 170,
        title: "Using Local Storage with Hooks",
        description: "Persisting state to local storage with a custom hook.",
        example: `// Example of persisting state to local storage
    import { useState, useEffect } from 'react';
    
    const useLocalStorage = (key, initialValue) => {
      const [storedValue, setStoredValue] = useState(() => {
        try {
          return JSON.parse(window.localStorage.getItem(key)) || initialValue;
        } catch {
          return initialValue;
        }
      });
    
      useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }, [key, storedValue]);
    
      return [storedValue, setStoredValue];
    };`,
      },
      {
        id: 171,
        title: "Creating a Slider Component",
        description: "Building a reusable slider component in React.",
        example: `// Example of a Slider component
    import React from 'react';
    
    const Slider = ({ value, onChange }) => (
      <input type="range" value={value} onChange={onChange} />
    );`,
      },
      {
        id: 172,
        title: "Using useRef for DOM Manipulation",
        description: "Using useRef to access and manipulate DOM elements.",
        example: `// Example of using useRef
    import React, { useRef } from 'react';
    
    const MyComponent = () => {
      const inputRef = useRef();
    
      const focusInput = () => {
        inputRef.current.focus();
      };
    
      return (
        <>
          <input ref={inputRef} />
          <button onClick={focusInput}>Focus Input</button>
        </>
      );
    };`,
      },
      {
        id: 173,
        title: "Handling Multiple Inputs",
        description: "Managing state for multiple inputs in a form.",
        example: `// Example of handling multiple inputs
    import React, { useState } from 'react';
    
    const MyForm = () => {
      const [form, setForm] = useState({ name: '', email: '' });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      return (
        <form>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        </form>
      );
    };`,
      },
      {
        id: 174,
        title: "Creating a Countdown Timer",
        description: "Building a countdown timer using React.",
        example: `// Example of a Countdown Timer
    import React, { useState, useEffect } from 'react';
    
    const Countdown = ({ seconds }) => {
      const [timeLeft, setTimeLeft] = useState(seconds);
    
      useEffect(() => {
        if (timeLeft > 0) {
          const timer = setInterval(() => setTimeLeft(time => time - 1), 1000);
          return () => clearInterval(timer);
        }
      }, [timeLeft]);
    
      return <div>{timeLeft} seconds left</div>;
    };`,
      },
      {
        id: 175,
        title: "Using Event Delegation",
        description: "Implementing event delegation in a list.",
        example: `// Example of event delegation
    import React from 'react';
    
    const MyComponent = () => {
      const handleClick = (e) => {
        alert(e.target.textContent);
      };
    
      return (
        <ul onClick={handleClick}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      );
    };`,
      },
      {
        id: 176,
        title: "Creating a Tooltip Component",
        description: "Building a reusable tooltip component in React.",
        example: `// Example of a Tooltip component
    const Tooltip = ({ message, children }) => (
      <div className="tooltip">
        {children}
        <span className="tooltip-text">{message}</span>
      </div>
    );`,
      },
      {
        id: 177,
        title: "Implementing a Draggable Component",
        description: "Creating a draggable component using React.",
        example: `// Example of a draggable component
    import React, { useState } from 'react';
    
    const Draggable = () => {
      const [position, setPosition] = useState({ x: 0, y: 0 });
    
      const handleDrag = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
    
      return (
        <div
          draggable
          onDrag={handleDrag}
          style={{ position: 'absolute', left: position.x, top: position.y }}
        >
          Drag me
        </div>
      );
    };`,
      },
      {
        id: 178,
        title: "Creating a Progress Bar",
        description: "Building a reusable progress bar component in React.",
        example: `// Example of a Progress Bar
    const ProgressBar = ({ progress }) => (
      <div style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
        <div style={{ width: progress + '%', backgroundColor: '#76c7c0' }} />
      </div>
    );`,
      },
      {
        id: 179,
        title: "Implementing a Theming Context",
        description: "Creating a theming context for global styles.",
        example: `// Example of a theming context
    import React, { createContext, useContext, useState } from 'react';
    
    const ThemeContext = createContext();
    
    const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    const MyComponent = () => {
      const { theme, setTheme } = useContext(ThemeContext);
      return (
        <div className={theme}>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
          </button>
        </div>
      );
    };`,
      },
      {
        id: 180,
        title: "Creating a Weather Widget",
        description: "Building a weather widget using an API.",
        example: `// Example of a Weather Widget
    import React, { useEffect, useState } from 'react';
    
    const WeatherWidget = ({ city }) => {
      const [weather, setWeather] = useState(null);
    
      useEffect(() => {
        const fetchWeather = async () => {
          const response = await fetch(\`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=\${city}\`);
          const data = await response.json();
          setWeather(data);
        };
    
        fetchWeather();
      }, [city]);
    
      return weather ? <div>{weather.current.temp_c} °C</div> : <div>Loading...</div>;
    };`,
      },
      {
        id: 181,
        title: "Creating a File Upload Component",
        description: "Building a file upload component in React.",
        example: `// Example of a File Upload component
    import React, { useState } from 'react';
    
    const FileUpload = () => {
      const [file, setFile] = useState(null);
    
      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      return (
        <div>
          <input type="file" onChange={handleFileChange} />
          {file && <p>Selected File: {file.name}</p>}
        </div>
      );
    };`,
      },
      {
        id: 182,
        title: "Implementing a Search Filter",
        description: "Creating a search filter for a list of items.",
        example: `// Example of a Search Filter
    import React, { useState } from 'react';
    
    const SearchFilter = ({ items }) => {
      const [searchTerm, setSearchTerm] = useState('');
    
      const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <ul>
            {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      );
    };`,
      },
      {
        id: 183,
        title: "Creating a Carousel Component",
        description: "Building a simple carousel component in React.",
        example: `// Example of a Carousel component
    import React, { useState } from 'react';
    
    const Carousel = ({ items }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      };
    
      const prev = () => {
        setCurrentIndex((prevIndex) => 
          (prevIndex - 1 + items.length) % items.length
        );
      };
    
      return (
        <div>
          <button onClick={prev}>Previous</button>
          <div>{items[currentIndex]}</div>
          <button onClick={next}>Next</button>
        </div>
      );
    };`,
      },
      {
        id: 184,
        title: "Using Styled Components",
        description: "Creating styled components in React.",
        example: `// Example of Styled Components
    import styled from 'styled-components';
    
    const Button = styled.button 
      background-color: blue;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
    ;
    
    const MyComponent = () => <Button>Click Me</Button>;`,
      },
      {
        id: 185,
        title: "Creating a Rating Component",
        description: "Building a reusable rating component in React.",
        example: `// Example of a Rating component
    import React, { useState } from 'react';
    
    const Rating = () => {
      const [rating, setRating] = useState(0);
    
      const handleClick = (value) => {
        setRating(value);
      };
    
      return (
        <div>
          {[1, 2, 3, 4, 5].map(value => (
            <span key={value} onClick={() => handleClick(value)}>
              {value <= rating ? '★' : '☆'}
            </span>
          ))}
        </div>
      );
    };`,
      },
      {
        id: 186,
        title: "Creating a FAQ Accordion",
        description: "Building a FAQ accordion component in React.",
        example: `// Example of a FAQ Accordion
    import React, { useState } from 'react';
    
    const FAQItem = ({ question, answer }) => {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div>
          <h3 onClick={() => setIsOpen(!isOpen)}>{question}</h3>
          {isOpen && <p>{answer}</p>}
        </div>
      );
    };
    
    const FAQAccordion = ({ items }) => (
      <div>
        {items.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    );`,
      },
      {
        id: 187,
        title: "Using useEffect for Data Fetching",
        description: "Fetching data using useEffect in React.",
        example: `// Example of data fetching with useEffect
    import React, { useEffect, useState } from 'react';
    
    const DataFetching = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://api.example.com/data');
          const result = await response.json();
          setData(result);
        };
        fetchData();
      }, []);
    
      return <div>{JSON.stringify(data)}</div>;
    };`,
      },
      {
        id: 188,
        title: "Creating a Countdown Button",
        description: "Building a countdown button using React.",
        example: `// Example of a Countdown Button
    import React, { useState, useEffect } from 'react';
    
    const CountdownButton = () => {
      const [countdown, setCountdown] = useState(10);
      const [isActive, setIsActive] = useState(false);
    
      useEffect(() => {
        let timer;
        if (isActive && countdown > 0) {
          timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
        } else if (countdown === 0) {
          setIsActive(false);
        }
        return () => clearInterval(timer);
      }, [isActive, countdown]);
    
      return (
        <div>
          <button onClick={() => setIsActive(true)} disabled={isActive}>
            Start Countdown
          </button>
          <p>{countdown}</p>
        </div>
      );
    };`,
      },
      {
        id: 189,
        title: "Creating a Contact Form",
        description: "Building a contact form component in React.",
        example: `// Example of a Contact Form
    import React, { useState } from 'react';
    
    const ContactForm = () => {
      const [form, setForm] = useState({ name: '', email: '', message: '' });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      );
    };`,
      },
      {
        id: 190,
        title: "Implementing Infinite Scroll",
        description: "Creating an infinite scroll feature for a list.",
        example: `// Example of Infinite Scroll
    import React, { useEffect, useState } from 'react';
    
    const InfiniteScroll = () => {
      const [items, setItems] = useState([]);
      const [page, setPage] = useState(1);
    
      const fetchItems = async () => {
        const response = await fetch(\`https://api.example.com/items?page=\${page}\`);
        const newItems = await response.json();
        setItems((prev) => [...prev, ...newItems]);
      };
    
      useEffect(() => {
        fetchItems();
      }, [page]);
    
      const handleScroll = (e) => {
        if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight) {
          setPage((prev) => prev + 1);
        }
      };
    
      return (
        <div onScroll={handleScroll} style={{ height: '400px', overflowY: 'scroll' }}>
          {items.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      );
    };`,
      },
      {
        id: 191,
        title: "Creating a Responsive Navigation Bar",
        description: "Building a responsive navigation bar in React.",
        example: `// Example of a Responsive Navigation Bar
    import React, { useState } from 'react';
    
    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <nav>
          <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
          {isOpen && (
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          )}
        </nav>
      );
    };`,
      },
      {
        id: 192,
        title: "Implementing a Sorting Feature",
        description: "Creating a sorting feature for a list of items.",
        example: `// Example of Sorting Feature
    import React, { useState } from 'react';
    
    const SortingFeature = ({ items }) => {
      const [sortedItems, setSortedItems] = useState(items);
    
      const sortItems = (order) => {
        const newSortedItems = [...items].sort((a, b) => 
          order === 'asc' ? a - b : b - a
        );
        setSortedItems(newSortedItems);
      };
    
      return (
        <div>
          <button onClick={() => sortItems('asc')}>Sort Ascending</button>
          <button onClick={() => sortItems('desc')}>Sort Descending</button>
          <ul>
            {sortedItems.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      );
    };`,
      },
      {
        id: 193,
        title: "Using Context API",
        description: "Managing state with Context API in React.",
        example: `// Example of Context API
    import React, { createContext, useContext, useState } from 'react';
    
    const MyContext = createContext();
    
    const MyProvider = ({ children }) => {
      const [value, setValue] = useState('Hello');
    
      return (
        <MyContext.Provider value={{ value, setValue }}>
          {children}
        </MyContext.Provider>
      );
    };
    
    const ChildComponent = () => {
      const { value } = useContext(MyContext);
      return <div>{value}</div>;
    };
    
    const App = () => (
      <MyProvider>
        <ChildComponent />
      </MyProvider>
    );`,
      },
      {
        id: 194,
        title: "Creating a Loading Spinner",
        description: "Building a loading spinner component in React.",
        example: `// Example of a Loading Spinner
    import React from 'react';
    
    const LoadingSpinner = () => (
      <div className="spinner">
        <style>
          { 
            .spinner {
              border: 8px solid rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              border-top: 8px solid #3498db;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          }
        </style>
      </div>
    );`,
      },
      {
        id: 195,
        title: "Creating a Toggle Switch",
        description: "Building a toggle switch component in React.",
        example: `// Example of a Toggle Switch
    import React, { useState } from 'react';
    
    const ToggleSwitch = () => {
      const [isOn, setIsOn] = useState(false);
    
      return (
        <div onClick={() => setIsOn(!isOn)} style={{
          cursor: 'pointer',
          width: '60px',
          height: '30px',
          background: isOn ? 'green' : 'gray',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOn ? 'flex-end' : 'flex-start',
          padding: '5px',
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'white',
          }} />
        </div>
      );
    };`,
      },
      {
        id: 196,
        title: "Creating a Tooltip Component",
        description: "Building a tooltip component in React.",
        example: `// Example of a Tooltip component
    import React, { useState } from 'react';
    
    const Tooltip = ({ text, children }) => {
      const [isVisible, setIsVisible] = useState(false);
    
      return (
        <div 
          onMouseEnter={() => setIsVisible(true)} 
          onMouseLeave={() => setIsVisible(false)}
          style={{ position: 'relative' }}
        >
          {children}
          {isVisible && (
            <div style={{
              position: 'absolute',
              background: 'black',
              color: 'white',
              padding: '5px',
              borderRadius: '3px',
              top: '-30px',
            }}>
              {text}
            </div>
          )}
        </div>
      );
    };`,
      },
      {
        id: 197,
        title: "Creating a Tab Component",
        description: "Building a tab component in React.",
        example: `// Example of a Tab component
    import React, { useState } from 'react';
    
    const Tab = ({ title, isActive, onClick }) => (
      <button onClick={onClick} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
        {title}
      </button>
    );
    
    const TabContent = ({ children, isActive }) => isActive ? <div>{children}</div> : null;
    
    const Tabs = ({ items }) => {
      const [activeIndex, setActiveIndex] = useState(0);
    
      return (
        <div>
          <div>
            {items.map((item, index) => (
              <Tab 
                key={index} 
                title={item.title} 
                isActive={activeIndex === index} 
                onClick={() => setActiveIndex(index)} 
              />
            ))}
          </div>
          {items.map((item, index) => (
            <TabContent key={index} isActive={activeIndex === index}>
              {item.content}
            </TabContent>
          ))}
        </div>
      );
    };`,
      },
      {
        id: 198,
        title: "Implementing Dark Mode",
        description: "Adding dark mode functionality to a React app.",
        example: `// Example of Dark Mode implementation
    import React, { useState, useEffect } from 'react';
    
    const App = () => {
      const [darkMode, setDarkMode] = useState(false);
    
      useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#333' : '#FFF';
        document.body.style.color = darkMode ? '#FFF' : '#000';
      }, [darkMode]);
    
      return (
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            Toggle Dark Mode
          </button>
        </div>
      );
    };`,
      },
      {
        id: 199,
        title: "Using useMemo and useCallback",
        description: "Optimizing performance with useMemo and useCallback in React.",
        example: `// Example of useMemo and useCallback
    import React, { useState, useMemo, useCallback } from 'react';
    
    const ExpensiveCalculation = ({ num }) => {
      const result = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return num * 2;
      }, [num]);
    
      return <div>Result: {result}</div>;
    };
    
    const Counter = () => {
      const [count, setCount] = useState(0);
      const increment = useCallback(() => setCount((c) => c + 1), []);
      
      return (
        <div>
          <button onClick={increment}>Count: {count}</button>
          <ExpensiveCalculation num={count} />
        </div>
      );
    };`,
      },
      {
        id: 200,
        title: "Implementing a Drag and Drop Feature",
        description: "Creating a drag and drop feature in a React app.",
        example: `// Example of Drag and Drop feature
    import React, { useState } from 'react';
    
    const DraggableItem = ({ item, onDrop }) => {
      const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', item);
      };
    
      return (
        <div draggable onDragStart={handleDragStart}>
          {item}
        </div>
      );
    };
    
    const DropZone = ({ onDrop }) => {
      const handleDrop = (e) => {
        e.preventDefault();
        const item = e.dataTransfer.getData('text/plain');
        onDrop(item);
      };
    
      return (
        <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} style={{ height: '100px', border: '1px dashed black' }}>
          Drop Here
        </div>
      );
    };
    
    const DragAndDrop = () => {
      const [droppedItems, setDroppedItems] = useState([]);
    
      const handleDrop = (item) => {
        setDroppedItems((prev) => [...prev, item]);
      };
    
      return (
        <div>
          <DraggableItem item="Item 1" onDrop={handleDrop} />
          <DraggableItem item="Item 2" onDrop={handleDrop} />
          <DropZone onDrop={handleDrop} />
          <div>Dropped Items: {droppedItems.join(', ')}</div>
        </div>
      );
    };`,
      },
  ];
  
  export default concept;
  
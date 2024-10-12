const reactNativeQuestions = [
    {
      id: 1,
      title: "What is React Native?",
      type: "React Native",
      description: "React Native is a framework for building mobile applications using React, allowing developers to create native apps for iOS and Android using a single codebase.",
      example: "Example: Using React Native to build an app that runs on both iOS and Android."
    },
    {
      id: 2,
      title: "What are the advantages of using React Native?",
      type: "React Native",
      description: "React Native offers advantages such as cross-platform compatibility, native performance, a large community, and reusable components.",
      example: "Example: Using the same codebase for both iOS and Android platforms."
    },
    {
      id: 3,
      title: "How does React Native differ from React for web development?",
      type: "React Native",
      description: "React Native uses native components instead of web components, and it does not use the DOM but rather communicates with native APIs.",
      example: "Example: Using <View> instead of <div> in React Native."
    },
    {
      id: 4,
      title: "What are components in React Native?",
      type: "React Native",
      description: "Components are the building blocks of a React Native application, allowing developers to create reusable UI elements.",
      example: "Example: Creating a custom Button component in React Native."
    },
    {
      id: 5,
      title: "What is the difference between functional components and class components in React Native?",
      type: "React Native",
      description: "Functional components are stateless and use hooks for state management, while class components can manage state and lifecycle methods directly.",
      example: "Example: Using a functional component with the useState hook."
    },
    {
      id: 6,
      title: "How do you manage state in a React Native application?",
      type: "React Native",
      description: "State can be managed using React's built-in useState hook, Context API, or state management libraries like Redux or MobX.",
      example: "Example: Using the useState hook to manage local state in a functional component."
    },
    {
      id: 7,
      title: "What are props in React Native?",
      type: "React Native",
      description: "Props (short for properties) are read-only attributes passed from parent components to child components to customize their behavior.",
      example: "Example: Passing a title prop to a custom Header component."
    },
    {
      id: 8,
      title: "How do you style components in React Native?",
      type: "React Native",
      description: "Components can be styled using the StyleSheet API, inline styles, or external style libraries like styled-components.",
      example: "Example: Creating a stylesheet using StyleSheet.create()."
    },
    {
      id: 9,
      title: "What is the purpose of the React Native CLI?",
      type: "React Native",
      description: "The React Native CLI is a command-line interface tool that allows developers to create, run, and manage React Native projects.",
      example: "Example: Using the command 'npx react-native init MyProject' to create a new project."
    },
    {
      id: 10,
      title: "How do you handle navigation in a React Native app?",
      type: "React Native",
      description: "Navigation can be handled using libraries like React Navigation or React Native Navigation, allowing for stack, tab, and drawer navigation.",
      example: "Example: Using createStackNavigator to manage screen transitions."
    },
    {
      id: 11,
      title: "What are the differences between React Native and Flutter?",
      type: "React Native",
      description: "React Native uses JavaScript and focuses on native components, while Flutter uses Dart and provides a widget-based architecture.",
      example: "Example: React Native's reliance on native APIs versus Flutter's custom widgets."
    },
    {
      id: 12,
      title: "How can you handle API calls in React Native?",
      type: "React Native",
      description: "API calls can be handled using the Fetch API, axios, or other libraries to interact with remote data sources.",
      example: "Example: Using fetch() to retrieve data from a REST API."
    },
    {
      id: 13,
      title: "What is the purpose of the useEffect hook in React Native?",
      type: "React Native",
      description: "The useEffect hook allows you to perform side effects in functional components, such as fetching data or subscribing to events.",
      example: "Example: Fetching data from an API when a component mounts."
    },
    {
      id: 14,
      title: "How do you implement forms in React Native?",
      type: "React Native",
      description: "Forms can be implemented using controlled components, where form inputs manage their own state using the useState hook.",
      example: "Example: Using TextInput components to create a controlled form."
    },
    {
      id: 15,
      title: "What are the differences between asynchronous storage options in React Native?",
      type: "React Native",
      description: "AsyncStorage provides a simple key-value storage, while libraries like SQLite offer structured storage for more complex data.",
      example: "Example: Using AsyncStorage to persist user preferences."
    },
    {
      id: 16,
      title: "How can you test React Native applications?",
      type: "React Native",
      description: "Testing can be performed using Jest for unit tests and libraries like React Native Testing Library for component testing.",
      example: "Example: Writing unit tests for a component using Jest."
    },
    {
      id: 17,
      title: "What is the purpose of the FlatList component in React Native?",
      type: "React Native",
      description: "FlatList is a performant component for rendering large lists of data, providing features like lazy loading and item recycling.",
      example: "Example: Using FlatList to display a list of items in a scrollable view."
    },
    {
      id: 18,
      title: "How do you handle animations in React Native?",
      type: "React Native",
      description: "Animations can be created using the Animated API or libraries like React Native Reanimated for complex animations.",
      example: "Example: Using Animated.timing to create smooth transitions."
    },
    {
      id: 19,
      title: "What is the significance of the key prop in React Native lists?",
      type: "React Native",
      description: "The key prop helps React identify which items have changed, are added, or are removed, optimizing rendering performance.",
      example: "Example: Providing a unique key for each item in a FlatList."
    },
    {
      id: 20,
      title: "How can you create a custom native module in React Native?",
      type: "React Native",
      description: "Custom native modules can be created by bridging JavaScript code to native code (Java for Android, Objective-C/Swift for iOS).",
      example: "Example: Creating a native module to access device sensors."
    },
    {
      id: 21,
      title: "How do you handle touch events in React Native?",
      type: "React Native",
      description: "Touch events can be handled using built-in components like TouchableOpacity or PanResponder for gesture recognition.",
      example: "Example: Using TouchableOpacity to create a button with a touch feedback effect."
    },
    {
      id: 22,
      title: "What is the use of the SafeAreaView component in React Native?",
      type: "React Native",
      description: "SafeAreaView is used to render content within the safe area boundaries of a device, ensuring that UI elements are not cut off by notches or rounded corners.",
      example: "Example: Wrapping a component in SafeAreaView to ensure proper display on devices with notches."
    },
    {
      id: 23,
      title: "How can you implement deep linking in a React Native application?",
      type: "React Native",
      description: "Deep linking allows the app to respond to external links by using libraries like React Navigation and configuring URL schemes.",
      example: "Example: Setting up deep linking to navigate to specific screens from external URLs."
    },
    {
      id: 24,
      title: "What are some common performance optimization techniques for React Native apps?",
      type: "React Native",
      description: "Performance optimization techniques include using PureComponent, memoization, reducing re-renders, and optimizing images.",
      example: "Example: Using React.memo to prevent unnecessary re-renders of functional components."
    },
    {
      id: 25,
      title: "How can you integrate push notifications in a React Native app?",
      type: "React Native",
      description: "Push notifications can be integrated using libraries like Firebase Cloud Messaging or OneSignal to send messages to users.",
      example: "Example: Setting up Firebase to receive push notifications in a React Native app."
    },
    {
      id: 26,
      title: "How do you handle error boundaries in React Native?",
      type: "React Native",
      description: "Error boundaries can be implemented by creating a higher-order component that catches errors in the component tree and displays a fallback UI.",
      example: "Example: Using componentDidCatch() to log errors and display a fallback UI."
    },
    {
      id: 27,
      title: "What is the role of the React Native DevTools?",
      type: "React Native",
      description: "React Native DevTools provides a way to inspect the component hierarchy, view state and props, and monitor performance in a React Native application.",
      example: "Example: Using DevTools to debug component rendering issues."
    },
    {
      id: 28,
      title: "How do you handle localization and internationalization in React Native?",
      type: "React Native",
      description: "Localization and internationalization can be handled using libraries like react-intl or i18next to manage translations and formats.",
      example: "Example: Using i18next to provide translations for different languages."
    },
    {
      id: 29,
      title: "How can you implement a splash screen in a React Native application?",
      type: "React Native",
      description: "A splash screen can be implemented by configuring native files or using libraries like react-native-splash-screen to display a loading screen on app startup.",
      example: "Example: Showing a splash screen while loading resources in a React Native app."
    },
    {
      id: 30,
      title: "What is the purpose of the Dimensions API in React Native?",
      type: "React Native",
      description: "The Dimensions API provides information about the device's screen size and orientation, allowing for responsive designs.",
      example: "Example: Using Dimensions.get('window') to adapt layout based on screen size."
    },

    {
        id: 31,
        title: "What is the purpose of the Image component in React Native?",
        type: "React Native",
        description: "The Image component is used to display images in a React Native application, supporting various image sources and styles.",
        example: "Example: Using the Image component to load an image from a URL."
      },
      {
        id: 32,
        title: "How do you handle device orientation changes in React Native?",
        type: "React Native",
        description: "Device orientation changes can be handled using the Dimensions API or by subscribing to the 'change' event to respond to orientation updates.",
        example: "Example: Adjusting the layout based on the device orientation using Dimensions."
      },
      {
        id: 33,
        title: "What is the purpose of the ActivityIndicator component in React Native?",
        type: "React Native",
        description: "The ActivityIndicator component is used to indicate that a task is in progress, providing visual feedback to users.",
        example: "Example: Displaying an ActivityIndicator while waiting for data to load."
      },
      {
        id: 34,
        title: "How do you create a modal in React Native?",
        type: "React Native",
        description: "A modal can be created using the Modal component, which provides an overlay that can display additional content.",
        example: "Example: Using the Modal component to show a confirmation dialog."
      },
      {
        id: 35,
        title: "What is the difference between ScrollView and FlatList in React Native?",
        type: "React Native",
        description: "ScrollView is used for rendering a small number of items, while FlatList is optimized for large lists, providing performance improvements.",
        example: "Example: Using FlatList for rendering a list of items to ensure efficient performance."
      },
      {
        id: 36,
        title: "How can you optimize images in a React Native app?",
        type: "React Native",
        description: "Image optimization can be achieved by using smaller image sizes, appropriate formats, and lazy loading techniques.",
        example: "Example: Using 'resizeMode' prop to control how images are displayed."
      },
      {
        id: 37,
        title: "How do you implement gesture handling in React Native?",
        type: "React Native",
        description: "Gesture handling can be implemented using Gesture Responder System or libraries like React Native Gesture Handler.",
        example: "Example: Using PanResponder to handle drag gestures."
      },
      {
        id: 38,
        title: "What are StyleSheet and its benefits in React Native?",
        type: "React Native",
        description: "StyleSheet is a built-in API for styling components in React Native, providing performance optimizations and a clear syntax.",
        example: "Example: Using StyleSheet.create() to define styles for a component."
      },
      {
        id: 39,
        title: "How do you implement pagination in a React Native application?",
        type: "React Native",
        description: "Pagination can be implemented using FlatList with the onEndReached prop to load more items as the user scrolls.",
        example: "Example: Fetching more data when the user reaches the end of the list."
      },
      {
        id: 40,
        title: "What is the purpose of the Pressable component in React Native?",
        type: "React Native",
        description: "The Pressable component is used to create touchable elements that can respond to various interaction states.",
        example: "Example: Using Pressable to create a button with different visual feedback."
      },
      {
        id: 41,
        title: "How do you set up a React Native project with TypeScript?",
        type: "React Native",
        description: "A React Native project can be set up with TypeScript by using the command 'npx react-native init MyProject --template react-native-template-typescript'.",
        example: "Example: Initializing a new project with TypeScript template."
      },
      {
        id: 42,
        title: "How do you implement dark mode in a React Native application?",
        type: "React Native",
        description: "Dark mode can be implemented by using the Appearance API to detect system settings and apply conditional styling.",
        example: "Example: Using the Appearance API to switch styles based on the user's preference."
      },
      {
        id: 43,
        title: "What is the use of the Linking API in React Native?",
        type: "React Native",
        description: "The Linking API is used to handle deep linking and open URLs in the browser or other apps from a React Native application.",
        example: "Example: Using Linking.openURL() to navigate to a web page."
      },
      {
        id: 44,
        title: "How can you access device features like camera and location in React Native?",
        type: "React Native",
        description: "Device features can be accessed using libraries like react-native-camera for camera access and react-native-geolocation-service for location services.",
        example: "Example: Using react-native-geolocation-service to get the current location of the user."
      },
      {
        id: 45,
        title: "What is the difference between useState and useReducer in React Native?",
        type: "React Native",
        description: "useState is used for managing local state, while useReducer is better suited for managing complex state logic and transitions.",
        example: "Example: Using useReducer for managing form state with multiple inputs."
      },
      {
        id: 46,
        title: "How do you implement error handling in a React Native app?",
        type: "React Native",
        description: "Error handling can be implemented using try-catch blocks, error boundaries, and libraries like Sentry for monitoring.",
        example: "Example: Using try-catch to handle API call errors."
      },
      {
        id: 47,
        title: "What is the role of the AsyncStorage in React Native?",
        type: "React Native",
        description: "AsyncStorage is a simple key-value storage system used for persisting data locally on the device.",
        example: "Example: Using AsyncStorage to save user preferences."
      },
      {
        id: 48,
        title: "How can you implement custom fonts in React Native?",
        type: "React Native",
        description: "Custom fonts can be implemented by adding font files to the project and linking them in the Info.plist (iOS) or build.gradle (Android).",
        example: "Example: Adding a custom font and using it in a Text component."
      },
      {
        id: 49,
        title: "How do you handle environment variables in a React Native application?",
        type: "React Native",
        description: "Environment variables can be handled using libraries like react-native-dotenv to define variables in a .env file.",
        example: "Example: Accessing API keys stored in an .env file."
      },
      {
        id: 50,
        title: "What are hooks in React Native?",
        type: "React Native",
        description: "Hooks are functions that allow you to use state and other React features in functional components.",
        example: "Example: Using useEffect to perform side effects in a functional component."
      }
    ];

  export default reactNativeQuestions
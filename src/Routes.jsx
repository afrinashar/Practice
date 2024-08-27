import { Dashboard } from './Dashboard'
// import { Beginner } from './codeInterview/beginner/Beginner';
// import { Question1 } from './codeInterview/beginner/Question1'
// import { Question2} from './codeInterview/beginner/Question2'
// import   Question3 from './codeInterview/beginner/Question3'
// import  Question4 from './codeInterview/beginner/Question4'
// import  Question5  from './codeInterview/beginner/Question5'
// import   Question6  from './codeInterview/beginner/Question6'
// import   Question7  from './codeInterview/beginner/Question7'
// import   Question8 from './codeInterview/beginner/Question8'
// import   Question9  from './codeInterview/beginner/Question9'
// import   Question10  from './codeInterview/beginner/Question10'
// import { Medium } from './codeInterview/medium/Medium';
// import  Question1Medium  from './codeInterview/medium/Question1'
// import  Question2Medium from './codeInterview/medium/Question2'
// import   Question3Medium from './codeInterview/medium/Question3'
// import  Question4Medium from './codeInterview/medium/Question4'
// import  Question5Medium  from './codeInterview/medium/Question5'
// import   Question6Medium  from './codeInterview/medium/Question6'
// import   Question7Medium  from './codeInterview/medium/Question7'
// import   Question8Medium from './codeInterview/medium/Question8'
// import   Question9Medium  from './codeInterview/medium/Question9'
// import   Question10Medium  from './codeInterview/medium/Question10'
// import { Advance } from './codeInterview/advance/Advance';
// import Question1Advance  from './codeInterview/advance/Question1'
// import   Question2Advance   from './codeInterview/advance/Question2'
// import   Question3Advance  from './codeInterview/advance/Question3'
// import  Question4Advance  from './codeInterview/advance/Question4'
// import  Question5Advance   from './codeInterview/advance/Question5'
// import   Question6Advance   from './codeInterview/advance/Question6'
// import   Question7Advance   from './codeInterview/advance/Question7'
// import   Question8Advance  from './codeInterview/advance/Question8'
// import   Question9Advance   from './codeInterview/advance/Question9'
// import   Question10Advance   from './codeInterview/advance/Question10'
 import { Pagination } from './Rcoder/Pagination';
  import { Progress } from './Rcoder/Progress';
// import { Components } from './assets/Components';
import  MediumCode  from './Medium/MediumCode';
//import SearchComponent from './dsa/Search';
//import   { Sort } from './dsa/Sort';
//import FibonacciCalculator from './dsa/Fibonaci';
import { Useref } from './topics/hooks/ref/Useref';
import Topics from './topics/Topics';
import Usestate from "./topics/hooks/state/Usestate"
import Usereducer from "./topics/hooks/state/Usereducer"
import Hooks from './topics/hooks/Hooks';
import Useeffect from "./topics/hooks/effect/Useeffect";
import Useeffectonce from "./topics/hooks/effect/Useeefectonce"
import Uselayout from "./topics/hooks/effect/Uselayout"
import Usecontext from "./topics/hooks/context/Usecontext"
import Usememo from "./topics/hooks/callback/Usememo";
import Usecallback from "./topics/hooks/callback/Usecallback"
import CountVowels from './dev/coding/CountVowels';
import  ArraysL  from './leetcode/75/array/ArraysL';
import { Css } from './css/Css';
import Freecodecamp from './freecodecamp/Freecodecamp';
import Projects from './gpt/projects/Projects';
import Dev from './dev/Dev';
//import { Rotatearray } from './codility/Rotatearray';
//import School from './geeksforgeeks/zoho/school/School';
//import Basic from './geeksforgeeks/zoho/basic/Basic';
const routes = [
    {
        path: '/',
        exact: true,
        element: <Dashboard/>
      },
  {
    path: '/topics',
    exact: true,
    element: <Topics/>
  },
  {
    path: '/hooks',
    exact: true,
    element: <Hooks/>
  },
  {
    path: '/hooks/usestate',
    exact: true,
    element: <Usestate/>
  },
  {
    path: '/hooks/usereducer',
    exact: true,
    element: <Usereducer/>
  },
  {
    path: '/hooks/useeffect',
    exact: true,
    element: <Useeffect/>
  },
  {
    path: '/hooks/useeffectonce',
    exact: true,
    element: <Uselayout/>
  },
  {
    path: '/hooks/uselayout',
    exact: true,
    element: <Useeffectonce/>
  },
  {
    path: '/hooks/useref',
    exact: true,
    element: <Useref/>
  },
  {
    path: '/hooks/usecallback',
    exact: true,
    element: <Usecallback/>
  },
  {
    path: '/hooks/usememo',
    exact: true,
    element: <Usememo/>
  },
  {
    path: '/hooks/usecontext',
    exact: true,
    element: <Usecontext/>
  },
  {
    path: '/hooks/useref',
    exact: true,
    element: <Useref/>
  },
  // {
  //   path: '/dsa/search',
  //   exact: true,
  //   element: <SearchComponent/>
  // },
  // {
  //   path: '/dsa/sort',
  //   exact: true,
  //   element: <Sort/>
  // },
  {
    path: '/medium',
    exact: true,
    element: <MediumCode/>
  },
 
  // {
  //   path: '/geeks/zoho/school',
  //   exact: true,
  //   element: <School/>
  // },
  // {
  //   path: '/geeks/zoho/basic',
  //   exact: true,
  //   element: <Basic/>
  // },
  {
    path: '/dev/interview/vowels',
    exact: true,
    element: <CountVowels/>
  },
  {
    path: '/dev',
    exact: true,
    element: <Dev/>
  },
  {
    path: '/leetcode/75/array',
    exact: true,
    element: <ArraysL/>
  },
  {
    path: '/css',
    exact: true,
    element: <Css/>
  },
  {
    path: '/freecodecamp',
    exact: true,
    element: <Freecodecamp/>
  },
  {
    path: '/gpt',
    exact: true,
    element: <Projects/>
  },
];

export default routes;

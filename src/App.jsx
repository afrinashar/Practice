
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'
 import routes from './Rooutes';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (<>
  <Link to={-1} className='btn btn-dark float-right' >previous</Link>
      <Link to="/" className='btn btn-dark float-right'  >Go to DASHBOARD</Link>
      <Link to={+1} className='btn btn-dark float-right' >next</Link>
       <Routes>   {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
 
  </Routes>
  </>
    
  )
}

export default App



// function runBench(cb) {
//   const start = new Date();
//   for (let i = 0; i < 100000000; i++) {
//     cb();
//   }
//   const end = new Date();
//   console.log(`It took ${end - start} ms`);
// }

// const process1 = () => Number('3.2');
// const process2 = () => parseInt('3.2', 10);

// runBench(process1); // It took 140 ms
// runBench(process2); // It took 4546 ms
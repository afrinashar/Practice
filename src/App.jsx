/* eslint-disable react/jsx-no-undef */
import { Route,Link, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import routes from './Routes'; // Ensure this path is correct
import Button from './assets/Button'; // Import custom button component
import 'bootstrap/dist/css/bootstrap.min.css';
import VscodeTextera from './assets/VscodeTextera';
 
function App() {
  const navigate = useNavigate();

  // Handler for previous and next navigation
  const handlePrevious = () => navigate(-1);
  const handleNext = () => navigate(1);

  return (
    <><div style={{}}>
        <div className="d-flex justify-content-between p-3">
        <Button onClick={handlePrevious} className="btn-dark" text="Previous" />
        <Link to="/" className="btn btn-dark">
          Go to Dashboard
        </Link>
        <Button onClick={handleNext} className="btn-dark" text="Next" />
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes></div>
    </>
  );
}

export default App;

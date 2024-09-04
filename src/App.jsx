/* eslint-disable react/jsx-no-undef */
import { Route,Link, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import routes from './Routes'; // Ensure this path is correct
import Button from './assets/Button'; // Import custom button component
import 'bootstrap/dist/css/bootstrap.min.css';
 function App() {
  const navigate = useNavigate();
   // Handler for previous and next navigation
  const handlePrevious = () => navigate(-1);
  const handleNext = () => navigate(1);
   return (
    <>
 <div style={{}}>
        <div className="d-flex justify-content-between p-3">
        <Button onClick={handlePrevious} className="dashboard-button-side" text="Previous" />
        <Link to="/" className="btn  dashboard-button">
          Go to Dashboard
        </Link>
        <Button onClick={handleNext} className="dashboard-button-side" text="Next" />
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

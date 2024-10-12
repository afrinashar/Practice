<<<<<<< HEAD
 import { Link } from 'react-router-dom';
import './CustomCard.css';

const Card = ({ title, text, link, linkText, cardStyle, buttonStyle }) => {
  return (
    <div className="custom-card" style={cardStyle}>
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-text">{text}</p>
        <Link to={link} className="custom-card-button" style={buttonStyle}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
=======
/* eslint-disable react/prop-types */
 import { Link } from 'react-router-dom';
import './CustomCard.css';

const Card = ({ title, text, link, linkText, cardStyle, buttonStyle }) => {
  return (
    <div className="custom-card" style={cardStyle}>
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-text">{text}</p>
        <Link to={link} className="custom-card-button" style={buttonStyle}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574

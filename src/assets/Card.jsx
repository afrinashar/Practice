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

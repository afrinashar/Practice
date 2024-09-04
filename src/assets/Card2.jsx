/* eslint-disable react/prop-types */
// Example Card.jsx
 
const Card = ({ title, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {title}
        </div>
    );
};

export default Card;

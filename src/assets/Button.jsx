 import './Button.css'; 

const Button = ({ text, onClick, style, className }) => {
  return (
    <>
    <button
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
    >
      {text}
    </button>
  </>);
};

export default Button;

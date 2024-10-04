import '../App.css';
const Button = ({ onClick, type, children, className }) => {
    return (
      <button onClick={onClick} type={type} className={className}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
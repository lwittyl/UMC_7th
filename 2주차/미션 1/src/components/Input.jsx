import '../App.css';
const Input = ({ value, onChange, placeholder, className }) => {
    return (
      <input className={className}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  };
  
  export default Input;
  
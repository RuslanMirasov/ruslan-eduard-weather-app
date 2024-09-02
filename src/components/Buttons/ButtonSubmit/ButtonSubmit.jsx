import "./ButtonSubmit.css";

const ButtonSubmit = ({ children }) => {
  return (
    <button type="submit" className="button-submit">
      {children}
    </button>
  );
};

export default ButtonSubmit;

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="./">
        <h1 className="header__title">
          <span>🏖️</span>
          <p>Weather App</p>
        </h1>
      </a>
    </header>
  );
};

export default Header;

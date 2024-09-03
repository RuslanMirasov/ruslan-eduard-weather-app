import "./Main.css";

const Main = ({ isGoodWeather, isError, children }) => {
  return (
    <main
      className={`main ${!isGoodWeather ? "main--bad" : ""} ${
        isError ? "main--error" : ""
      }`}
    >
      {children}
    </main>
  );
};

export default Main;

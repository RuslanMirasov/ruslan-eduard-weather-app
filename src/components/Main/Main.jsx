import "./Main.css";

const Main = ({ isGoodWeather, children }) => {
  return (
    <main className={`main ${!isGoodWeather ? "main--bad" : ""}`}>
      {children}
    </main>
  );
};

export default Main;

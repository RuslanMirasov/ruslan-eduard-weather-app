import "./App.css";
import { Footer, Header, Main, Form, List, Weather } from "./components";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Weather />
        <List />
        <Form />
      </Main>
      <Footer />
    </>
  );
}

export default App;

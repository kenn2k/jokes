import { useContext } from "react";
import "./App.scss";
import Container from "./UI/Container";
import Header from "./components/header/Header";
import Joke from "./components/jokes/Joke";
import { TypeContext } from "./context/Context";

export interface IJoke {
  id: number;
  type: string;
  punchline: string;
  setup: string;
}

function App() {
  const { isLoading } = useContext(TypeContext);
  return (
    <Container>
      <Header />
      <div className="app">
        {!isLoading && <Joke />}
        {isLoading && <h2>waiting for a joke...</h2>}
      </div>
    </Container>
  );
}

export default App;

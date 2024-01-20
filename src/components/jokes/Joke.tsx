import { useContext } from "react";
import JokeItem from "./JokeItem";
import { TypeContext } from "../../context/Context";

const Joke = () => {
  const { jokes } = useContext(TypeContext);

  return (
    <div className="joke">
      <p>Joke</p>
      <div className="joke__content">
        <ul>
          {jokes.map((joke) => (
            <JokeItem
              key={joke.id}
              id={joke.id}
              punchline={joke.punchline}
              setup={joke.setup}
              type={joke.type}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Joke;

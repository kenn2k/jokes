import { IJoke } from "../../App";
import "./joke.scss";

interface IJokeItem extends IJoke {}
const JokeItem = ({ setup, punchline, type }: IJokeItem) => {
  return (
    <div className="item">
      <div className="item__content">
        <li>
          <div className="item__container">
            <div className="item__type">
              <p>{type}</p>
            </div>
            <div className="type__setup">
              <h1>{setup}</h1>
            </div>
            <div className="item__punchline">
              <h3>{punchline}</h3>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default JokeItem;

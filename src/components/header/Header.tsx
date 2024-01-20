import { useContext } from "react";
import "./header.scss";
import { TypeContext } from "../../context/Context";
import axios from "axios";
const Header = () => {
  const { setJokes, setIsLoading } = useContext(TypeContext);

  const handleGetJokes = () => {
    try {
      setIsLoading(true);
      axios

        .get("https://official-joke-api.appspot.com/random_ten")
        .then((response) => {
          console.log(response);
          // const allJokes = response.data;
          // setJokes(allJokes);
          setJokes(response.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };
  return (
    <div className="header">
      <button className="header__button" onClick={handleGetJokes}>
        Click to Get Jokes!
      </button>
    </div>
  );
};

export default Header;

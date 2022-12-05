import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./search.module.scss";

const Search: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      navigate(`/${inputValue}`);
    }
  };

  return (
    <main className={style.main}>
      <input
        className={style.input}
        placeholder="Enter a github username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Link className={style.anchor} to={`/${inputValue}`}>
        Get user details!
      </Link>
    </main>
  );
};

export default Search;

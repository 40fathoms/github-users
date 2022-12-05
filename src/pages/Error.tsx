import { Link } from "react-router-dom";
import style from "./search.module.scss";

const Error: React.FC = (): JSX.Element => {
  return (
    <main className={style.main}>
      <p>Oops, something wrong happened.</p>
      <Link className={style.anchor} to={`/`}>
        Return to the search page
      </Link>
    </main>
  );
};

export default Error;

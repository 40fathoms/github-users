import CardFork from "../../SVGs/CardFork";
import CardStar from "../../SVGs/CardStar";
import type { repositoryType } from "../../types/repositoryType";
import style from "./index.module.scss";

type RepoCardProps = {
  repo: repositoryType;
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }): JSX.Element => {
  return (
    <div className={style.cardContainer}>
      <p className={style.name}>
        {repo.owner} /{" "}
        <a
          href={`https://github.com/${repo.owner}/${repo.name}`}
          target="_blank"
          rel="noreferrer"
        >
          {repo.name}
        </a>
      </p>

      <p className={style.description}>{repo.description}</p>

      <div className={style.stats}>
        {repo?.language ? <p>{repo?.language}</p> : null}
        {repo?.stars ? (
          <p>
            <CardStar /> {repo?.stars}
          </p>
        ) : null}
        {repo?.forks ? (
          <p>
            <CardFork /> {repo?.forks}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default RepoCard;

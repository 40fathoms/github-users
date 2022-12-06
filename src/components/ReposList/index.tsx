import { useEffect, useState } from "react";
import type { repositoryType } from "../../types/repositoryType";
import RepoCard from "../RepoCard";
import style from "./index.module.scss";

type ReposListProps = {
  repos: repositoryType[];
  reposLanguages: string[];
};

const ReposList: React.FC<ReposListProps> = ({
  repos,
  reposLanguages,
}): JSX.Element => {
  const defaultRepos = repos;

  const [filteredRepos, setFilteredRepos] =
    useState<repositoryType[]>(defaultRepos);

  useEffect(() => {
    setFilteredRepos(repos);
  }, [repos]);

  return (
    <div className={style.reposContainer}>
      {filteredRepos.map((repo, index) => (
        <RepoCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default ReposList;

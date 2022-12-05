import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHTTP from "../../hooks/useHTTP";
import { repositoryType } from "../../types/repositoryType";
import style from "./index.module.scss";

const UserRepos: React.FC = (): JSX.Element => {
  const { userName } = useParams();
  const [repos, setRepos] = useState<repositoryType[]>([]);
  const [starred, setStarred] = useState<repositoryType[]>([]);

  const [reposLanguages, setReposLanguages] = useState<string[]>([]);
  const [starredLanguages, setStarredLanguages] = useState<string[]>([]);
  console.log("repos: ", repos);
  console.log("starred: ", starred);
  console.log("reposLanguages: ", reposLanguages);
  console.log("starredLanguages: ", starredLanguages);

  const { sendRequest: getUserRepos } = useHTTP();
  const { sendRequest: getUserStarred } = useHTTP();

  useEffect(() => {
    getUserRepos(
      { url: `https://api.github.com/users/${userName}/repos` },
      manageRepos
    );

    getUserStarred(
      { url: `https://api.github.com/users/${userName}/starred` },
      manageStarred
    );
  }, []);

  const formatRepos = (repo: any) => ({
    owner: repo?.owner?.login,
    name: repo?.name,
    description: repo?.description,
    stars: repo?.stargazers_count,
    forks: repo?.forks,
    language: repo?.language,
    archived: repo?.archived,
    forked: repo?.fork,
  });

  const manageRepos = (repos: repositoryType[]) => {
    const reposLanguages: string[] = [];

    const formattedRepos = repos.map((repo: repositoryType) => {
      if (!reposLanguages.includes(repo?.language) && repo?.language) {
        reposLanguages.push(repo?.language);
      }

      return formatRepos(repo);
    });

    setRepos(formattedRepos);
    setReposLanguages(reposLanguages);
  };

  const manageStarred = (starred: repositoryType[]) => {
    const starredLanguages: string[] = [];

    const formattedStarred = starred.map((repo: repositoryType) => {
      if (!starredLanguages.includes(repo?.language) && repo?.language) {
        starredLanguages.push(repo?.language);
      }

      return formatRepos(repo);
    });

    setStarred(formattedStarred);
    setStarredLanguages(starredLanguages);
  };

  return <div className={style.container}></div>;
};

export default UserRepos;

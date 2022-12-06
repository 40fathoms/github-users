import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHTTP from "../../hooks/useHTTP";
import Book from "../../SVGs/Book";
import Star from "../../SVGs/Star";
import { repositoryType } from "../../types/repositoryType";
import RepoTypeInput from "../RepoTypeInput";
import style from "./index.module.scss";

const UserRepos: React.FC = (): JSX.Element => {
  const { userName } = useParams();

  const [repoTypeDisplayed, setRepoTypeDisplayed] = useState("repos");

  const [repos, setRepos] = useState<repositoryType[]>([]);
  const [starred, setStarred] = useState<repositoryType[]>([]);
  const [reposLanguages, setReposLanguages] = useState<string[]>([]);
  const [starredLanguages, setStarredLanguages] = useState<string[]>([]);

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

  return (
    <div className={style.container}>
      <div className={style.inputsField}>
        <RepoTypeInput
          icon={<Book />}
          value="repos"
          title="Repositories"
          amount={repos.length}
          repoTypeDisplayed={repoTypeDisplayed}
          setRepoTypeDisplayed={setRepoTypeDisplayed}
        />

        <RepoTypeInput
          icon={<Star />}
          value="starred"
          title="Starred"
          amount={starred.length}
          repoTypeDisplayed={repoTypeDisplayed}
          setRepoTypeDisplayed={setRepoTypeDisplayed}
        />
      </div>
    </div>
  );
};

export default UserRepos;

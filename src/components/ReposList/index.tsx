import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import MagnifyingGlass from "../../SVGs/MagnifyingGlass";
import type { repositoryType } from "../../types/repositoryType";
import RepoCard from "../RepoCard";
import RepoFilterButton from "../RepoFilterButton";
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

  const [dispĺayMobileButtons, setDisplayMobileButtons] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue, 300);

  const [filteredRepos, setFilteredRepos] =
    useState<repositoryType[]>(defaultRepos);

  useEffect(() => {
    setFilteredRepos(repos);
  }, [repos]);

  useEffect(() => {
    setFilteredRepos((repos) => {
      if (!debouncedValue) {
        return defaultRepos;
      }

      const filteredRepos = repos.filter((repo) =>
        repo.name.includes(debouncedValue)
      );
      return filteredRepos;
    });
  }, [debouncedValue]);

  return (
    <div className={style.reposContainer}>
      <div className={style.filterField}>
        <div className={style.input}>
          <div
            className={style.mobileButtons}
            style={{
              display: dispĺayMobileButtons ? "flex" : "none",
            }}
          >
            <RepoFilterButton label="Type" />
            <RepoFilterButton label="Language" />
          </div>
          <MagnifyingGlass />
          <input
            placeholder="Search here"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setDisplayMobileButtons(false)}
            onBlur={() => setDisplayMobileButtons(true)}
          />
        </div>

        <div className={style.buttons}>
          <RepoFilterButton label="Type" />
          <RepoFilterButton label="Language" />
        </div>
      </div>

      {filteredRepos.map((repo, index) => (
        <RepoCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default ReposList;

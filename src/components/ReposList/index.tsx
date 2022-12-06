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

  const types = [
    { value: "forked", label: "Forked" },
    { value: "archived", label: "Archived" },
  ];

  const languages = reposLanguages.map((lang) => ({
    value: lang,
    label: lang,
  }));

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

  const filterType = (filterArray: string[]) => {
    setFilteredRepos((repos) => {
      if (filterArray.includes("all")) {
        return defaultRepos;
      }

      const filteredRepos = repos.filter(
        (repo) =>
          (repo.archived && filterArray.includes("archived")) ||
          (repo.forked && filterArray.includes("forked"))
      );

      return filteredRepos;
    });
  };

  const filterLanguage = (filterArray: string[]) => {
    setFilteredRepos((repos) => {
      if (filterArray.includes("all")) {
        return defaultRepos;
      }

      const filteredRepos = repos.filter((repo) =>
        filterArray.includes(repo.language)
      );

      return filteredRepos;
    });
  };

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
            <RepoFilterButton label="Type" data={types} action={filterType} />
            <RepoFilterButton
              label="Language"
              data={languages}
              action={filterLanguage}
            />
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
          <RepoFilterButton label="Type" data={types} action={filterType} />
          <RepoFilterButton
            label="Language"
            data={languages}
            action={filterLanguage}
          />
        </div>
      </div>

      {filteredRepos.map((repo, index) => (
        <RepoCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default ReposList;

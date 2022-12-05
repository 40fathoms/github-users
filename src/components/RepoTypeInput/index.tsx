import type { Dispatch, SetStateAction } from "react";
import style from "./index.module.scss";

type RepoTypeInputProps = {
  value: string;
  title: string;
  amount: number;
  repoTypeDisplayed: string;
  setRepoTypeDisplayed: Dispatch<SetStateAction<string>>;
};

const RepoTypeInput: React.FC<RepoTypeInputProps> = ({
  value,
  title,
  amount,
  repoTypeDisplayed,
  setRepoTypeDisplayed,
}): JSX.Element => {
  return (
    <>
      <input
        type="radio"
        name="repoType"
        id={value}
        value={value}
        checked={repoTypeDisplayed === value}
        onChange={(e) => setRepoTypeDisplayed(e.target.value)}
      />
      <label htmlFor={value}>
        {title} {amount}
      </label>
    </>
  );
};

export default RepoTypeInput;

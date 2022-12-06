import type { Dispatch, SetStateAction } from "react";
import style from "./index.module.scss";

type RepoTypeInputProps = {
  icon: JSX.Element;
  value: string;
  title: string;
  amount: number;
  repoTypeDisplayed: string;
  setRepoTypeDisplayed: Dispatch<SetStateAction<string>>;
};

const RepoTypeInput: React.FC<RepoTypeInputProps> = ({
  icon,
  value,
  title,
  amount,
  repoTypeDisplayed,
  setRepoTypeDisplayed,
}): JSX.Element => {
  const isInputChecked = repoTypeDisplayed === value;

  return (
    <>
      <input
        style={{ display: "none" }}
        type="radio"
        name="repoType"
        id={value}
        value={value}
        checked={isInputChecked}
        onChange={(e) => setRepoTypeDisplayed(e.target.value)}
      />
      <label
        className={
          isInputChecked ? `${style.label} ${style.checked}` : `${style.label}`
        }
        htmlFor={value}
      >
        {icon} <p>{title}</p> <p>{amount}</p>
      </label>
    </>
  );
};

export default RepoTypeInput;

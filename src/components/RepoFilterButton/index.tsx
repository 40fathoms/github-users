import Arrow from "../../SVGs/Arrow";
import style from "./index.module.scss";

type RepoFilterButtonProps = {
  label: string;
};

const RepoFilterButton: React.FC<RepoFilterButtonProps> = ({
  label,
}): JSX.Element => {
  return (
    <button className={style.button}>
      <Arrow /> {label}
    </button>
  );
};

export default RepoFilterButton;

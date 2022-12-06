import { useEffect, useRef, useState } from "react";
import Arrow from "../../SVGs/Arrow";
import style from "./index.module.scss";

type RepoFilterButtonProps = {
  label: string;
  data: {
    value: string;
    label: string;
  }[];
  action: (data: string[]) => void;
};

const RepoFilterButton: React.FC<RepoFilterButtonProps> = ({
  label,
  data,
  action,
}): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);
  const filterOptions = useRef<HTMLDivElement | null>(null);

  const dataToManage: string[] = [];

  const handleClickOutside = (e: Event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (filterOptions && !filterOptions?.current?.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleManageData = (e: string) => {
    const checkboxIndex = dataToManage.findIndex((data) => data === e);

    if (!Number.isFinite(checkboxIndex) || checkboxIndex === -1) {
      dataToManage.push(e);
      return;
    }

    dataToManage.splice(checkboxIndex, 1);
    return;
  };

  const handleFilter = () => {
    action(dataToManage);
    setShowDropdown(false);
  };

  return (
    <div className={style.filter}>
      <button
        className={style.button}
        onClick={() => setShowDropdown((previous) => !previous)}
      >
        <Arrow /> {label}
      </button>

      {showDropdown && (
        <div ref={filterOptions} className={style.checkboxes}>
          <label>
            <input
              type="checkbox"
              name={`${label}-filter`}
              value="all"
              onChange={(e) => handleManageData(e.target.value)}
            />
            All
          </label>

          {data.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  name={`${label}-filter`}
                  value={item.value}
                  onChange={(e) => handleManageData(e.target.value)}
                />
                {item.label}
              </label>
            );
          })}

          <button
            className={style.button}
            style={{ justifyContent: "center" }}
            onClick={handleFilter}
          >
            Filtrar
          </button>
        </div>
      )}
    </div>
  );
};

export default RepoFilterButton;

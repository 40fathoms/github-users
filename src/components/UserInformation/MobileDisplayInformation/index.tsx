import { useState } from "react";
import Arrow from "../../../SVGs/Arrow";
import DisplayInformation from "../DisplayInformation";
import style from "./index.module.scss";

type MobileDisplayInformationProps = {
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
};

const MobileDisplayInformation: React.FC<MobileDisplayInformationProps> = ({
  company,
  location,
  blog,
  twitter_username,
}): JSX.Element => {
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);

  return (
    <div className={style.container}>
      <p className={style.text}>Informações adicionais</p>
      <button
        className={`${
          isDisplayVisible
            ? `${style.button} ${style.active}`
            : `${style.button}`
        }`}
        onClick={() => setIsDisplayVisible((previous) => !previous)}
      >
        <Arrow />
      </button>
      {isDisplayVisible && (
        <div className={style.display}>
          <DisplayInformation
            // company={company}
            company="asas"
            location={location}
            blog={blog}
            twitter_username={twitter_username}
          />
        </div>
      )}
    </div>
  );
};

export default MobileDisplayInformation;

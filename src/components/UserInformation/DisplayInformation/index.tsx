import Company from "../../../SVGs/Company";
import Link from "../../../SVGs/Link";
import Location from "../../../SVGs/Location";
import Twitter from "../../../SVGs/Twitter";
import style from "./index.module.scss";

type DisplayInformationProps = {
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
};

const DisplayInformation: React.FC<DisplayInformationProps> = ({
  company,
  location,
  blog,
  twitter_username,
}): JSX.Element => {
  return (
    <ul className={style.list}>
      {company && (
        <li>
          <div style={{ width: "1.6rem" }}>
            <Company />
          </div>
          <span className={style.listContent}>{company}</span>
        </li>
      )}
      {location && (
        <li>
          <div style={{ width: "1.6rem" }}>
            <Location />
          </div>
          <span className={style.listContent}>{location}</span>
        </li>
      )}
      {blog && (
        <li>
          <div style={{ width: "1.6rem" }}>
            <Link />
          </div>
          <a
            className={style.listContent}
            href={blog}
            target="_blank"
            rel="noreferrer"
          >
            {blog}
          </a>
        </li>
      )}
      {twitter_username && (
        <li>
          <div style={{ width: "1.6rem" }}>
            <Twitter />
          </div>
          <a
            className={style.listContent}
            href={`https://www.twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            {twitter_username}
          </a>
        </li>
      )}
    </ul>
  );
};

export default DisplayInformation;

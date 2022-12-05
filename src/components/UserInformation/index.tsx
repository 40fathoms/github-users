import { userDetailType } from "../../types/userDetailType";
import DisplayInformation from "./DisplayInformation";
import style from "./index.module.scss";
import MobileDisplayInformation from "./MobileDisplayInformation";

type UserInformationProps = {
  userDetails: userDetailType;
};

const UserInformation: React.FC<UserInformationProps> = ({
  userDetails,
}): JSX.Element => {
  const { avatar_url, bio, blog, company, location, name, twitter_username } =
    userDetails;

  const isDisplayInformationVisible =
    Boolean(company) ||
    Boolean(blog) ||
    Boolean(location) ||
    Boolean(twitter_username);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          title={`${name} avatar`}
          loading="lazy"
        />
        <div className={style.emojiContainer}>😎</div>
      </div>

      {name && <h2 className={style.name}>{name}</h2>}
      {bio && <p className={style.bio}>{bio}</p>}

      {isDisplayInformationVisible && (
        <>
          <MobileDisplayInformation
            company={company}
            location={location}
            blog={blog}
            twitter_username={twitter_username}
          />

          <div className={style.desktopInformation}>
            <DisplayInformation
              company={company}
              location={location}
              blog={blog}
              twitter_username={twitter_username}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserInformation;

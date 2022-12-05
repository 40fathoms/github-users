import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import UserInformation from "../components/UserInformation";
import UserRepos from "../components/UserRepos";
import useHTTP from "../hooks/useHTTP";
import GithubLogo from "../SVGs/GithubLogo";
import { userDetailType } from "../types/userDetailType";
import style from "./userDetail.module.scss";

const UserDetail: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { userName } = useParams();

  const [userDetails, setUserDetails] = useState<userDetailType | null>(null);

  const { isLoading: loadingUserData, sendRequest: getUserDetails } = useHTTP();

  useEffect(() => {
    getUserDetails(
      {
        url: `https://api.github.com/users/${userName}`,
      },
      manageUserDetail,
      redirectOnError
    );
  }, []);

  const redirectOnError = () => {
    navigate("/error");
  };

  const manageUserDetail = (fetchedDetails: userDetailType) => {
    const formattedData = {
      name: fetchedDetails.name,
      bio: fetchedDetails.bio,
      company: fetchedDetails.company,
      location: fetchedDetails.location,
      blog: fetchedDetails.blog,
      twitter_username: fetchedDetails.twitter_username,
      avatar_url: fetchedDetails.avatar_url,
    };

    setUserDetails(formattedData);
  };

  if (loadingUserData || !userDetails) {
    return <Loading />;
  }

  return (
    <>
      <header className={style.header}>
        <GithubLogo />
        <span>/</span>
        <span>Profile</span>
      </header>

      <main className={style.main}>
        <UserInformation userDetails={userDetails} />
        <UserRepos />
      </main>
    </>
  );
};

export default UserDetail;

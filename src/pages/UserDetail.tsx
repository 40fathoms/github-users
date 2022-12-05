import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import UserInformation from "../components/UserInformation";
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
    // navigate("/error");
  };

  const manageUserDetail = (fetchedDetailss: any) => {
    const fetchedDetails = {
      login: "40fathoms",
      id: 90774770,
      node_id: "MDQ6VXNlcjkwNzc0Nzcw",
      avatar_url: "https://avatars.githubusercontent.com/u/90774770?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/40fathoms",
      html_url: "https://github.com/40fathoms",
      followers_url: "https://api.github.com/users/40fathoms/followers",
      following_url:
        "https://api.github.com/users/40fathoms/following{/other_user}",
      gists_url: "https://api.github.com/users/40fathoms/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/40fathoms/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/40fathoms/subscriptions",
      organizations_url: "https://api.github.com/users/40fathoms/orgs",
      repos_url: "https://api.github.com/users/40fathoms/repos",
      events_url: "https://api.github.com/users/40fathoms/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/40fathoms/received_events",
      type: "User",
      site_admin: false,
      name: "João Paulo Martins",
      company: null,
      blog: "https://www.linkedin.com/in/jo%C3%A3o-paulo-m-013b211a0/",
      location: "Santa Catarina, Brazil",
      email: null,
      hireable: true,
      bio: "Software Developer",
      twitter_username: "40fathoms",
      public_repos: 41,
      public_gists: 0,
      followers: 1,
      following: 5,
      created_at: "2021-09-15T13:13:54Z",
      updated_at: "2022-10-29T22:53:21Z",
    };

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
        <p>b</p>
      </main>
    </>
  );
};

export default UserDetail;

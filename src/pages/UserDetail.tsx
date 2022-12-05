import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useHTTP from "../hooks/useHTTP";
import { userDetailType } from "../types/userDetailType";
import style from "./userDetail.module.scss";

const UserDetail: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { userName } = useParams();

  const [userDetails, setUserDetails] = useState<userDetailType | null>(null);
  console.log("userDetails: ", userDetails);

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

  const manageUserDetail = (fetchedDetails: any) => {
    const formattedData = {
      name: fetchedDetails.name,
      bio: fetchedDetails.bio,
      company: fetchedDetails.company,
      location: fetchedDetails.location,
      blog: fetchedDetails.blog,
      twitter_username: fetchedDetails.twitter_username,
    };

    setUserDetails(formattedData);
  };

  if (loadingUserData || !userDetails) {
    return <Loading />;
  }

  return (
    <>
      <p>a</p>
    </>
  );
};

export default UserDetail;

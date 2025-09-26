"use client";
import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { UserResponseType } from "./UserContext";
import RequestAPI from "@/app/tokens/RequestAPI";
import UpdateTokens from "@/app/tokens/UpdateTokens";
import { useRouter } from "next/navigation";
import MessageModal from "@/app/components/MessageModal";
import { getAccessToken, getRefreshToken } from "@/app/tokens/GetTokens";

export default function UserProvider({ children }: { children: ReactNode }) {
  // creating a user object that holds the currently logged in user, tied to a state thus easily changing once the api request is made
  const systemUser: UserResponseType = {
    username: "...",
    email: "...",
    user_profile: { is_admin: false, phone_number: "" },
  };
  const [user, setUser] = useState(systemUser);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  function closeModal() {
    setModalOpened(false);
  }

  const axios = RequestAPI();
  const router = useRouter();

  const [accessCount, setAccessCount] = useState<number>(0);

  function updateUser({
    username,
    email,
    first_name,
    last_name,
    user_profile,
  }: UserResponseType) {
    systemUser.username = username;
    systemUser.email = email;
    systemUser.first_name = first_name;
    systemUser.last_name = last_name;

    systemUser.user_profile.is_admin = user_profile.is_admin;
    systemUser.user_profile.phone_number = user_profile.phone_number;

    setUser(systemUser);
  }

  function checkAccess() {
    const accessToken = getAccessToken();
    // use the current access token to get the currently logged in user
    axios
      .get("current_user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        // if its successful update the data
        console.log(response.status);
        updateUser(response.data.user);
      })
      .catch(() => {
        // if it's unsuccessful just check if the refresh token is valid
        checkRefresh();
      });
  }

  function checkRefresh() {
    // check the refresh token, so it can get new access token
    const refreshToken = getRefreshToken();
    axios
      .post("token/refresh", { refresh: refreshToken })
      .then((response) => {
        // if its valid, then update the access token and go back to fetch the user
        const new_access_token = response?.data?.access;
        UpdateTokens(new_access_token);
        checkAccess();
      })
      .catch(() => {
        // if the refresh token is still invaid then go ack to login to get new set of tokens.
        router.push("/login");
      });
  }

  useEffect(() => {
    // when the page mounts check if the access code is valid by calling the function to fetch the current user
    checkAccess();
    // NOTE: The reason I didn't just refresh the token is because the user might just be coming from the login page

    // next step is to try refreshing the access token after a while
    setInterval(() => {}, 2000);
  }, []);
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
      <MessageModal
        message="Testing"
        extra_msg={"This is a test"}
        open={modalOpened}
        modalCloser={closeModal}
        type="success"
      />
    </UserContext.Provider>
  );
}

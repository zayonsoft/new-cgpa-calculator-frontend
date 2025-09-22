"use client";
import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { UserResponseType } from "./UserContext";
import RequestAPI from "@/app/tokens/RequestAPI";
import UpdateTokens from "@/app/tokens/UpdateTokens";
import { useRouter } from "next/navigation";

export default function UserProvider({ children }: { children: ReactNode }) {
  const systemUser: UserResponseType = {
    username: "",
    email: "",
    user_profile: { is_admin: false, phone_number: "" },
  };
  const [user, setUser] = useState(systemUser);

  const axios = RequestAPI();
  const router = useRouter();

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
    const accessToken = localStorage.getItem("cgpa_calc_access");
    axios
      .get("current_user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
        updateUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
        checkRefresh();
      });
  }

  function checkRefresh() {
    const refreshToken = localStorage.getItem("cgpa_calc_refresh");
    axios
      .post("token/refresh", { refresh: refreshToken })
      .then((response) => {
        const new_access_token = response?.data?.access;
        UpdateTokens(new_access_token);
        checkAccess();
      })
      .catch(() => {
        router.push("/login");
      });
  }

  useEffect(() => {
    checkAccess();
  }, []);
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

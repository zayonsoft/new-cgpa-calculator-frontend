/*
import { useEffect } from "react";
import RequestAPI from "./RequestAPI";
import { useRouter } from "next/navigation";
import UpdateTokens from "./UpdateTokens";
*/
import { redirect } from "next/navigation";

export default function RefreshToken() {
  redirect("/dashboard");
  /*
  const router = useRouter();
  const axios = RequestAPI();
  useEffect(() => {
    const refresh_token = localStorage.getItem("cgpa_calc_refresh");
    axios
      .post("token/refresh", { refresh: refresh_token })
      .then((response) => {
        const new_access_token = response?.data?.access;
        const new_refresh_token = response?.data?.refresh;
        UpdateTokens(new_access_token);
        router.push("/dashboard");
      })
      .catch((err) => {
        //any error should go back to login
        console.log(err);
        router.push("/login");
      });
  });
  */
}

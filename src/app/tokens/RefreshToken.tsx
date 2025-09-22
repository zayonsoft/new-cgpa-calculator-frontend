"use client";
import { useEffect } from "react";
import RequestAPI from "./RequestAPI";
import { useRouter } from "next/navigation";
import UpdateTokens from "./UpdateTokens";

export default function RefreshToken() {
  const router = useRouter();
  const axios = RequestAPI();
  useEffect(() => {
    const refresh_token = localStorage.getItem("cgpa_calc_refresh");
    axios
      .post("/token/refresh", { refresh: refresh_token })
      .then((response) => {
        const new_access_token = response?.data?.access;
        UpdateTokens(new_access_token);
        router.push("/dashboard");
      })
      .catch(() => {
        //any error should go back to login
        router.push("/login");
      });
  });
}

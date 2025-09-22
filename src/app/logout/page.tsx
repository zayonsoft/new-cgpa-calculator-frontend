"use client";
import { useEffect } from "react";
import RequestAPI from "../tokens/RequestAPI";
import { useRouter } from "next/navigation";

export default function Logout() {
  const axios = RequestAPI();
  const router = useRouter();
  useEffect(() => {
    const refresh_token = localStorage.getItem("cgpa_calc_refresh");
    axios
      .post("token/logout", { refresh: refresh_token })
      .then((response) => {
        router.push("/login");
      })
      .catch(() => {
        router.push("/login");
      });
  });
}

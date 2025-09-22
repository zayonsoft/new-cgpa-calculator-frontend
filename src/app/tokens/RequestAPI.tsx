"use client";
import axios from "axios";
import { useEffect } from "react";

export default function RequestAPI() {
  const APICall = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  });

  return APICall;
}

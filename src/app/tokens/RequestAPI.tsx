import axios from "axios";

export default function RequestAPI() {
  const APICall = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  });

  console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL);

  return APICall;
}

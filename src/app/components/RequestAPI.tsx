import axios from "axios";

export default function RequestAPI() {
  const APICall = axios.create({
    baseURL: "https://localhost:8000/api",
  });

  return APICall;
}

import axios from "axios";
import { signOut } from "next-auth/react";

const BASE_URL = "https://api.spotify.com/v1";

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
});

axiosAuth.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    if (error.statusCode == 403) {
      return signOut();
    } else {
      return console.log("ERROR");
    }

    // Handle response errors here
  }
);

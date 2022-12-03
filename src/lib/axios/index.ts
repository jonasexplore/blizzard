import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-brchallenges.vercel.app/api/blizzard",
});

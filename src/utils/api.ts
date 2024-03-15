import User from "../User.ts";

const API_URL = "http://localhost:3000/";

export const getProviders = async () => {
  const response = await fetch(`${API_URL}users`);
  const provider = await response.json();
  return provider as User[];
};

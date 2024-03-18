import User from "../User.ts";
import Job from "../Job.ts";
import Member from "../Member.ts";

const API_URL = "http://localhost:3000/";

export const getProviders = async () => {
  const response = await fetch(`${API_URL}users`);
  const provider = await response.json();
  return provider as User[];
};
export const getJobs = async () => {
  const response = await fetch(`${API_URL}jobs`);
  const provider = await response.json();
  return provider as Job[];
};
const getMember = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}members`);
  const provider = await response.json();
  provider as Member[];
  return provider.find(
    (element: Member) =>
      element.email === email && element.password === password
  );
};

export const login = async (email: string, password: string) => {
  const response = await getMember(email, password);
  if (response) {
    return { message: "Login successful", token: "Token", httpState: 200 };
  } else {
    return { message: "Login Error", token: "Token", httpState: 401 };
  }
  console.log(email, password);
  // const ;
};

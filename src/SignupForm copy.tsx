import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLastpass } from "react-icons/si";

import { AreaContext, JobListContext, ToastMessageContext } from "./App.tsx";
import { login } from "./utils/api.ts";

function SignupForm() {
  const [, setCookie] = useCookies(["token"]);
  const [, setIsError] = useState(false);
  const { area } = useContext(AreaContext);
  const { jobList } = useContext(JobListContext);
  const { setToastMessage } = useContext(ToastMessageContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const { message, token, httpState } = await login(email, password);
    if (httpState) {
      setCookie("token", token);
      setToastMessage(message);
      const authModal = document.getElementById(
        "my_modal_1"
      ) as HTMLDialogElement;
      authModal.close();
    } else {
      setIsError(true);
      setErrorMessage(errorMessage);
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 3000);
    }
  };
  return (
    <form method="post" className="space-y-4" onSubmit={handleSubmit}>
      <h1>Inscription</h1>
      <div className="">
        <label className="input input-bordered flex items-center gap-2">
          <IoIosMail />

          <input
            type="text"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="fullname"
            className="grow"
            placeholder="Full Name"
          />
        </label>
        <div className=" flex justify-center">
          <select className="select select-info w-full max-w-xs">
            <option selected>Tout</option>
            {jobList.map((element) => {
              return (
                <option key={element.id} value={element.name}>
                  {element.name}
                </option>
              );
            })}
          </select>
          <select className="select select-info w-full max-w-xs">
            <option selected>Tout</option>
            {area.map((element) => {
              return <option value={element}>{element}</option>;
            })}
          </select>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <FaPhoneAlt />
          <input
            type="tel"
            name="telephone"
            className="grow"
            placeholder="Telephone"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <SiLastpass />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>{" "}
        <label className="input input-bordered flex items-center gap-2">
          <SiLastpass />
          <input
            type="password"
            name="password2"
            className="grow"
            placeholder="Confirm Password"
          />
        </label>
      </div>
      <button className="btn btn-success" type="submit">
        S'inscrire
      </button>
    </form>
  );
}

export default SignupForm;

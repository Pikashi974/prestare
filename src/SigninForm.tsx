import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { ToastMessageContext } from "./App.tsx";
import { login } from "./utils/api.ts";
import { IoIosMail } from "react-icons/io";
import { SiLastpass } from "react-icons/si";

function SigninForm() {
  const [, setCookie] = useCookies(["token"]);

  const [, setIsError] = useState(false);
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
      <h1>Connexion</h1>
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
          <SiLastpass />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>
      </div>
      <button className="btn btn-success" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default SigninForm;

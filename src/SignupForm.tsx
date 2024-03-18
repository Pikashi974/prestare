import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLastpass } from "react-icons/si";
import { SignupFormField } from "./SignupFormField.tsx";
import { FormSignup, SignupSchema } from "./schema/SignupSchema.tsx";
import { zodResolver } from "@hookform/resolvers/zod";

import { AreaContext, JobListContext, ToastMessageContext } from "./App.tsx";
import { login } from "./utils/api.ts";
import { useForm } from "react-hook-form";

function SignupForm() {
  const [, setCookie] = useCookies(["token"]);
  const [, setIsError] = useState(false);
  const { area } = useContext(AreaContext);
  const { jobList } = useContext(JobListContext);
  const { setToastMessage } = useContext(ToastMessageContext);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormSignup>({
    resolver: zodResolver(SignupSchema),
  });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const email = e.currentTarget.email.value;
  //   const password = e.currentTarget.password.value;
  //   const { message, token, httpState } = await login(email, password);
  //   if (httpState) {
  //     setCookie("token", token);
  //     setToastMessage(message);
  //     const authModal = document.getElementById(
  //       "my_modal_1"
  //     ) as HTMLDialogElement;
  //     authModal.close();
  //   } else {
  //     setIsError(true);
  //     setErrorMessage(errorMessage);
  //     setTimeout(() => {
  //       setIsError(false);
  //       setErrorMessage("");
  //     }, 3000);
  //   }
  // };
  return (
    <form method="post" className="space-y-4">
      {/* onSubmit={handleSubmit}> */}
      <h1>Inscription</h1>
      <div className="">
        <SignupFormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
          icon={<IoIosMail />}
        />
        <SignupFormField
          type="text"
          placeholder="Full name"
          name="username"
          register={register}
          error={errors.username}
          icon={<FaUser />}
        />
        <div className="flex justify-center">
          <SignupFormField
            type="select"
            placeholder="Job"
            name="job"
            register={register}
            error={errors.job}
            options={jobList}
          />
          <SignupFormField
            type="select"
            placeholder="Area"
            name="area"
            register={register}
            error={errors.area}
            options={area.map((obj) => {
              return { id: obj, name: obj, value: obj };
            })}
          />
        </div>
        <SignupFormField
          type="tel"
          placeholder="Telephone"
          name="telephone"
          register={register}
          error={errors.telephone}
          icon={<FaPhoneAlt />}
        />
        <SignupFormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
          icon={<SiLastpass />}
        />
        <SignupFormField
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
          icon={<SiLastpass />}
        />
      </div>
      <button className="btn btn-success" type="submit">
        S'inscrire
      </button>
    </form>
  );
}

export default SignupForm;

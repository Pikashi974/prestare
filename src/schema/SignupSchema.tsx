import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export type FormSignup = {
  username: string;
  telephone: string;
  job: string;
  area: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupSchema: ZodType<FormSignup> = z
  .object({
    username: z.string().min(3, { message: "Username is too short" }),
    telephone: z.string().min(8, { message: "Phone Number is too short" }),
    job: z.string(),
    area: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });

export type Option = {
  id?: string;
  name?: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormSignup>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  options?: Option[];
  icon?: React.ReactNode;
};

export type ValidFieldNames =
  | "username"
  | "telephone"
  | "job"
  | "area"
  | "email"
  | "password"
  | "confirmPassword";

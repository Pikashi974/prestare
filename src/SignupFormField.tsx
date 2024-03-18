import React from "react";
import { FormFieldProps } from "./schema/SignupSchema";

export const SignupFormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  options,
  icon,
}) => (
  <>
    {type === "select" && options ? (
      <div className=" flex justify-center">
        <select className="select select-info w-full max-w-xs">
          <option selected>Tout</option>
          {options.map((element) => {
            return (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            );
          })}
        </select>
      </div>
    ) : (
      <label className="input input-bordered flex items-center gap-2">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
        />
        {error && <span className="error-message">{error.message}</span>}
      </label>
    )}
  </>
);

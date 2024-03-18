import React, { useContext, useEffect } from "react";
import { ToastMessageContext } from "./App.tsx";

function ToastMesage() {
  const { toastMessage, setToastMessage } = useContext(ToastMessageContext);

  useEffect(() => {
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  });
  let visible = "toast";
  if (toastMessage === "") {
    visible = "toast hidden";
  } else {
    visible = "toast";
  }
  return (
    <div className={visible}>
      <div className="alert alert-info">
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

export default ToastMesage;

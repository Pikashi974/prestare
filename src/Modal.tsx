import React from "react";
import { BiX } from "react-icons/bi";

import SigninForm from "./SigninForm.tsx";
import SignupForm from "./SignupForm.tsx";

export default function Modal() {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div
          className="flex  flex-row-reverse"
          onClick={() => {
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            ).close();
          }}
        >
          <BiX />
        </div>

        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Connexion"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-6"
          >
            <SigninForm />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Inscription"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <SignupForm />
          </div>
        </div>
      </div>
    </dialog>
  );
}

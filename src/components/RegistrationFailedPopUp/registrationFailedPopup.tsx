import { useState } from "react";
import "./registrationFailedPopup.css";
import CloseIcon from '@mui/icons-material/Close';
export default function RegistrationFailedPopup() {
  return (
    <div className="registrationfailed">
      <div className="card">
        <div className="card_title">
          <span>Incorrect registration details</span>
          < CloseIcon className="times"/>
        </div>
        <textarea name="" id="">
          I am supposed to be an Admin officer not an inputter. Please help redo
          registration with the correct detail
        </textarea>
        <div className="buttons">
          <button >submit</button>
          <button >cancel</button>
        </div>
      </div>
    </div>
  );
}

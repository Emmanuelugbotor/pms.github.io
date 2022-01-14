import React, { useState } from "react";
import Wrapper from "../../../layout/wrapper";
import banner from "../../../assets/banner.png";
import "./styles.css";
import RegistrationFailedPopup from "../../../components/RegistrationFailedPopUp/registrationFailedPopup";
import { Link } from "react-router-dom";

const Register = () => {
  const [incorrect, setIncorrect] = useState(false);
  
  const setModalOff=()=> setIncorrect(false)
  

  return (
    <Wrapper>
      <div className="form_wrapper">
        <h1 className="register_right_title">Register</h1>
        <p>Welcome, Here are your details</p>
        <form action="">
          <div className="form_field">
            <label htmlFor="">Full Name</label>
            <input readOnly type="text" placeholder="Festus olayenye" />
          </div>
          <div className="form_field">
            <label htmlFor="">Email</label>
            <input readOnly type="text" placeholder="festus@montech.io" />
          </div>
          <div className="form_field">
            <label htmlFor="">Role</label>
            <input readOnly type="text" placeholder="inputter" />
          </div>
          <div className="form_field">
            <label htmlFor="">Department</label>
            <input readOnly type="text" placeholder="finance" />
          </div>
          
          <div className="form_field" >
          <Link to={"/passwordsetup"} className="icon-pmx">
              <input
              readOnly
              type="submit"
              value="continue"
              className="continue_button"
              
            />
          </Link>
          </div>
        
          <p className="incorrect_details-pmx">
            Incorrect Details,
            <span onClick={() => setIncorrect(true)} className="click_here_btn"> Click here</span>
          </p>
        </form>
        {incorrect && <RegistrationFailedPopup  />}
      </div>
    </Wrapper>
  );
};

export default Register;

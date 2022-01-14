import "./styles.css";
import React, { useState } from "react";
import Wrapper from "../../../layout/wrapper";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <Wrapper >
          <div className="form_wrapper">
    
            <h1 className="register_right_title">Sign in</h1>
            <p>Enter your username and password to sign in</p>
            <form action="">
              
              <div className="form_field">
                <input  type="text" placeholder="Enter username" />
              </div>
              <div className="form_field">
                <input  type="text" placeholder="Enter password" />
              </div>
              <div className="form_field">
                <input type="checkbox" name="" id="checkbox-pmx" />
                <label htmlFor="checkbox-pmx" className="checkbox-pmx">
                    <span></span> Remember me
                </label>
              </div>

              <Link to={"/dashboard"} className="icon-pmx">
              <div className="form_field">
                <input  type="submit" value="Sign in" className="continue_button" />
              </div>
              </Link>
              <Link to={"/forgetpassword"} className="icon-pmx">
              <p className="forget_password-pmx">Forgot password?</p>
              </Link>
            </form>
          </div>
    
        </Wrapper>)
}

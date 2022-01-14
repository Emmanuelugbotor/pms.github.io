import "./styles.css";
import Wrapper from "../../../layout/wrapper";
import ForgetSuccessPopup from "../../../components/RegistrationFailedPopUp/forgetSuccessPopup";
export default function ForgetPassword() {
    return (
        <Wrapper >
        <div className="form_wrapper">
  
          <h1 className="register_right_title">Forgot Password</h1>
          <p className="register_right_quote-pmx">Answer security question to reset password</p>
          <form action="">
            <div className="form_field forget_field-pmx">
              <input  type="text" placeholder="What is your nickname?" />
            </div>
            <div className="form_field">
              <input  type="submit" value="Proceed" className="continue_button" />
            </div>
            <p className="forget_password-pmx">Cancel</p>
          </form>
          <ForgetSuccessPopup/>
        </div>
  
      </Wrapper>)
    
}

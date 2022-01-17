
import Wrapper from "../../../layout/wrapper";
import "./styles.css";
import RegistrationSuccessPopup from "../../../components/RegistrationFailedPopUp/registrationSuccessPopup";
// import RegistrationFailedPopup from "../../../components/RegistrationFailedPopUp/registrationFailedPopup";
export default function SecurityQuestions() {
  return (
    <Wrapper >
      <div className="form_wrapper">
        <h1 className="register_right_title">Security Question</h1>
        <p>Please setup your account password</p>
        <form action="">
          <div className="form_field">
            <label htmlFor="">Security Question</label>
            {/* <input readOnly type="text" placeholder="Select security question" /> */}
            <select name="" id="">
              <option value="" selected={true}>Select security question</option>
              <option value="">What’s your nickname?</option>
              <option value="">What’s your mother’s maiden name?</option>
            </select>
          </div>
          <div className="form_field">
            <label htmlFor="">Answer</label>
            <input type="text" placeholder="Enter your answer" />
          </div>

          <div className="form_field">
            <input type="submit" value="continue" className="continue_button" />
          </div>
        </form>
        <RegistrationSuccessPopup title="Account Successfully Setup" heading="You have successfully setup your account." buttonContent="Login" />
      </div>

    </Wrapper>)
}

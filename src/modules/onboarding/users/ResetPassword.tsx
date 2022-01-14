import PasswordChangedPopup from "../../../components/RegistrationFailedPopUp/PasswordChangedPopup";
import Wrapper from "../../../layout/wrapper";
import "./styles.css";
export default function ResetPassword() {
  return (
    <Wrapper>
      <div className="form_wrapper">
        <h1 className="register_right_title">Change Password</h1>
        <p>Please change your default password here. Expires in 24 hours.</p>
        <form action="">
          <div className="form_field">
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className="form_field">
            <input type="password" placeholder="Confirm new password" />
            <ul>
              <li>
                {" "}
                <span></span> 1 Capital Case letter
              </li>
              <li>
                {" "}
                <span></span> 1 Small Case letter
              </li>
              <li>
                {" "}
                <span></span> 1 Symbol
              </li>
              <li>
                {" "}
                <span></span> 8 characters
              </li>
            </ul>
          </div>

          <div className="form_field">
            <input
              readOnly
              type="submit"
              value="continue"
              className="continue_button"
            />
          </div>
        </form>
        <PasswordChangedPopup />
      </div>
    </Wrapper>
  );
}

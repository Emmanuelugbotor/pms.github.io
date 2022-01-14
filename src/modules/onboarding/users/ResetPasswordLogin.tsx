import Wrapper from "../../../layout/wrapper";
import "./styles.css";
export default function ResetPasswordLogin() {
    return (
        <Wrapper >
          <div className="form_wrapper">
    
            <h1 className="register_right_title">Sign in</h1>
            <p>Login with the default password sent to your mail</p>
            <form action="">   
              <div className="form_field">
                <input  type="text" placeholder="Enter username" />
              </div>
              <div className="form_field">
                <input  type="text" placeholder="Enter default password" />
              </div>
              <div className="form_field">
                <input  type="submit" value="Continue" className="continue_button" />
              </div>
            
            </form>
          </div>
    
        </Wrapper>)
}

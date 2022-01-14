import Wrapper from "../../../layout/wrapper";
import '../users/styles.css'
export default function AdminLogin() {
    return(
        <Wrapper>
<div className="form_wrapper">
<h1 className="register_right_title">Password Setup</h1>
<p>Please setup your account password</p>
<form action="">
<div className="form_field">
    <label htmlFor="">Default Password</label>
    <input readOnly type="password" placeholder="Enter default password" />
  </div>
  <div className="form_field">
    <label htmlFor="">password</label>
    <input readOnly type="password" placeholder="Enter new password" />
    <span> <strong>Hint:</strong>  Your password must be alphanumeric, contain a symbol & a capital letter.</span>
  </div>
  <div className="form_field">
    <label htmlFor="">confirm password</label>
    <input readOnly type="password" placeholder="Confirm new password" />
    <ul>
        <li> <span></span> 1 Capital Case letter</li>
        <li> <span></span> 1 Small Case letter</li>
        <li> <span></span> 1 Symbol</li>
        <li> <span></span> 8 characters</li>
    </ul>
  </div>
  
  
  <div className="form_field">
    <input readOnly type="submit" value="continue" className="continue_button" />
  </div>
  
</form>
{/* {incorrect && <RegistrationFailedPopup />} */}

</div>
        </Wrapper>
      );
}

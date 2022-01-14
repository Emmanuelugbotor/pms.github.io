import Wrapper from "../../../layout/wrapper";
import '../users/styles.css'
export default function AdminRegister() {
    return(
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
                <label htmlFor="">Username</label>
                <input readOnly type="text" placeholder="inputter" />
              </div>
              <div className="form_field">
                <label htmlFor="">Department</label>
                <input readOnly type="text" placeholder="folaleye12" />
              </div>
              <div className="form_field">
                <input
                  readOnly
                  type="submit"
                  value="continue"
                  className="continue_button"
                />
              </div>
              <p>
                Incorrect Details,
                <span  className="click_here_btn" >click here</span>
              </p>
            </form>
          </div>
        </Wrapper>
      );
}

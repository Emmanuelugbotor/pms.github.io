import RegistrationSuccessPopup from "./RegistrationFailedPopUp/registrationSuccessPopup"
export default function OrganisationProfile() {
  return (
    <div className="dashboard_setting_bottom_organization">
      <div className="dashboard_setting_bottom_left">
        <form action="">
          <div className="form_field">
            <label htmlFor="">Organization Name</label>
            <input type="text" placeholder="IT Horizons" />
          </div>
          <div className="form_field">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="9B, Akin Ogunmade Davies " />
          </div>
          <div className="form_field">
            <label htmlFor="">Phone Number</label>
            <div className="phone_number_wrapper">
              <select name="" id="">
                <option value=""></option>
              </select>
              <input type="text" placeholder="7032946990" />
            </div>
          </div>
          <div className="form_field">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="info@ithorizonsng.com " />
          </div>
          <div className="form_button">
            <button>Save</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
      <div className="dashboard_setting_bottom_right">
        <div className="organization_logo_desc">
          <div className="title">Organization Logo</div>
          <div className="image"></div>
        </div>
        <div className="theme_color">
          <div className="theme_color_title">Theme Colour</div>
          <div className="theme_color-one">
            <p>color 1</p>
            <span></span>
          </div>
          <div className="theme_color-one two">
            <p>color 2</p>
            <span></span>
          </div>
        </div>
      </div>
      <RegistrationSuccessPopup title="Organisation Profile Updated" heading="You have successfully updated the organisation profile" buttonContent="OK, GOT IT" spanContent="CLOSE" />
    </div>
  )
}

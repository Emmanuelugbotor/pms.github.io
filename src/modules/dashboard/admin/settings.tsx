import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import dashboardImage from "../../../assets/Rectangle_276.png";
import { useState } from "react";
import Wrapper from "../../../layout/admin/dashboard_sidebar";

export default function Settings() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
    console.log("clicked");
  }
  return (
    // <div className="dashboard">

    <Wrapper>
      <div className="dashboard_setting">
        <div className="dashboard_setting_top">
          <ul>
            <li>Organisation Profile</li>
            <li>Subsidiary</li>
            <li>Branches</li>
            <li>Departments</li>
            <li>Roles Management</li>
          </ul>
        </div>
        <div className="dashboard_setting_bottom">
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
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>

    // </div>
  );
}

import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleIcon from '@mui/icons-material/People';
import dashboardImage from '../../../assets/Rectangle_276.png'
import { useState } from "react";
import Wrapper from "../../../layout/admin/dashboard_sidebar";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  function handleToggle(){
    setToggle(!toggle);
    console.log("clicked")
  }
  return (

    
      <Wrapper>

      <div className="dashboard_right">
        <div className="dashboard_right_top">
          <div className="dashboard_right_profile">User Profile</div>
          <div className="profile_notification_search">
            <p>Search</p>
            <input type="search"  placeholder="input request id"/>
            <NotificationsIcon className="nofication_icon-pmx"/>
            <PersonIcon className="nofication_icon-pmx"/>
          </div>
          
        </div>
        <div className="dashboard_right_content">
            <div className="dashboard_right_content_primary-pmx">
                <figure>
                  <img src={dashboardImage} alt="" />
                </figure>
                <div className="figure_desc">
                  <h1 className="figure_desc_name">
                  Oladele Oluwadare
                  </h1>
                  <div className="figure_desc_email">
                  ooluwadare@pms.com
                  </div>
                  <div className="figure_desc_phone">
                  234-8156695381 
                  </div>
                  <div className="figure_desc_phone">
                  Finance Deparment 
                  </div>
                  
                </div>
                <div className="level_inputter-pmx">1st Level Inputter</div>
            </div>
            <div className="dashboard_right_content_secondary-pmx">
              <h1 className="title">
              System Analytics
              </h1>
              <table>
                <thead>
                  <tr>
                  <th></th>
                  <th>Total Quantity</th>
                  <th>Total Price (₦)</th>
                  </tr>  
                </thead>
                <tbody>
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                  <tr>
                  <td>Budget Item Requested</td>
                  <td>10,925</td>
                  <td>11,928,758.01</td>
                  </tr>   
                </tbody>
              </table>
            </div>
          </div>
      </div>

      </Wrapper>
      
  );
}

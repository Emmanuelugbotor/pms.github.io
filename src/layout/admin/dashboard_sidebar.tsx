import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import dashboardImage from "../../../assets/Rectangle_276.png";
import React, { useState } from "react";
  interface IDiv {
    children: React.ReactNode;
  }
  
 const Sidebar = (props: IDiv): JSX.Element => {
 

   const [toggle, setToggle] = useState(false);
   function handleToggle() {
     setToggle(!toggle);
     console.log("clicked");
   }

   return (
     <div className="dashboard">
       <div className="dashboard_left">
         <div className="dashboard_left_top">Procurement MS</div>
         <div className="dashboard_left_wrapper">
           <ul className="dashboard_left_middle">
             <li>
               <PersonIcon className="n_icon" />
               Dashboard
             </li>
             <li>
               <PersonIcon className="n_icon" />
               Budget
             </li>
             <li>
               <PersonIcon className="n_icon" />
               Expenses
             </li>
             <li>
               <PersonIcon className="n_icon" />
               Store Management
             </li>
             <li>
               <PeopleIcon className="n_icon" />
               Users
             </li>
             <li
               className={
                 toggle ? "settings_list-item grey" : "settings_list-item"
               }
               onClick={handleToggle}
             >
               <SettingsIcon className="n_icon " />
               <span> Settings</span>
               <ArrowForwardIosIcon className={toggle ? "rotate" : ""} />
             </li>
             <ol>
               <li>System Settings</li>
               <li>Budget Settings</li>
               <li>General Settings</li>
             </ol>
             <li>
               <PersonIcon className="n_icon" />
               Report
             </li>

             <li
               style={{
                 backgroundColor: "#E43270",
                 width: "91%",
                 position: "absolute",
                 bottom: 0,
                 marginTop: "50px",
               }}
             >
               <PersonIcon className="n_icon" />
               Logout
             </li>
           </ul>
         </div>
       </div>

       <>{props.children}</>
     </div>
   );
 };

export default Sidebar 

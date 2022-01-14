import { Link } from "react-router-dom";
import "./registrationFailedPopup.css";
import CloseIcon from '@mui/icons-material/Close';
import goodImage from '../../assets/Check_Circle.png'
export default function RegistrationSuccessPopup() {
  return (
    <div className="registrationfailed">
      <div className="card">
        <div className="card_title">
         <span>Account Successfully Setup</span> 
          <CloseIcon className="times"/>
        </div>
        <div className='card_info'>
          <img src={goodImage} alt="" />
        <h5>You have successfully setup your account.</h5>
        </div>
        <div className="fresh_button-pmx ">
        <Link to={"/login"}>

          <button className="login_btn-pmx">login</button>
          </Link>
          <span className="close_btn-pmx">Close</span>
        </div>
      </div>
    </div>
  );
}

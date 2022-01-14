import "./registrationFailedPopup.css";
import CloseIcon from '@mui/icons-material/Close';
import goodImage from '../../assets/Check_Circle.png'
export default function PasswordChangedPopup() {
  return (
    <div className="registrationfailed">
      <div className="card">
        <div className="card_title">
        <span>Password Successfully Changed</span>
        < CloseIcon className="times"/>
        </div>
        <div className='card_info'>
          <img src={goodImage} alt="" />
        <h5>You have successfully changed your password.</h5>
        </div>
        <div className="fresh_button-pmx ">
          <button className="login_btn-pmx">Login</button>
          <span className="close_btn-pmx">Close</span>
        </div>
      </div>
    </div>
  );
}

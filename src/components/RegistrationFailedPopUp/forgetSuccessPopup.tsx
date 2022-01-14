import "./registrationFailedPopup.css";
import CloseIcon from '@mui/icons-material/Close';
export default function ForgetSuccessPopup() {
  return (
    <div className="registrationfailed">
      <div className="card">
        <div className="card_title">
        <span> Default Password Sent</span>
        <CloseIcon className="times"/>
        </div>
        <div className='card_info'>
        <h5>A default password has been sent to your mail.</h5>
        </div>
        <div className="fresh_button-pmx ">
          <button className="login_btn-pmx">OK, GOT IT</button>
          <span className="close_btn-pmx">Close</span>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./registrationFailedPopup.css";
import CloseIcon from '@mui/icons-material/Close';
import goodImage from '../../assets/Check_Circle.png'

type registrationProps = {
  title: string,
  heading: string,
  buttonContent: string,
  spanContent: string,

}
export default function RegistrationSuccessPopup(props: registrationProps) {
  return (
    <div className="registrationfailed">
      <div className="card">
        <div className="card_title">
          <span>{props.title}</span>
          <CloseIcon className="times" />
        </div>
        <div className='card_info'>
          <img src={goodImage} alt="" />
          <h5>{props.heading}</h5>
        </div>
        <div className="fresh_button-pmx ">
          <Link to={"/login"}>

            <button className="login_btn-pmx">{props.buttonContent}</button>
          </Link>
          <span className="close_btn-pmx">{props.spanContent}</span>
        </div>
      </div>
    </div>
  );
}

RegistrationSuccessPopup.defaultProps = {
  spanContent: "CLOSE",
  buttonContent: "Login"
}
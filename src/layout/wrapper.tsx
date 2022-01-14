import React from "react";
import banner from "../assets/banner.png";

interface ILayout {
    children: React.ReactNode;
}

const Wrapper =(props: ILayout):JSX.Element => {
  
   
    return <div className="register">

      <div className="register_left">
        <img src={banner} alt="image_logo" />
      </div>

      <div className="register_right">{props.children}</div>

    </div>
  
}
export default Wrapper;

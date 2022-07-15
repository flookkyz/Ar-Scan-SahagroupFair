import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState,useEffect } from "react";
import Pic_Register from "../images/pic_register.png"
import "../pages/Home.css";

const regisURL = process.env.REACT_APP_REGIS_API;
const sendCheck = process.env.REACT_APP_CHECK_POST;

function Register() {
  const [firstName, setFirstName] = useState("");
  const [user, setUser] = useState()

  const handleClick = () => {
    console.log(firstName);

    axios
      .post(regisURL, {
        firstName: firstName,
      })
      .then((response) => {
        console.log(response.data.data.uid);
        localStorage.setItem("myUid", JSON.stringify(response.data.data.uid));
      });
  };

  const checkUser = () =>{
    const logged = localStorage.getItem("myUid")
    if(logged){
      const foundUser = JSON.parse(logged);
      setUser(foundUser)
    }
  }

  if(user){
    window.location = `/checkpoint`
  }

  useEffect(() => {
    checkUser()
  }, [])
  

  return (
    <div className="center-area-home">
      <center><img src={Pic_Register} alt="pic-home" /></center>
      <div className="flex-row fromregister">
        <span className="title text-center">
          ค้นหา AR ที่ซ่อนอยู่ในงาน <br/>SahaGroup Fair <br/>ครบทุกจุด
          รับของรางวัลสุดพิเศษ
        </span>
        <input
          type="text"
          className="inputregister"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="กรอกชื่อ - สกุล"
        />
        <center>
          <Link to="/checkpoint" onClick={() => handleClick()}>
            <button className="btn_submit">ยืนยัน</button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default Register;

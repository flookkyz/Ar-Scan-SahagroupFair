import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pic_Home from "../images/pic_home.png";
import "../css/Checkpoint.css";
import axios from "axios";
import "./Checkpoint.css";
import AR1_Pic from "../images/checkpoint_pic/ar1.png";
import AR2_Pic from "../images/checkpoint_pic/ar2.png";
import AR3_Pic from "../images/checkpoint_pic/ar3.png";
import AR4_Pic from "../images/checkpoint_pic/ar4.png";
import AR5_Pic from "../images/checkpoint_pic/ar5.png";
import AR6_Pic from "../images/checkpoint_pic/ar6.png";
import AR7_Pic from "../images/checkpoint_pic/ar7.png";
import AR8_Pic from "../images/checkpoint_pic/ar8.png";
import AR9_Pic from "../images/checkpoint_pic/ar9.jpeg";

function Checkpoint() {
  const userUrl = process.env.REACT_APP_REGIS_API;
  const sendCheck = process.env.REACT_APP_CHECK_POST;
  const [result, setResult] = useState([]);
  const [isSuccess, setIsSuccess] = useState([]);

  const getData = () => {
    axios
      .get(`${userUrl}/${localStorage.getItem("myUid").replaceAll('"', "")}`)
      .then((res) => {
        console.log(res.data.data.result);
        setResult(res.data.data.result);
      });
  };

  const fetchData = async () => {
    await axios
      .get(`${userUrl}/${localStorage.getItem("myUid").replaceAll('"', "")}`)
      .then((res) => {
        console.log(res.data.data.isSuccess);
        if (res.data.data.isSuccess === true) {
          console.log("Success = true");
          window.location = `/finish`;
        } else {
          console.log("Success = flase");
        }
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
      fetchData();
    }, 500);
  }, []);

  return (
    <div>
      <center>
        <img src={Pic_Home} alt="pic-home" />
      </center>
      <center>
        <span className="text-center">
          เลือกภารกิจ และส่องไปที่ภาพที่กำหนด เพื่อ checkin
        </span>
      </center>
      <div className="event">
        <Link
          to="/event1"
          className={`btn-event ${result.checkpoint1 ? "btn-active" : ""}`}
        >
          {" "}
          <div className="space-around">
          <img src={AR1_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">Sahapat Delivery Logo</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event2"
          className={`btn-event ${result.checkpoint2 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR2_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">LION Mascot</span>
          <div className="a"></div>
          </div>
          
        </Link>
        <Link
          to="/event3"
          className={`btn-event ${result.checkpoint3 ? "btn-active" : ""}`}
        ><div className="space-around">
          <img src={AR3_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">Health & Wellness</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event4"
          className={`btn-event ${result.checkpoint4 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR4_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">CWX</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event5"
          className={`btn-event ${result.checkpoint5 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR5_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">Wacoal COOL</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event6"
          className={`btn-event ${result.checkpoint6 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR6_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">Body Clinic</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event7"
          className={`btn-event ${result.checkpoint7 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR7_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">BSC international</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event8"
          className={`btn-event ${result.checkpoint9 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR8_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">Cherilon</span>
          <div className="a"></div>
          </div>
        </Link>
        <Link
          to="/event9"
          className={`btn-event ${result.checkpoint10 ? "btn-active" : ""}`}
        >
          <div className="space-around">
          <img src={AR9_Pic} alt="ar1" className="ar-pic" />
          <span className="span-size">SHOP Channel</span>
          <div className="a"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Checkpoint;

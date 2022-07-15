import React from "react";
import { useParams } from "react-router-dom";
import "./Suscess.css";
import { Link } from "react-router-dom";

function Suscess() {
  let { nameevent } = useParams();
  return (
    <div className="center-area">
      <div className="center-div-finish">
        <h2>ยินดีด้วย คุณค้นพบ AR</h2>
      </div>
      <div className="center-div">
        <h2>{nameevent}</h2>
      </div>
      <center><Link to="/checkpoint" className="btn-suscess text-btn center-div">
        เช็คอิน
      </Link></center>
    </div>
  );
}

export default Suscess;

import React from 'react'
import { Link } from 'react-router-dom'
import "./Suscess.css";

function Finish() {
  return (
    <div className='center-area'>
      <div className="center-div-finish">
        <h2>ยินดีด้วย คุณค้นพบ AR</h2>
      </div>
      <div className="center-div">
      <h2>ครบทั้ง 10 จุดแล้ว</h2>
      </div>
      <center><Link to="/checkpoint" className="btn-suscess text-btn center-div">
        รับของรางวัล
      </Link></center>
    </div>
  )
}

export default Finish
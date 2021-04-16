import React from "react";
import { Link } from "react-router-dom";

class Credits extends React.Component {
  render() {
    return (
      <div className="marquee-wrapper" id="end_credits_container">
        <div className="end-credits fade">
          <h1 className="title">Landing Page Here</h1>
          <div>
            <Link to="/login">Login</Link>
            <Link to='/upload-song'>Upload Songs here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;

import React from "react";
import { Link } from "react-router-dom";

class Credits extends React.Component {
  render() {
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <h1 className="title">Landing Page Here</h1>
          <div className="home-links links">
            <Link to="/login">Login</Link>
            <Link to="/upload-song">Upload Songs here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;

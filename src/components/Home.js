import React from "react";
import { Link } from "react-router-dom";

import "./styles/timer.css";

class Home extends React.Component {
  state = {
    user: { user_name: "[User Name]" },
  };

  render() {
    // let user = JSON.parse(sessionStorage.getItem('userName')) //
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <section className="welcome-title">
            <h1> Welcome to Pytormal's Studio</h1>
            {/*  <span id="WelcomeUser">{`${this.state.user.user_name},`}</span>
          <p className="home-p">what would you like to do?</p> */}
            <h2> a collection of Alex Andrew's art</h2>

            <section Id="placeholder">
              <h5> a little background:</h5>
              <p>
                Web Page will change due to many variables, some links may not
                work or pages have no relevant data or forms that relate to
                cinema or photograpghy. Layout and Responsive designs will
                change overtime.
                <p Id="parkey">
                  this was a former webapp that was created for overlays for
                  live streaming and recording. with Pytormal domain bought
                  already, it still is a good name, so. the Domain will now be
                  used for:{" "}
                  <p>
                    Cinematography and Photography business for Alex Andrew and
                    name of Business is Pytormal's Studio
                  </p>
                </p>
              </p>
            </section>
          </section>

          <div className="home-links links">
            <Link to="/login">Login</Link>
            {/* <Link to="/Polls-hub">Polls</Link>
             <Link to="/upload-song">Upload Songs here</Link>
            <Link to="/timers">Timers</Link> */}
            <Link to="/video-gallery">Videos</Link>
          </div>
          <nav Id="social">
            <h6>Lets Meet</h6>
            <section class="fa-do">
              <a
                class="ri-linkedin-line"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mallory-alexandrew/"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/linkedin-line.png")}
                  alt="cannot display"
                />
              </a>

              <a
                class="ri-facebook-line"
                target="_blank"
                rel="noopener noreferrer"
                href="https:/facebook.com/pytormalstudios"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/facebook-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* <a
                class="fa fa-twitter"
                href="https://www.twitter.com/pytormal"
                target="_blank"
              >
                twitter
              </a> */}

              {/* <a
                class="fa fa-instagram"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
              >
                instagram
              </a> */}
            </section>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;

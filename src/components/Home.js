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
<div class="container">
        <h2>My Projects</h2>

        </section>
      </section>
            <section class="featured">
              <h2 id="collection"> a collection of Alex Andrew's art</h2>
              <h4>featured video</h4>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mYAAy2D3Yoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

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
                  used for:
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
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

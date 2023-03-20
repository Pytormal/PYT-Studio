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



        <section class="container">
        <h2>My Projects</h2>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
         
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
            <li data-target="#myCarousel" data-slide-to="7"></li>
          </ol>

          
          <div class="carousel-inner">
            <div class="item active">
              <a
                href="other pages/Project 1/Build Week Unit1/marketing_page/Index.html"
                ><img src="https://picsum.photos/id/103/367/267" alt="1" />
              </a>
            </div>

            <div class="item">
              <a href=""
                ><img src="https://picsum.photos/id/104/367/267" alt="2"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/1079/367/267" alt="3"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/129/367/267" alt="4"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/177/367/267" alt="5"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/270/367/267" alt="6"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/326/367/267" alt="7"
              /></a>
            </div>

            <div class="item">
              <a href="">
                <img src="https://picsum.photos/id/390/367/267" alt="8"
              /></a>
            </div>
          </div>

          
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <section class="horizontal-scroll">
        <section class="top-row">
          <ul>
            <li><a href="">
              <img src="https://picsum.photos/id/103/367/267" alt="1"></a>
              <h3>
                <a
                  href="other pages/Project 1/Build Week Unit1/marketing_page/Index.html"
                >
                  Project 1</a
                >
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/104/367/267" alt="2" />
              <h3>
                <a href="other pages/Project 2.html">Project 2</a>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/1079/367/267" alt="3" />
              <h3>
                <a href="other pages/Project 3.html">Project 3</a>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/129/367/267" alt="4" />
              <h3>
                <a href="other pages/Project 4.html">Project 4</a>
              </h3>
            </li>
          </ul>
        </section>
        <section class="bottom-row">
          <ul>
            <li>
              <img src="https://picsum.photos/id/177/367/267" alt="5" />
              <h3>
                <a href="other pages/Project 5.html">Project 5</a>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/270/367/267" alt="6" />
              <h3>
                <a href="other pages/Project 6.html">Project 6</a>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/326/367/267" alt="7" />
              <h3>
                <a href="other pages/Project 7.html">Project 7</a>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <img src="https://picsum.photos/id/390/367/267" alt="8" />
              <h3>
                <a href="other pages/Project 8.html">Project 8</a>
              </h3>
            </li>
          </ul>
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

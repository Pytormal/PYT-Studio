import React from "react";
import { Link } from "react-router-dom";
import StartTimer from "./timer.js"


// let user_name= 'Alex Andrew'

class Home extends React.Component {


  render() {
    // let user = JSON.parse(sessionStorage.getItem('userName'))
    return (
      <div  className="title-wrapper" id="title_container">
        <div className="title-card">
          <section>
            <h1 className="title">
              Welcome
              {/* {user.userName} */}
            </h1>

            <p className="home-p">what would you like to do?</p>
          </section>

          <div  className="home-links links">
            <Link to="/login">Login</Link>
            <Link to="/Polls-hub">Polls Hub</Link>
            <Link to="/upload-song">Upload Songs here</Link>
          </div>
            <h1 id="header" >Stream Starting in . . . </h1>
           
<div id="timer">  < StartTimer /> Timer Goes Here, requires JavaScript</div>
        </div>
      </div>
    );
  }
}

export default Home;

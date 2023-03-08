import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";

import logout from "./components/utils/logout";

import Home from "./components/Home";
import Song from "./components/Song";
import ListSongs from "./components/ListSongs";
import Socials from "./components/utils/Social Media/socials"
import UploadSongs from "./components/forms/MusicForm";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import PollHome from "./components/PollHome";
import Videogallery from "./components/Video-gallery";
import Photogallery from "./components/Photos";
// import MessageForm from "./components/forms/MessageForm"
import { Min5Timer, Min10Timer, Min30Timer } from "./components/timer.js";

// import PageDev from "./components/utils/PageinDev.js"

// import Credit from "./components/Credit";

// STYLES //
import "./components/styles/reset.css";
import "./components/styles/App.css";
import "./components/styles/home.css";
import "./components/styles/formStyle.css";
// import "./components/styles/credit.css";
import "./components/styles/song-list.css";
import "./components/styles/polls.css";
import "./components/styles/video-gallery.css";
import "./components/styles/dualscreen.css";
import "./components/styles/responsive.css";
import "./components/styles/socials.css"

function App() {
  return (
    <>
      <section id="split">
        <section className="all-links">
          <section className="left-links links">
            <Link to="/">Home</Link>
            {/* <Link to="/register">Register Here</Link> does not work */}
            <Link to="/login" onClick={logout}>
              Log Out
            </Link>
            <Link to="/songs_list">Songs</Link> {/* songs used in videos*/}
            <Link to="/video-gallery">Videos</Link>
<Link to="/photo-gallery">Photos</Link>
            <Link to="/socials">Social Media</Link>
          </section>
          <section className="left-links2 links">
            {/* <Link to="/login">Login</Link> does not work */}
            {/* <Link to="/polls-hub">Polls</Link> */}
            {/*used for getting client info*/}
            {/* <Link to="/timers">Timers</Link>  */}
            {/* <Link to="/upload-song">Upload Songs here</Link> */}
            <Link to="/video-gallery">Videos</Link>
<Link to="/photo-gallery">photos</Link>
            <Link to="/socials">Social Media</Link>
          </section>

          {/* <section id="duo">  <MessageForm /></section> */}
        </section>

        <div className="App">
          <Switch className="pick">
            <Route path="/songs_list/:music_id">
              <Song props={ListSongs} />
            </Route>
            <Route exact path="/songs_list">
              <ListSongs props={ListSongs} />
            </Route>
            <Route path="/socials">
              <Socials />
            </Route>

            <Route path="/video-gallery">
              <Videogallery />
            </Route>

<Route path="/photo-gallery">
              <Photogallery />
            </Route>

            <Route path="/polls-hub">
              <PollHome />
            </Route>
            <Route path="/timers">
              <Min5Timer />
              <Min10Timer />
              <Min30Timer />
            </Route>

            <PrivateRoute
              exact
              path="/upload-song"
              component={UploadSongs}
            ></PrivateRoute>

            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </section>
      <footer>
        <ul>
          <nav></nav>
        </ul>
      </footer>
    </>
  );
}

export default App;

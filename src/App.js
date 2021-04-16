import "./components/styles/App.css";
import { Link, Route, Switch } from "react-router-dom";

import logout from "./components/utils/logout";

import Home from "./components/Home";
import Credits from "./components/Credits";
import UploadSongs from "./components/forms/MusicForm";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
// import Credit from "./components/Credit";

// import Form from './components/MusicForm'

function App() {
  return (
    <>
      <section className="links">
        <Link to="/">Home</Link>
        <Link to="/songs_list">List Songs</Link>

        <Link to="/login" onClick={logout}>
          Log Out
        </Link>

        <Link to="/register">Register Here</Link>
      
      </section>

      <div className="App">
        <Switch>
          <Route exact path="/songs_list">
            <Credits />
          </Route>
          <Route path="/upload-song">
            <UploadSongs />
          </Route>
          <Route path='/register'><RegisterForm/></Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

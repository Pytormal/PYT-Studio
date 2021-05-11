import React from "react";
import { Route, Switch } from "react-router-dom";

import PollsForm from "./Polls/PollsForm";

// let user_name= 'Alex Andrew'

class PollHome extends React.Component {
  render() {
    // let user = JSON.parse(sessionStorage.getItem('userName'))
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <section>
            <Switch className="pick">
              <Route path="/Polls-hub/Polls">
                <PollsForm />
              </Route>
              <Route path="/Polls-hub">
                <h1 className="title">
                  Welcome
                  {/* {user.userName} */}
                </h1>
                <p className="home-p">
                  to the Hub of all things Polls
                  <span> what would you like to do?</span>
                </p>
              </Route>
            </Switch>
          </section>

          <div className="home-links links">
            {/* <Link to="/Polls">Streaming Poll</Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PollHome;

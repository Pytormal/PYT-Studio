import React from "react";
import { Route, Switch, Link } from "react-router-dom";

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
              <Route path="/polls-hub/polls">
                <PollsForm />
              </Route>
              <Route path="/polls-hub">
                <h1 className="title">
                  Welcome
                  {/* {user.userName} */}
                </h1>

                <Link to="/polls-hub/polls">click to start the poll</Link>
              </Route>
            </Switch>
          </section>

          <div className="polls-links links">
            {/* <Link to="/Polls">Streaming Poll</Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PollHome;

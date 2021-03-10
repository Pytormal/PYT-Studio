import React from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

// Authenticated user can view a list of created music.  A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant.

class Credits extends React.Component {
  constructor() {
    super();
    this.state = {
      music: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/music")
      .then((res) => {
        this.setState(res.data);
        const music = res.data.map((source) => (
          <div key={source.id}>
            <section className="card-wrapper">
              <section className="source-wrapper">
                <div className="source-names">
                  <p>{source.creditSource}</p>
                  <p>{source.creditSong}</p>
                  <p>{source.creditStream}</p>
                  <p>{source.creditWatch}</p>
                </div>
              </section>
            </section>
          </div>
        ));

        this.setState({ music });

        console.log("music.js list", res.data);
      })

      .catch((error) => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <>
        <section className="marquee-wrapper" id="end_credits_container">
          <div className="end-credits fade">
            <h1>hello my beautiful music</h1>

            {/* List of music */}
            <div>{this.state.music}</div>
          </div>
        </section>
      </>
    );
  }
}

export default Credits;

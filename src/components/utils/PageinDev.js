import React from "react";

class PageDev extends React.Component {
  state = {
    user: { user_name: "Alex Andrew" },
  };

  render() {
    // let user = JSON.parse(sessionStorage.getItem('userName'))
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <section className="welcome-title">
            <h1 className="title">This Page is in Development</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default PageDev;

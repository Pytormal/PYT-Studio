import React from "react";

class BroadcastPage extends React.Component {
  state = {
    user: { user_name: "Alex Andrew" },
  };

  render() {
    return (
        <><section className="comments">
           <h1>comments here placeholder</h1> 
      </section>
        <section classNAme="stream-video">
          <iframe
            src="https://www.youtube.com/embed/CqRKOY4Cgvw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </>
    );
  }
}

export default BroadcastPage;

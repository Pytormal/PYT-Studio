import React from "react";



class BroadcastPage extends React.Component {
  state = {
    user: { user_name: "Alex Andrew" },
  };

  render() {
    return (
      <>
        <section id="streaming">
        <section id="split-stream-comments">
          <section className="stream-video">
            <iframe
              src="https://www.youtube.com/embed/CqRKOY4Cgvw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
          </section>
        </section>
      </>
    );
  }
}

export default BroadcastPage;

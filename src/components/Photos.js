import React from "react";
// import MessageForm from "../forms/MessageForm";

class Photogallery extends React.Component {
  // state = {
  //   user: { user_name: "Alex Andrew" },
  //   message: "",
  // };

  // sendMessage = (formData) => {
  //   const newMessage = {
  //     id: Date.now(),
  //     user: this.user_name,
  //     message: formData.message,
  //   };
  // };

  render() {
    return (
      <>
        <section id="streaming">
          <section id="split-stream-comments">
            <section className="stream-video">
              <h1>Portraits 3:2</h1>
              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils/Photos/self-portrait-at-work1.jpg")}
                alt="cannot display"
              />
              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils//Photos/self-portrait-at-work2.jpg")}
                alt="cannot display"
              />

              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils/Photos/clarence-elliot-portrait-at-work.jpg")}
                alt="cannot display"
              />
              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils//Photos/clarence-elliot-portrait-at-work1.jpg")}
                alt="cannot display"
              />
            </section>

            <section className="stream-video">
              <h1>Portaits 16:9</h1>
              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils/Photos/alexandrew-portrait.jpg")}
                alt="cannot display"
              />
            </section>

            <section className="stream-video">
              <h1>Animals 3:2</h1>
              <img
                className="img1"
                rel="noopener noreferrer"
                src={require("./utils/Photos/Lezzi-portrait.jpg")}
                alt="cannot display"
              />
            </section>
            {/* <section id="single">
              <MessageForm />
            </section> */}
          </section>
        </section>
      </>
    );
  }
}

export default Photogallery;

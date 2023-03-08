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
              <p> page in progress </p>
              
 <img
                    rel="noopener noreferrer"
                    src={require("./photos/self-portrait-at-work1.png")}
                    alt="cannot display"
                  />
rel="noopener noreferrer"
                    src={require("./photos/self-portrait-at-work2.png")}
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

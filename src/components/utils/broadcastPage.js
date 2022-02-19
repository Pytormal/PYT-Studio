import React  from "react";
// import MessageForm from "../forms/MessageForm";

class BroadcastPage extends React.Component {
  state = {
    user: { user_name: "Alex Andrew" },
    message: '',
  };


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
              <iframe
                src="https://www.youtube.com/embed/CqRKOY4Cgvw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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

export default BroadcastPage;

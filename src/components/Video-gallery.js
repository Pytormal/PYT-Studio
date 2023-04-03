import React from "react";
// import MessageForm from "../forms/MessageForm";

class Videogallery extends React.Component {
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/UUB3FupnpsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              <iframe
                width="756"
                height="425"
                src="https://www.youtube.com/embed/-j5ABgDKZnE"
                title="Swimming with the Jellyfish"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <iframe
                width="756"
                height="425"
                src="https://www.youtube.com/embed/bHpXAA9tHUQ"
                title="Pallet Sort Machine Demostration"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

export default Videogallery;

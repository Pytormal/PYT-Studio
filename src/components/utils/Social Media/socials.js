import React from "react";

class Socials extends React.Component {
  render() {
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <nav Id="social">
            <h6>Lets Meet and Connect</h6>
            <section class="fa-do">
              {/* linkedIn */}
              <a
                class="ri-linkedin-line"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mallory-alexandrew/"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/linkedin-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Facebook */}
              <a
                class="ri-facebook-line"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pytormalstudios/"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/facebook-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Twitter */}
              <a
                class="ri-twitter-line"
                href="https://www.twitter.com/pytormal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/twitter-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Instagram */}
              <a
                class="ri-instagram-line"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/instagram-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Discord */}
              <a
                class="ri-discord-line"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/discord-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Github */}
              <a
                class="ri-github-line"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/github-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Twitch */}
              <a
                class="ri-twitch-line"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/twitch-line.png")}
                  alt="cannot display"
                />
              </a>

              {/* Youtube */}
              <a
                class="ri-youtube-line"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  rel="noopener noreferrer"
                  src={require("./Logos/youtube-line.png")}
                  alt="cannot display"
                />
              </a>
            </section>
          </nav>
        </div>
      </div>
    );
  }
}

export default Socials;

import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";

// const creditSource = "Music provided by NoCopyrightSounds";
// const creditSong =
//   "Song: Julius Dreisig - Where'd You Go (feat. Luna Lark) [NCS Release]";
// const creditStream = "Free Download/Stream: http://ncs.io/WYG";
// const creditWatch = "Watch: http://youtu.be/aWJJEaod34U";

// function Credits() {
//   return (
//     <>
//       <div className="marquee-wrapper" id="end_credits_container">
//         <div className="end-credits fade">
//           <h1 className="title">Music Source</h1>

//         <p>{creditSource}</p>
//         <p>{creditSong}</p>
//         <p>{creditStream}</p>
//         <p>{creditWatch}</p>
//         </div>
//       </div>
//     </>
//   );
// }

class Credits extends React.Component {
  state = {
    songs: [],
    newSong: {
      songName: "",
      musicSource: "",
      Download: "",
      Watch: "",
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      // .get("http://localhost:9500/api/songs")
      .get("https://overlay-server-api.herokuapp.com/api/songs")
      .then((res) => {
        console.log("Credit List.js: getData: res: ", res.data);
        this.setState({
          songs: res.data,
        });
      })
      .catch((err) => console.error("Unable to retrieve data: ", err.message));
  };

  render() {
    return (
      <>
        <Link id="upload-song" to="/upload-song">
          Upload Songs here
        </Link>
        <div
          className="song-marquee-wrapper song-wrapper"
          id="song-credits-container"
        >
          <div className="song-credits fade">
            <p>
              A list of songs that is used in my stream:
              <div>
                check out NCS's site at for great music:
                <a href="https://ncs.io" className="ncs-link">
                  https://ncs.io
                </a>
              </div>
            </p>
            <h1 className="list-header">
              <p>Music provided by NoCopyrightSounds</p>
            </h1>

            <div className="card-space">
              {this.state.songs.map((song) => {
                return (
                  <div className="song-card" key={song.music_id}>
                    <h4 className="song-name">
                      {/* <span>{song.music_id} </span> */}
                      {song.songName}
                    </h4>
                    {/* <p>{song.musicSource}</p> */}
                    <p>
                      Download/Listen here:
                      <a href={song.Download}>{song.Download}</a>
                    </p>

                    <p>
                      Watch Here: <a href={song.Watch}>{song.Watch}</a>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Credits;

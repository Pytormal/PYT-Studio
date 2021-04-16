import React from "react";
import "./credit.css";

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
      song_id: Date.now(),
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
      .get("http://localhost:9500/api/songs")
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
      <div className="marquee-wrapper" id="end_credits_container">
        <div className="end-credits fade">
          <h1 className="title">Music Source</h1>
          <div>
            {this.state.songs.map((song) => {
              return (
                <div key={song.music_id}>
                  <h4>{song.songName}</h4>
                  <p>{song.musicSource}</p>
                  <p>{song.Download}</p>
                  <p>{song.Watch}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;

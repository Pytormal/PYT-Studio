import React from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";


class Song extends React.Component {
  state = {
    songs: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      // .get("http://localhost:9500/api/songs")
      .get(`https://overlay-server-api.herokuapp.com/api/songs`)
      .then((res) => {
        console.log("Song List.js: getData: res: ", res.data);
        this.setState({
          songs: res.data,
        });
      })
      .catch((err) => console.error("Unable to retrieve data: ", err.message));
  };

  render() {
    return (
      <>
        <div
          className="song-marquee-wrapper song-wrapper"
          id="song_credits_container"
        >
          <div className="song-credits fade">
            <h1 className="title">Music Source</h1>
            <div className="card-space">
              {this.state.songs.map((song) => {
                return (
                  <div className="song-card" key={song.music_id}>
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
      </>
    );
  }
}

export default Song;

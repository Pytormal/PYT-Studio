import "./credit.css";

import React from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";
import e from "cors";

class Credit extends React.Component {
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

  handleChange = (e) => {
    this.setState({
      newSong: {
        ...this.state.newSong,
        [e.target.name]: e.target.value,
      },
    });
  };

  addsong = () => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:9500/api/songs", this.state.newSong)
      .then((res) => console.log("addsong: ", res))
      .catch((err) => console.error("Cannot add song", err.message));
  };

  render() {
    return (
      <div className="AddSong">
        <form onSubmit={this.addsong}>
          <label htmlFor="songName">Song Name: </label>
          <input
            id="songName"
            name="songName"
            type="text"
            value={this.state.newSong.name}
            onChange={this.handleChange}
          />

          <label htmlFor="musicSource">music Source: </label>
          <input
            id="musicSource"
            name="musicSource"
            type="text"
            value={this.state.newSong.musicSource}
            onChange={this.handleChange}
          />

          <label htmlFor="Download">Download link: </label>
          <input
            id="Download"
            name="Download"
            type="text"
            value={this.state.newSong.Download}
            onChange={this.handleChange}
          />

          <label htmlFor="Watch">Watch link: </label>
          <input
            id="Watch"
            name="Watch"
            type="text"
            value={this.state.newSong.Watch}
            onChange={this.handleChange}
          />

          <button>Add song</button>
        </form>
      </div>
    );
  }
}

export default Credit;

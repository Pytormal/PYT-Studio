import React from "react";

function Credit() {
  const creditSource = "Music provided by NoCopyrightSounds";

  const creditSong =
    "Song: Julius Dreisig - Where'd You Go (feat. Luna Lark) [NCS Release";

  const creditStream = "Free Download/Stream: http://ncs.io/WYG";

  const creditWatch = "Watch: http://youtu.be/aWJJEaod34U";

  return (
    <div
      className="marquee-wrapper"
      id="end_credits_container"
    >
      <header className="App-header">
        <nav>
          <p className="Title">Landing Page Nav</p>
          <section className="links"></section>
        </nav>
      </header>

      <div>
        <h1>Music Source</h1>
        <p>{creditSource}</p>
        <p>{creditSong}</p>
        <p>{creditStream}</p>
        <p>{creditWatch}</p>
      </div>
    </div>
  );
}

export default Credit;
import React from "react";
import './credit.css'

// import { axiosWithAuth } from "./utils/axiosWithAuth";
const creditSource = "Music provided by NoCopyrightSounds";
const creditSong =
  "Song: Julius Dreisig - Where'd You Go (feat. Luna Lark) [NCS Release]";
const creditStream = "Free Download/Stream: http://ncs.io/WYG";
const creditWatch = "Watch: http://youtu.be/aWJJEaod34U";

function Credits() {
  return (
    <>
      <div className="marquee-wrapper" id="end_credits_container">
        <div className="end-credits fade">
          <h1 className="title">Music Source</h1>

        <p>{creditSource}</p>
        <p>{creditSong}</p>
        <p>{creditStream}</p>
        <p>{creditWatch}</p>
        </div>
      </div>
    </>
  );
}

// class Credits extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     music: [],
//   };
// }

// componentDidMount() {
//   this.getData();
// }

// getData = () => {
//   axiosWithAuth()
//     .get("/music")
//     .then((res) => {
//       this.setState(res.data);
//       const music = res.data.map((source) => (
//         <div key={source.id}>
//           <section className="card-wrapper">
//             <section className="source-wrapper">
//               <div className="source-names">
//                 <p>{source.creditSource}</p>
//                 <p>{source.creditSong}</p>
//                 <p>{source.creditStream}</p>
//                 <p>{source.creditWatch}</p>
//               </div>
//             </section>
//           </section>
//         </div>
//       ));

//       this.setState({ music });

//       console.log("music.js list", res.data);
//     })

//     .catch((error) => {
//       console.error("Server Error", error);
//     });
// };

//   render() {
//     return (
//       <>
//         <section className="marquee-wrapper" id="end_credits_container">
//           <div className="end-credits fade">
//             <h1>Music Selection for the Stream</h1>

//             {/* List of music */}
//             {/* <div>{this.state.music}</div> */}
//           </div>

//           <p>{data.creditSource}</p>
//           <p>{data.creditSong}</p>
//           <p>{data.creditStream}</p>
//           <p>{data.creditWatch}</p>
//         </section>
//       </>
//     );
//   }
// }

export default Credits;

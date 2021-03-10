import './credit.css'

import React from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

class Credit extends React.Component {
  state = {
    data: []
    
}

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState(data);
    const data = data.map((e) => <p>{e.creditSource}</p>);
    console.log(data)
  }

  render() {
    return (
      <div className="marquee-wrapper" id="end_credits_container">
        <div className="end-credits fade">
          <h1 className="title">Music Source</h1>

          {data.map((music) => (
            <li>{music.creditSource}</li>
          ))}

          {/* {data.map((data = <p>{data.creditSource}</p>))} */}

          {/* <p>{data.creditSource}</p>
        <p>{data.creditSong}</p>
        <p>{data.creditStream}</p>
        <p>{data.creditWatch}</p> */}
        </div>
      </div>
    );
  }
  
}

export default Credit;

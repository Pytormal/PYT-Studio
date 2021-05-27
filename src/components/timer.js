import React from "react";

export function Min5Timer() {
  const [counter, setCounter] = React.useState(300);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter === 0) {
    let headline = document.getElementById("timer");

    headline.innerText = "Starting Soon";
  }

  return (
    <>
      <div id="timer">
        <h6 id="timer-header">
          5 Minutes is 300 Seconds,
          <h2 className="timer-title">Quick Break</h2> Be Back Soon
        </h6>
        {counter}
      </div>
    </>
  );
}

export function Min10Timer() {
  const [counter, setCounter] = React.useState(600);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter===0) {
    let headline = document.getElementById("timer");
    

     headline.innerText = "Starting Soon";
  }

  return (
    <>
      <div id="timer">
        <h6 id="timer-header">
          10 Minutes is 600 Seconds,
          <h2 className="timer-title">Stream Starting Soon</h2>
        </h6>{" "}
        {counter}
      </div>
    </>
  );
}

export function Min30Timer() {
  const [counter, setCounter] = React.useState(1800);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter===0) {
    let headline = document.getElementById("timer");
    

     headline.innerText = "Starting Soon";
  }

  return (
    <>
      <div id="timer">
        <h6 id="timer-header">
          30 Minutes is 1800 Seconds, <h2 className="timer-title">Intermission</h2> Be Back Soon
        </h6>
        {counter}
      </div>
    </>
  );
}



// if(m<0){alert('timer completed')}
//   if (m < 0) {
//     let headline = document.getElementById("timer"),
//       header = document.getElementById("header"),
//       content = document.getElementById("content");

//     headline.innerText = "Starting Soon";
//     header.style.display = "none";
//     content.style.display = "block";
//   }

//   document.getElementById("timer").innerHTML = m + ":" + s;
//   console.log(m);
//   setTimeout(startTimer, 1000);
// }

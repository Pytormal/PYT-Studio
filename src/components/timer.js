document.getElementById('timer').innerHTML =
  10 + ":" + 10;
StartTimer();

export function StartTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s===59){m=m-1}
  // if(m<0){alert('timer completed')}
  if (m<0) {
          let headline = document.getElementById("timer"),
              header = document.getElementById("header"),
              content = document.getElementById("content");

          headline.innerText = "Starting Soon";
          header.style.display = "none";
          content.style.display = "block";

         
        }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(StartTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


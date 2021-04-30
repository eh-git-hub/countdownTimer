function countdown(minutes) {
  let seconds = 60;
  let mins = minutes

  function tick() {
      //This script expects an element with an ID = "counter". You can change that to what ever you want. 
      let counter = document.getElementById("counter");
      let currentMinutes = mins-1
      seconds--;
      //Ternary Operator(?): Assigns a value to a variable based on a condition.
      counter.innerHTML = currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + seconds.toString() + "s";
      if(seconds > 0) {
          setTimeout(tick, 1000);
      } else if (mins > 1) {
              countdown(mins-1);
      } else if (seconds <= 0) {
        counter.innerHTML = "TIME'S UP!"
      }
  }
  tick();
}

countdown(2);
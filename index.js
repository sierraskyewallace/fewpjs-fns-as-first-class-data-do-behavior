/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// function that returns a greeting before noon 
function greet(time) {
  const hour = parseInt(time, 10)
  if (hour < 12) return 'Good Morning'
  if (hour > 17) return 'Good Evening'
  return 'Good Afternoon'
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
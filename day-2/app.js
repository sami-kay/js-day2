let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

//Get current time
const showCurrentTime = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

// check if it's past noon

  if (hours > 12){
    hours = hours - 12;
    meridian = 'PM';
  };

// add formatting to minutes and seconds

if (minutes < 10) {
  minutes = `0${minutes}`;
};

if (seconds < 10){
  seconds = `0${seconds}`;
};

// create time string for UI

  const timeString = `${hours}:${minutes}:${seconds}:${meridian}`;

// update ui with time string

  const clock = document.getElementById('clock');
  clock.innerText = timeString;
};


//get inputs from the ui

const wuTime = document.getElementById('wakeUpTimeSelector');
const lTime = document.getElementById('lunchTimeSelector');
const nTime = document.getElementById('napTimeSelector');
var catImage = document.getElementById('lolcatImage');
var catText = document.getElementById('timeEvent');

wuTime.addEventListener('change', () =>{
  wakeuptime = event.target.value;
   displayUpdates();
   showCurrentTime();
});

lTime.addEventListener('change', ()=> {
  lunchtime = event.target.value;
   displayUpdates();
   showCurrentTime();
});

nTime.addEventListener('change', () => {
  naptime = event.target.value;
   displayUpdates();
   showCurrentTime();
});

document.getElementById('partyTimeButton').addEventListener('click', () => {
  partytime = new Date().getHours();
    catImage.src = './images/party.jpg';
    catText.innerText = 'Party time!';
});


const displayUpdates = () => {
  const hours = new Date().getHours();
  if (hours >= wakeuptime && hours < lunchtime) {
    catImage.src = './images/wakeup.jpg';
    catText.innerText = 'Get your day started!';
  } else if (hours >= lunchtime && hours < naptime) {
   catImage.src = './images/lunch.jpg';
   catText.innerText = 'Time for food!';
  } else if (hours >= naptime && hours < evening) {
    catImage.src = './images/nap.jpg';
    catText.innerText = 'I just want a nap...';
  } else {
    catImage.src = './images/evening.jpg';
    catText.innerText = 'Let\'s slow things down.';
  };
   showCurrentTime();
};
 displayUpdates();

 const oneSecond = 1000;
 setInterval(displayUpdates, oneSecond);

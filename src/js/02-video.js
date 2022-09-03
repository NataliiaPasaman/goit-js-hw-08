import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const PLAY_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onStopTime, 1000));

function onStopTime(timeUpdate) {
  let timePause = timeUpdate.seconds;
  console.log(timePause);

  localStorage.setItem(PLAY_TIME, timePause);
}

const pause = localStorage.getItem(PLAY_TIME);

player.setCurrentTime(pause).then(function() {
  console.log(pause);
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;

      default:
          break;
  }
});

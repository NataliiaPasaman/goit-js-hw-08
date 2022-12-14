import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const PLAY_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onStopTime, 1000));
currentTimePlayer();

function onStopTime(timeUpdate) {
  let timePause = timeUpdate.seconds;
  console.log(timePause);

  localStorage.setItem(PLAY_TIME, timePause);
}

function currentTimePlayer() {
  const pause = localStorage.getItem(PLAY_TIME);

  if (pause) {
    player.setCurrentTime(pause);
  }
}

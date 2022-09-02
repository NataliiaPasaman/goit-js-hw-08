import Player from '@vimeo/player';
import throttle from "lodash.throttle";
/** 

Під час перезавантаження сторінки скористайся методом setCurrentTime() 
з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час в
ідтворення оновлювався у сховищі не частіше, ніж раз на секунду.
 */
const PLAY_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onStopTime);

function onStopTime(timeUpdate) {
  let time = timeUpdate.seconds;
  console.log(time);

  localStorage.setItem(PLAY_TIME, time);
}




const a = localStorage.getItem(PLAY_TIME);
const b = Number(a);
console.log(b);

const c = player.getCurrentTime().then(function(b) {
  // seconds = the current playback position
  console.log(b);
}).catch(function(error) {
  // an error occurred
});

// player.setCurrentTime(b).then(function(seconds) {
//   // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//   switch (error.name) {
//       case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           break;

//       default:
//           // some other error occurred
//           break;
//   }
// });

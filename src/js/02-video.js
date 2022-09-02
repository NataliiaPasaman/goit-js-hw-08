import Player from '@vimeo/player'
// const player = require("@vimeo/player");
/** 

Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, 
що у тебе плеєр доданий як npm пакет, а не через CDN.

Вивчи документацію методу on() і почни відстежувати подію timeupdate - 
оновлення часу відтворення.

Зберігай час відтворення у локальне сховище. 
Нехай ключем для сховища буде рядок "videoplayer-current-time".

Під час перезавантаження сторінки скористайся методом setCurrentTime() 
з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час в
ідтворення оновлювався у сховищі не частіше, ніж раз на секунду.
 */
const PLAY_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function () {
  console.log('played the video!');
  const time = {
    seconds: 3.034,
};
  localStorage.setItem(PLAY_TIME, JSON.stringify(time));
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });


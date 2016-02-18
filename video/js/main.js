

var $btn = $('.btn-video');
var $video = $('.dino-video').get(0);

$btn.on('click',function () {
  $video.pause();
  });


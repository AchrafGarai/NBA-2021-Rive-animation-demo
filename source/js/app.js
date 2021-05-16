
// JavaScript
window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });
let canvas = document.getElementById("canvas");
var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width=window_width;
canvas.height=window_height;

new rive.Rive({
  src: 'https://public.rive.app/community/runtime-files/285-564-nba-2k21-animation-demo.riv',
  canvas: canvas,
  autoplay: true,
  layout: new rive.Layout({fit: 'cover', alignment: 'center'}),
})

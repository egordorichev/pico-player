// Big thanks to https://github.com/AfBu/PicoLoader
// pico-8 web player variables that must be present
var Module;
var playable_area_count = 0;
var playarea_state = 0;
var codo_command = 0;
var codo_command_p = 0;
var codo_volume = 256;
var codo_running = true;
var pa_pid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Pico-8 buttons to Web Player key codes lookup table
var pico8keys = [
  [37, 39, 38, 40, 90, 88],
  [83, 70, 69, 68, 9, 81]
];

// Loads pico8 web player library and setups everything to run
function PicoPlayer(element, cart, lib) {
  // fallback to bbs version of pico8 console
  if (!lib) {
    lib = 'https://www.lexaloffle.com/play/pico8_0205c.js';
  }

  // load element by ID
  if (typeof(element) == 'string') {
    element = document.getElementById(element);
  }

  // create canvas and add it into element
  var canvas = document.createElement('canvas');
  element.appendChild(canvas);

  // setup module to load card and point to our canvas
  Module = {
    arguments: [cart],
    canvas: canvas
  };

  // load pico8 library
  var head = document.getElementsByTagName('head')[0];
  var js = document.createElement('script');
  js.src = lib;
  head.appendChild(js);
}

// press button
function PicoPress(k, p) {
  var kc = pico8keys[p][k];

  gd({
    type: 'keydown',
    keyCode: kc
  });
}

// release button
function PicoRelease(k, p) {
  var kc = pico8keys[p][k];

  gd({
    type: 'keyup',
    keyCode: kc
  });
}

// set volume (0 - 256)
function PicoVolume(vol) {
  codo_volume = vol;
  codo_command = 2;
  codo_command_p = codo_volume;
}

// toggle sound
function PicoMute() {
  codo_volume = (codo_volume == 0 ? 256 : 0);
  codo_command = 2;
  codo_command_p = codo_volume;
}

// toggle pause
function PicoPause() {
  codo_running = !codo_running;

  if (codo_running) {
    Module.resumeMainLoop();
  } else {
    Module.pauseMainLoop();
  }
}

// reset cart
function PicoReset() {
  codo_command = 1;
  codo_running = true;

  Module.resumeMainLoop();
}

window.addEventListener('keydown', (e) => {
  if (e.target.localName != 'input') {
    switch (e.keyCode) {
      case 37: // left
      case 39: // right
        e.preventDefault();
        break;
      case 38: // up
      case 40: // down
        e.preventDefault();
        break;
      default:
        break;
        }
    }
}, {
  capture: true,
  passive: false
});

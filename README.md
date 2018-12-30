# pico-player
Magic js library, that allows you to run PICO-8 carts in browser without exporting them

## Usage

See `examples/minimal` for minimal example. The library must run on a server, otherwise, cart loading will fail.

```js
document.addEventListener("DOMContentLoaded", function(event) {
  PicoPlayer('pico-container', 'cart.p8.png');
});
```

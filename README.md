# PICO-Player
Javascript wrapper that allow you to use PICO-8 web player outside official [Lexaloffle BBS](https://www.lexaloffle.com/bbs/).

## Usage
**Vanilla JavaScript**
```js
document.addEventListener("DOMContentLoaded", function(event) { 
	PicoPlayer('container', 'cart.p8.png');
});
```

**jQuery**
```js
$(document).ready(function () {
	PicoPlayer('container', 'cart.p8.png');
});
```

*Note: you need to serve the page over HTTP to avoid `COULD NOT ACCESS CART` error.*

## Features
* Embedding PICO-8 using only one simple javascript command
* Send button states to web player
* Pause, Reset cart, Set or toggle volume (mute)
* Basic examples included

## Authors
* **[Egor Dorichev](https://github.com/EgorDorichev)** - *Author and Maintainer*
* **[Florian Dormont](https://github.com/Eiyeron)** - *Mobile Template*
* **[Petr Kratina](https://github.com/AfBu)** - *Initial Work*

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing Code
We'd love to accept your patches! If you have improvements, send us your pull requests!
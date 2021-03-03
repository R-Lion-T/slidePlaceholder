# slidePlaceholder
Slide text attribute placeholders tags input
## Description

**slidePlaceholder** allows the attribute for the input field to show in turn the text that you pass in the array.

**slidePlaceholder** allows you to flexibly customize the animation.

**slidePlaceholder** doesn't use jQuery.


## Add tage in body
```html 
<input type="text" class="slidePlaceholder">
```
## Add slidePlaceholder.js 
```js
<script src="js/slidePlaceholder.js"></script>
```
## Initialization slidePlaceholder
``` js
new slidePlaceholder({
	className: "slidePlaceholder",  // Class name 
	arrText: ["Смартфоны", "Электроника", "Косметика"], // Array with texts
	pauseNextSymbol: 100,// Pause next symbol  (by default: 200)
	pauseDeleteSymbol: 50,// Pause for each character when deleting  (by default: 200)
	pauseNextText: 1000, // Pause for each new word (by default: 0)
	pauseHideText: 1000,// Pause before the text goes away (by default: 0)
	cursor: true, // cursor (by default: false)
	pauseBlur: 1000, // pause when you lose focus (by default: 0)
	repeat: 2 // How many times should the slider play (by default: "infinite")
}).start();
```
## Attention
**slidePlaceholder** not supported for IE all version

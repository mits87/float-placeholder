# float-placeholder
> Floating label input.

Checkout the [DEMO](https://jsfiddle.net/mits87/r6sx5mzk/)

__Install it:__

```sh
npm install --save float-placeholder
```

__Usage:__

```js
require('jquery');
require('float-placeholder');

$('[name="email"]').floatPlaceholder();
```

```html
<div class="form-group--float-label">
  <input type="email" name="email" value="" placeholder="E-mail" data-float-placeholder="true">
  <label class="float-label float-label--active" for="email">E-mail</label>
</div>
```

```scss
@import '~float-placeholder/src/scss/float-placeholder';
```

__Compiled version:__

```html
<script src="./node_modules/float-placeholder/js/float-placeholder.min.js"></script>
<link rel="stylesheet" href="./node_modules/float-placeholder/build/css/float-placeholder.min.css">
```

__Building and running:__

```
  gulp
```
  
__License:__

MIT

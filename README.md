# change-radix

A module that changes numbers radix ([docs](https://silent-tempest.github.io/change-radix/)).

### Install (Node.js / Browserify)

`npm i --save change-radix`

```javascript
const radix = require('change-radix')
```

### Install (Browser / Workers)

```html
<script src="https://rawgit.com/silent-tempest/change-radix/master/dist/index.min.js"></script>
```

```javascript
radix.parse('Z', 62) // -> 61
```

### The use

```javascript
radix.convert('78xyXY', 62, 2)
// -> '110000101110000110101101010100110'
radix.radix(5.43e21, 51)
// -> 'hrjOqqmhvwyAO'
radix.parse('hrjOqqmhvwyAO', 51)
// -> 5.43e21
```

### License

Released under the MIT Licence.

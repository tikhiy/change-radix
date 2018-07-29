# change-radix

A module that changes numbers radix ([docs](https://silent-tempest.github.io/change-radix/)).

### Install

`npm i --save change-radix`

```javascript
const radix = require('change-radix')
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

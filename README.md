<a
  href="https://travis-ci.org/Xotic750/is-falsey-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-falsey-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-falsey-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-falsey-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-falsey-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-falsey-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-falsey-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-falsey-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-falsey-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-falsey-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-falsey-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-falsey-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-falsey-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-falsey-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-falsey-x"></a>

## is-falsey-x

Test if a given value is falsey.

<a name="exp_module_is-falsey-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

This method tests if a given value is falsey.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the value is falsey: otherwise `false`.

| Param | Type            | Description        |
| ----- | --------------- | ------------------ |
| value | <code>\*</code> | The value to test. |

**Example**

```js
import isFalsey from 'is-falsey-x';

console.log(isFalsey()); // true
console.log(isFalsey(0)); // true
console.log(isFalsey('')); // true
console.log(isFalsey(false)); // true
console.log(isFalsey(null)); // true

console.log(isFalsey(true)); // false
console.log(isFalsey([])); // false
console.log(isFalsey(1)); // false
console.log(isFalsey(function() {})); // false
```

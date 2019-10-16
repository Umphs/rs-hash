# rs-hash

My port for RS Hash from https://www.programmingalgorithms.com/algorithm/rs-hash?lang=C

Used to hash a string to an integer, I just looked up hash functions and tried to find the one with reportedly fewer hash colisions ported it and voila.

## Usage

```js
import hash from "./index.ts";
const data = "jdfgsdhfsdfsd 6445dsfsd7fg/*/+bfjsdgf%$^";
console.log(hash(data)); // 2012450421
```

# is-kde [![Build Status Travis](https://travis-ci.org/t1st3/is-kde.svg?branch=master)](https://travis-ci.org/t1st3/is-kde) [![Coverage Status](https://coveralls.io/repos/github/t1st3/is-kde/badge.svg?branch=master)](https://coveralls.io/github/t1st3/is-kde?branch=master)

> Check if current session is KDE


## Install

```
$ npm install --save is-kde
```


## Usage

```js
const isKde = require('is-kde');

isKde().then(data => {
  console.log(data);
  //=> true or false
});
```


## API

### isKde()

Is a promise.


## License

MIT © [t1st3](http://tiste.org)

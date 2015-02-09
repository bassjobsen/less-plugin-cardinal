less-plugin-cardinal
========================

Imports the Less code for [Cardinal](http://cardinalcss.com/) before your custom Less code.

## lessc usage

Install..

Requires Less v2.4.0

```
npm install -g less-plugin-cardinal
```

and then on the command line,

```
lessc file.less --cardinal
```


## Programmatic usage

```
var LessPlugincardinal = require('less-plugin-cardinal'),
    cardinalPlugin = new LessPlugincardinal();
less.render(lessString, { plugins: [cardinalPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.

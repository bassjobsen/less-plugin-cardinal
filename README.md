less-plugin-cardinal
========================

Imports the Less code for [Cardinal](http://cardinalcss.com/) before your custom Less code.

## lessc usage

Install..

Notice require Less v3.2.1 (download from github)

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

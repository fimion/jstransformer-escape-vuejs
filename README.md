# jstransformer-escape-vuejs

[escape-html](http://npm.im/escape-html) support plus curly brackets for [JSTransformers](http://github.com/jstransformers).

modified from  jstransformer-escape-html

## Installation

    npm install jstransformer-escape-vuejs

## API

```js
var escape = require('jstransformer')(require('jstransformer-escape-vuejs'))

escape.render('foo & bar').body
//=> 'foo &amp; bar'
```

## License

MIT

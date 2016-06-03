[![Build Status](https://travis-ci.org/Roilan/mailchimpify.svg?branch=master)](https://travis-ci.org/Roilan/mailchimpify)


## Mailchimpify

Mailchimp's custom attributes allow anyone to add, change or remove without touching code through their design view.

When you're using React or a module that uses it as dependency (ie: [react-html-email](https://github.com/chromakode/react-html-email)), it will error since custom attributes like `mc:edit` arent't valid. This module looks for strings like `data-mc-edit` and replaces them with the appropriate Mailchimp attribute.

## Install
```js
npm install --save mailchimpify
```

## Usage

This module currently processes the following strings:

1. `data-mc-edit` => `mc:edit`
1. `data-mc-repeatable` => `mc:repeatable`

Example:

```js
var mailchimpify = require('mailchimpify');
var div = '<div data-mc-edit="content">some text</div>';

mailchimpify(div); // <div mc:edit="content">some text</div>;

```


## License
[MIT](https://github.com/Roilan/mailchimpify/blob/master/LICENSE)

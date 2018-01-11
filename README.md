[![Build Status](https://travis-ci.org/Roilan/mailchimpify.svg?branch=master)](https://travis-ci.org/Roilan/mailchimpify)


## Mailchimpify

Mailchimp's custom `mc:edit` attributes allow anyone to add, change or remove without touching code through their design view.

When you're using React or a module that uses it as dependency (ie: [react-html-email](https://github.com/chromakode/react-html-email)), it will error since `mc:edit` isn't valid. This replaces any string that includes `data-mc-edit` with Mailchimp's `mc:edit`.

## Install
```js
npm install --save mailchimpify
```

## Usage
```js
var mailchimpify = require('mailchimpify');
var div = '<div data-mc-edit="content">some text</div>';

mailchimpify(div); // <div mc:edit="content">some text</div>;

```

## License
[MIT](https://github.com/Roilan/mailchimpify/blob/master/LICENSE)%
## Mailchimpify

Mailchimp has custom `mc:edit` attributes that allows your custom html to be edited through their design view. This allows for non-developers, to move things around without any help. 

When you're using React or a module that uses it as dependency it (ie: [react-html-email](https://github.com/chromakode/react-html-email)), it will error since `mc:edit` isn't valid. This replaces any `data-mc-edit` string with Mailchimp's `mc:edit`.

## Usage
```js
var mailchimpify = require('mailchimpify');
var div = '<div data-mc-edit="content">some text</div>';

mailchimpify(div); // <div mc:edit="content">some text</div>;

```

## License
[MIT](https://github.com/Roilan/mailchimpify/blob/master/LICENSE)
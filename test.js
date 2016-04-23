var mailchimpify = require('./index');
var test = require('tape');

test('should replace `data-mc-edit` tags with `mc:edit`', function (t) {
  var html = '<div data-mc-edit="content">mybar</div>';
  var expected = '<div mc:edit="content">mybar</div>';

  t.equal(mailchimpify(html), expected);
  t.end();
});

test('should return exact string if no `data-mc-edit` is present', function (t) {
  var str = 'foo';
  var expected = 'foo';

  t.equal(mailchimpify(str), expected);
  t.end();
});

test('should throw if invalid input', function (t) {
  var invalid = function () { };

  t.throws(function () {
    mailchimpify(invalid);
  }, 'throws with invalid input for mailchimpify');
  t.end();
});

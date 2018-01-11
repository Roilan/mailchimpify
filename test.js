var mailchimpify = require('./index');
var test = require('tape');

test('should replace `data-mc-edit` tags with `mc:edit`', function (t) {
  var html = '<div data-mc-edit="content">mybar</div>';
  var expected = '<div mc:edit="content">mybar</div>';

  t.equal(mailchimpify(html), expected);
  t.end();
});

test('should replace other special tags', function (t) {
  t.equal(mailchimpify('<div data-mc-hideable>mybar</div>'),
    '<div mc:hideable>mybar</div>');

  t.equal(mailchimpify('<p data-mc-repeatable="F"></p>'),
    '<p mc:repeatable="F"></p>');

  t.equal(mailchimpify('<p data-mc-variant="A"></p>'),
    '<p mc:variant="A"></p>');

  t.equal(mailchimpify('<p data-mc-label="B"></p>'),
    '<p mc:label="B"></p>');

  t.end();
});

test('should handle multiple replacements, but only valid ones', function (t) {
  var str = '<div data-mc-label="A" data-mc-hideable>' +
              '<div data-mc-nope="B" data-mc-variant="C">' +
                '<div data-mc-label="D"/>' +
              '</div>' +
            '</div>';

  var result = mailchimpify(str);

  t.equal(result, '<div mc:label="A" mc:hideable>' +
                    '<div data-mc-nope="B" mc:variant="C">' +
                      '<div mc:label="D"/>' +
                    '</div>' +
                  '</div>');
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

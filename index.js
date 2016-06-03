const TAGS = [
  {
    tagRegex: /data-mc-repeatable/g,
    replaceText: 'mc:repeatable'
  },
  {
    tagRegex: /data-mc-edit/g,
    replaceText: 'mc:edit'
  }
];

var replaceTag = function (str, tagRegex, replaceText) {
  return str.replace(tagRegex, replaceText);
};

exports = module.exports = function (input) {
  input = input || '';

  if (typeof (input) !== 'string') {
    throw new Error('invalid input for mailchimpify');
  }

  TAGS.forEach(function (tag) {
    input = replaceTag(input, tag.tagRegex, tag.replaceText);
  });

  return input;
};

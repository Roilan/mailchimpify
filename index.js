var TAGS = [
  {
    tagRegex: /data-mc-repeatable/g,
    replaceText: 'mc:repeatable'
  },
  {
    tagRegex: /data-mc-edit/g,
    replaceText: 'mc:edit'
  }
];

function replaceTag (str, tag) {
  return str.replace(tag.tagRegex, tag.replaceText);
}

exports = module.exports = function (input) {
  input = input || '';

  if (typeof (input) !== 'string') {
    throw new Error('invalid input for mailchimpify');
  }

  TAGS.forEach(function (tag) {
    input = replaceTag(input, tag);
  });

  return input;
};

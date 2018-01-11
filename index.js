exports = module.exports = function (input) {
  input = input || '';

  if (typeof (input) !== 'string') {
    throw new Error('invalid input for mailchimpify');
  }

  return input
    .replace(/data-mc-edit/g, 'mc:edit')
    .replace(/data-mc-hideable/g, 'mc:hideable')
    .replace(/data-mc-repeatable/g, 'mc:repeatable')
    .replace(/data-mc-variant/g, 'mc:variant')
    .replace(/data-mc-label/g, 'mc:label');
};

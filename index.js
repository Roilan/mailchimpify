exports = module.exports = function (input) {
  input = input || '';

  if (typeof (input) !== 'string') {
    throw new Error('invalid input for mailchimpify');
  }

  return input.replace(/data-mc-edit/g, 'mc:edit');
};

const crypto = require('crypto');



function generatePassword(length, options) {  
    const defaultOptions = {
        symbols: true,
        uppercase: true,
        lowercase: true,
        numbers: true,
    };

    const opts = { ...defaultOptions, ...options };

    const passwordCharacters = generatePasswordCharacters(opts);

    const passwordBuffer = crypto.randomBytes(length);
    const password = passwordBuffer.reduce((password, byte) => {
        return password + passwordCharacters[byte % passwordCharacters.length];
    }, '');

    return password;
}

function generatePasswordCharacters(options) {
  let characters = '';

  if (options.symbols) {
    characters += '!@#$%^&*()-_=+';
  }

  if (options.uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (options.lowercase) {
    characters += 'abcdefghigklmnopqrstuvwxyz';
  }

  if (options.numbers) {
    characters += '0123456789';
  }

  return characters;
}

module.exports = {
  generatePassword,
};
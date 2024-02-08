const passwordGenerator = require('./index');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введите длину пароля: ', (length) => {
    length = Number(length);
    const password = passwordGenerator.generatePassword(length);
    console.log(`Ваш пароль: ${password}`);
    rl.close();
});
let password = '******';

if (password.length >= 4 &&(password.includes ('-') || password.includes ('_'))) {
    console.log('Password is correct');
} else {
    console.log('Password is incorrect')
}
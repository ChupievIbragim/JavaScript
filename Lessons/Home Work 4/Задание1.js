let emails = ["embargtwersten@gmail.com", "john@example.com", "mary@example.com", "admin@example.com"];
let blacklist = ["mary@example.com", "admin@example.com"];

function filterEmails(emails, blacklist) {
    return emails.filter(email => !blacklist.includes(email));
}

let validEmails = filterEmails(emails, blacklist);
console.log(validEmails);

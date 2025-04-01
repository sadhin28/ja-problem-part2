function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid email format";
    }
   const [userName,domainName]=email.split('@');
   return `${userName} sent you an email from ${domainName}`
}


console.log(sendNotification("zihad.ph@gmail.com"));
console.log(sendNotification("taosifsadhin@gmail.com"));

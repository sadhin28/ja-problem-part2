function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email" ;
    }
   const [userName,domainName]=email.split('@');
   return `${userName} sent you an email from ${domainName}`
}


console.log(sendNotification("zihad.ph@gmail.com"));
console.log(sendNotification("taosifsadhingmail.com"));

let mail: string = "jitesh@gmail.com";
// let mail: string = "jiteshgmail.com";
// let mail: string = "jitesh@gmailcom";

if (mail.indexOf("@") == -1 || mail.indexOf(".") == -1) {
  console.log("Invalid Email");
} else {
  console.log(" Valid Email");
}

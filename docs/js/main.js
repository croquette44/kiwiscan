import { lang } from "./lang.js";

document.addEventListener('DOMContentLoaded', () => {
    lang.getLang();
});



// // Function to send email via smtp
// let myForm = document.getElementById('formMail');
//   myForm.addEventListener('submit', function(e)
// {
//     e.preventDefault();
//     let fullName = document.getElementById('fullName').value;
//     let mail = document.getElementById('mail').value;
//     let theSubject = document.getElementById('subject').value;
//     let theMessage = document.getElementById('message').value;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "bonnenfant.romain@gmail.com",
//         Password : "87278544-595b-4dcd-b1bd-762a77ded37e",
//         To : "bonnenfant.romain@gmail.com",
//         From : mail,
//         Subject : theSubject,
//         Body : fullName+"_"+theSubject+" : "+theMessage
//     }).then(
//         message => alert(message)
//     );
// });

// Cookies consent modal
// function getCookie(cname) {
//     const name = cname + "=";
//     const ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1);
//         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//     }
//     return "";
// }

// function createAcceptCookie() {
//     const cookieBanner = document.getElementById("cookie-banner");
//     document.cookie = "accepted_cookie_policy=yes; expires=" + setExpiryDate() + ";";
//     cookieBanner.classList.add("accepted-cookie-policy");
// }

// function setExpiryDate() {
//     const date = new Date();
//     date.setFullYear(date.getFullYear() + 1);
//     return date.toUTCString();
// }
// const isCookieSet = getCookie("accepted_cookie_policy");
// if (isCookieSet === "") {
//     document.getElementById("cookie-button").addEventListener("click", createAcceptCookie);
// } else {
//     document.getElementById("cookie-banner").classList.add("accepted");
// }

import { lang } from "./lang.js";


document.addEventListener('DOMContentLoaded', () => {
    lang.getLang();
});

    // let myForm = document.getElementById('formMail');

    // myForm.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     let fullName = document.getElementById('fullName').value;
    //     let mail = document.getElementById('mail').value;
    //     let subject = document.getElementById('subject').value;
    //     let message = document.getElementById('message').value;
    //     alert(`
    //         ${fullName} , your mail is send !
    //         for this : ${subject}.
    //         your mail are : ${mail}.
    //         your text : ${message}.
    //         `);
    // });
    

    // // Cookies consent modal
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

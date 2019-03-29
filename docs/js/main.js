import { lang } from "./lang.js";

document.addEventListener('DOMContentLoaded', () => {
    lang.getLang();
});

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

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVQEa3af7N1F54NaWOQ2rp6zoaZZDT_KU",
    authDomain: "portfolio-b96b4.firebaseapp.com",
    projectId: "portfolio-b96b4",
    storageBucket: "portfolio-b96b4.appspot.com",
    messagingSenderId: "103584299208",
    appId: "1:103584299208:web:5fb811bed265b767a60dfd",
    measurementId: "G-Y9DPJEP6QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// reference your database
const portfolio = firebase.firestore().collection("collectionss");
document.getElementById("send").addEventListener("submit", subitForm);

function subitForm(e) {
    e.preventDefault();
    var fname = getElementVal('fname');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');
    console.log(fname, email, subject, message);
    saveMessage(fname, email, subject, message);
}

const saveMessage = (fname, email, message, subject) => {
    // var newContactForm = portfolio.push();
    portfolio.set({
        'fname': fname,
        'email': email,
        'subject': subject,
        'message': message,
        'status': 1,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
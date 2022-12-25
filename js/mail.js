const firebaseConfig = {
    apiKey: "AIzaSyC85FsUOVKM-n3kuP5YUbw0cyKrnqUJ-QI",
    authDomain: "portfolio-dcc50.firebaseapp.com",
    projectId: "portfolio-dcc50",
    storageBucket: "portfolio-dcc50.appspot.com",
    messagingSenderId: "409175514758",
    appId: "1:409175514758:web:008c61374d594477023b07",
    measurementId: "G-E5XDC2MMTN"
  };
// initilize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
const portfolio = firebase.firestore().collection("collectionss");
document.getElementById("send").addEventListener("submit",subitForm);

function subitForm(e){
    e.preventDefault();
    var fname = getElementVal('fname');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');
    // console.log(fname,email,subject,message);
    saveMessage(fname,email,subject,message);
}

const saveMessage = (fname,email,message,subject)=>{
    // var newContactForm = portfolio.push();
    portfolio.set({
        'fname' : fname,
        'email' :email,
        'subject' : subject,
        'message' : message,
        'status' : 1,
    });
};

const getElementVal = (id)=>{
    return document.getElementById(id).value;
}
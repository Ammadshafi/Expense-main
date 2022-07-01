 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyBgz8uEenfBDQwB4ScGPLnPW0i8jjSGDK4",
    authDomain: "expense-tracker-pwa-61e3c.firebaseapp.com",
    projectId: "expense-tracker-pwa-61e3c",
    storageBucket: "expense-tracker-pwa-61e3c.appspot.com",
    messagingSenderId: "608433789970",
    appId: "1:608433789970:web:3f59fcbbd1c55e25a04ccb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
firebase.messaging()

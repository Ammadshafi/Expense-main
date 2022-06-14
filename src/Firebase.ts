import {initializeApp} from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyBgz8uEenfBDQwB4ScGPLnPW0i8jjSGDK4",
    authDomain: "expense-tracker-pwa-61e3c.firebaseapp.com",
    projectId: "expense-tracker-pwa-61e3c",
    storageBucket: "expense-tracker-pwa-61e3c.appspot.com",
    messagingSenderId: "608433789970",
    appId: "1:608433789970:web:3f59fcbbd1c55e25a04ccb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging=getMessaging()
export const configureMessaging=()=>{

        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log("granted");
            getToken(messaging, { vapidKey: 'BLu8Y4hC_85bFkbdSBdOlLZBOwFTWynFHbwS22GVUZWoWS-D7wcedSfMI34V5pbh4xEBKYH6sP7TMxF8M8Y6acg' }).then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                    // console.log("hello");
                    
                } else {
                 
                  console.log('No registration token available. Request permission to generate one.');
                
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              
              });
        }})}

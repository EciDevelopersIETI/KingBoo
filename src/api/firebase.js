import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCHr9pg9taMbHea8IagjNlH_zf7WTcHLf4",
    authDomain: "kingboo-1e6c8.firebaseapp.com",
    databaseURL: "https://kingboo-1e6c8.firebaseio.com",
    projectId: "kingboo-1e6c8",
    storageBucket: "kingboo-1e6c8.appspot.com",
    messagingSenderId: "679785832889",
    appId: "1:679785832889:web:f46b7d60b727379c3c1668",
    measurementId: "G-VXEEZ0Y9Y6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export{
    storage, firebase as default
}
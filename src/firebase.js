import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBb5pkOeKRSTdy_i3QutR1P3pc-J6L6fCA",
    authDomain: "todo-app-cp-c6cda.firebaseapp.com",
    projectId: "todo-app-cp-c6cda",
    storageBucket: "todo-app-cp-c6cda.appspot.com",
    messagingSenderId: "252413373154",
    appId: "1:252413373154:web:7d6a0e9c6a0896add60cbb"
    
})

const db = firebaseApp.firestore();

export default db;
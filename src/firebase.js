import firebase from 'firebase'


const app = firebase.initializeApp({
    apiKey: "AIzaSyBSCqZNt47aIgacbUhnmTbbAvdusPHEadE",
    authDomain: "twitter-clone-fe169.firebaseapp.com",
    databaseURL: "https://twitter-clone-fe169.firebaseio.com",
    projectId: "twitter-clone-fe169",
    storageBucket: "twitter-clone-fe169.appspot.com",
    messagingSenderId: "596999970398",
    appId: "1:596999970398:web:9317eb8146f77547735ecf"
})

const db = app.firestore();

export default db;
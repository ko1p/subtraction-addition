import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDNAhbJCtcmv6WlqvsxrIJVwBL56MEAKCA",
    authDomain: "math-results.firebaseapp.com",
    projectId: "math-results",
    storageBucket: "math-results.appspot.com",
    messagingSenderId: "9692606124",
    appId: "1:9692606124:web:46d425f66045cd90b43909"
});

const db = firebase.firestore();

export default db;
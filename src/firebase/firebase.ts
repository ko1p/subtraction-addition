import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
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

// export const Results: React.FC = () => {
//     db.collection("results").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(doc.data());
//         });
//     });

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
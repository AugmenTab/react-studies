import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4ND88qvqGP5sr_TE0buOR4SBVGdZRAd4",
    authDomain: "catch-of-the-day-tbaum.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tbaum.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is a default export.
export default base;
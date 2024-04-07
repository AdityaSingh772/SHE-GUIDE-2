import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBnlhF1kf0WKYsT_MmPkIxHLayL89Rv-oA",
    authDomain: "sanket-a7d6a.firebaseapp.com",
    projectId: "sanket-a7d6a",
    storageBucket: "sanket-a7d6a.appspot.com",
    messagingSenderId: "476687279547",
    appId: "1:476687279547:web:5d7e6179500081da67d09e",
    measurementId: "G-27TVMZ9LDT"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
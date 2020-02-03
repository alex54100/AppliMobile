import * as firebase from 'firebase';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCAuRaJ3tIy59NKeFHLc9iRecLyVCDs_hw",
    authDomain: "trocservices-7b189.firebaseapp.com",
    databaseURL: "https://trocservices-7b189.firebaseio.com/",
    projectId: "trocservices-7b189",
    storageBucket: "trocservices-7b189.appspot.com",
    messagingSenderId: "95213023473",
    appId: "1:95213023473:web:335bd92d3332770ca97950",
    measurementId: "G-EYYS32HCQW"
};
// Initialize Firebase
const Firebase = firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);

export default Firebase

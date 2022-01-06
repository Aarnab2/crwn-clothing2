
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyB0rbcP2pmfgx6wdY2bP_YtgzaOLK-rf2M",
  authDomain: "crwn-db2-1c5cc.firebaseapp.com",
  projectId: "crwn-db2-1c5cc",
  storageBucket: "crwn-db2-1c5cc.appspot.com",
  messagingSenderId: "126606628020",
  appId: "1:126606628020:web:71399d7f14727cfc5833e1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
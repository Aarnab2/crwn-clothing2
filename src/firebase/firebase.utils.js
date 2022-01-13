
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth)
    return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  console.log("firestore ", snapshot)
  if (!snapshot.exists) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error at creating user ', e.message)
    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDnYHCwkW6gG4H0ek4M3Zd7ZgAMq-RXytQ",
  authDomain: "crwn-clothing-663b2.firebaseapp.com",
  projectId: "crwn-clothing-663b2",
  storageBucket: "crwn-clothing-663b2.appspot.com",
  messagingSenderId: "953979243859",
  appId: "1:953979243859:web:bb17292e646ec0b6b1e5a6",
};

initializeApp(config);
export const db = getFirestore();
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = collection(db, "users");
  const userDoc = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(userDoc);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDoc;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

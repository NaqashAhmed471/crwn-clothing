import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDnYHCwkW6gG4H0ek4M3Zd7ZgAMq-RXytQ",
  authDomain: "crwn-clothing-663b2.firebaseapp.com",
  projectId: "crwn-clothing-663b2",
  storageBucket: "crwn-clothing-663b2.appspot.com",
  messagingSenderId: "953979243859",
  appId: "1:953979243859:web:bb17292e646ec0b6b1e5a6",
};

initializeApp(config);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

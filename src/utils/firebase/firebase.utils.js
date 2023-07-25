import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQiWYVFAogXteW7RzkoL2dItioSC9m554",
    authDomain: "crwn-clothing-765bb.firebaseapp.com",
    projectId: "crwn-clothing-765bb",
    storageBucket: "crwn-clothing-765bb.appspot.com",
    messagingSenderId: "706451176552",
    appId: "1:706451176552:web:7b8485671f7c97977f4fdd",
    measurementId: "G-JQB8K37FWD"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const SignInWithGooglePopup = () => signInWithPopup(auth, provider); 
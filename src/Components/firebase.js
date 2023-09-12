import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyApEMCSwlmKBUoLwWcby2lRLJiLqCLT6l8",
    authDomain: "clone-9de36.firebaseapp.com",
    projectId: "clone-9de36",
    storageBucket: "clone-9de36.appspot.com",
    messagingSenderId: "160485116981",
    appId: "1:160485116981:web:96d41c08645d48fd6cb57c"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fStore = getFirestore(app);
export const providers = new GoogleAuthProvider();

// export default {firebaseAuth, fStore, providers};

export default app;









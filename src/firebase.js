// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMzY-2f231Qx3ZfF4DMd9KKJhXPzXeFjU",
  authDomain: "netflix-clone-4fa64.firebaseapp.com",
  projectId: "netflix-clone-4fa64",
  storageBucket: "netflix-clone-4fa64.firebasestorage.app",
  messagingSenderId: "623509854119",
  appId: "1:623509854119:web:472d338786e2bfd6158882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};

const logout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, db, login, signUp, logout };

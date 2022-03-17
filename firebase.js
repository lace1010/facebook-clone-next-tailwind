import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhNikSNkY1TvmjVPYbTCYROtdEImAiJ_k",
  authDomain: "facebook-clone-next-tailwind.firebaseapp.com",
  projectId: "facebook-clone-next-tailwind",
  storageBucket: "facebook-clone-next-tailwind.appspot.com",
  messagingSenderId: "521972304054",
  appId: "1:521972304054:web:60f4019b4cb075c344be17",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

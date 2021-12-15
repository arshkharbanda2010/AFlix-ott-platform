import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIxw2medZ0ESoLVS9Ao3vKTLYMurFbVFY",
  authDomain: "netflix-clone-3f663.firebaseapp.com",
  projectId: "netflix-clone-3f663",
  storageBucket: "netflix-clone-3f663.appspot.com",
  messagingSenderId: "108326501331",
  appId: "1:108326501331:web:3890af37a9280626954d26",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;

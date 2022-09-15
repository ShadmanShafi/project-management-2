// Not needed, migrated to Back-end SQLite server. 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDbMrl8TkoTHMvX7_rTW2Cf8ijeohcfmkE",
  authDomain: "task-manger-195f5.firebaseapp.com",
  projectId: "task-manger-195f5",
  storageBucket: "task-manger-195f5.appspot.com",
  messagingSenderId: "288573341748",
  appId: "1:288573341748:web:3f2b62f40209fcd41e8a61",
  measurementId: "G-YNHVW9R9X6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

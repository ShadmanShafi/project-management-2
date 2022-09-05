import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  // apiKey: "AIzaSyBrYC08RD88tYMezT_gTv4BXs0pp8YLc7M",
  // authDomain: "task-management-f09ba.firebaseapp.com",
  // projectId: "task-management-f09ba",
  // storageBucket: "task-management-f09ba.appspot.com",
  // messagingSenderId: "561748268028",
  // appId: "1:561748268028:web:4b1ff058b6663d3a3f9879"
  apiKey: "AIzaSyDbMrl8TkoTHMvX7_rTW2Cf8ijeohcfmkE",
  authDomain: "task-manger-195f5.firebaseapp.com",
  projectId: "task-manger-195f5",
  storageBucket: "task-manger-195f5.appspot.com",
  messagingSenderId: "288573341748",
  appId: "1:288573341748:web:3f2b62f40209fcd41e8a61",
  measurementId: "G-YNHVW9R9X6"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
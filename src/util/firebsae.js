import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBrYC08RD88tYMezT_gTv4BXs0pp8YLc7M",
  authDomain: "task-management-f09ba.firebaseapp.com",
  projectId: "task-management-f09ba",
  storageBucket: "task-management-f09ba.appspot.com",
  messagingSenderId: "561748268028",
  appId: "1:561748268028:web:4b1ff058b6663d3a3f9879"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
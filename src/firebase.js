// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVN8ztWMKUAaXYzH-RmODwypkQtrYfvhw",
  authDomain: "react-task-1-bf861.firebaseapp.com",
  databaseURL: "https://react-task-1-bf861-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "react-task-1-bf861",
  storageBucket: "react-task-1-bf861.appspot.com",
  messagingSenderId: "167971640321",
  appId: "1:167971640321:web:deec7add582321e6d35c00",
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}
//initialize database
export const db = getDatabase(firebaseApp);

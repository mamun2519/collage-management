// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmDc_SPC77Y2LUcyF6jJ8d1dtMZ9NqemM",
  authDomain: "collage-management-ca2fc.firebaseapp.com",
  projectId: "collage-management-ca2fc",
  storageBucket: "collage-management-ca2fc.appspot.com",
  messagingSenderId: "764937548072",
  appId: "1:764937548072:web:99734630f39ac17283201d",
  measurementId: "G-YVPR9PKWT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export default auth
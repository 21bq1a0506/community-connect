import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKOGtSV0dTdA-dNgwSC0IVO0THmw81wSw",
  authDomain: "community-service-e5f7d.firebaseapp.com",
  projectId: "community-service-e5f7d",
  storageBucket: "community-service-e5f7d.firebasestorage.app",
  messagingSenderId: "910327396476",
  appId: "1:910327396476:web:0f0bfad029991fc10eb1f9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
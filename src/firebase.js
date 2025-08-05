
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfr38jMG_I9tIcgzMIQfCf7q6YBPH__mA",
  authDomain:  "skyintern-d2174.firebaseapp.com",
  projectId: "skyintern-d2174",
  storageBucket:  "skyintern-d2174.firebasestorage.app",
  messagingSenderId: "947715013776",
  appId:  "1:947715013776:web:a7905de24a7babc97f6c15",
   measurementId: "G-BM8PL1972G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
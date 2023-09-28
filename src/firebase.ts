import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArwAZN0Q1oI056Agbt_W7JPNRd4QilOUE",
  authDomain: "xwitter-13454.firebaseapp.com",
  projectId: "xwitter-13454",
  storageBucket: "xwitter-13454.appspot.com",
  messagingSenderId: "644285252616",
  appId: "1:644285252616:web:a030363f79333e71053dbd",
};

// Firebase initialize
const app = initializeApp(firebaseConfig);

// Firebase Email / Pw 확인
export const auth = getAuth(app);

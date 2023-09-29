import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// DB 스토리지에 관한 코드
export const storage = getStorage(app);

export const db = getFirestore(app);

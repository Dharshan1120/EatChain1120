// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdjITdUuZivXBlYQ2mHHjJQYa8zkLhtTQ",
  authDomain: "eat-chain.firebaseapp.com",
  projectId: "eat-chain",
  storageBucket: "eat-chain.appspot.com",
  messagingSenderId: "618341728238",
  appId: "1:618341728238:web:10a91a0ebfcc26152d98ff",
  measurementId: "G-YDZEL33XM7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

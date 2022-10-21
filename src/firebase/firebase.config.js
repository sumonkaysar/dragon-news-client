import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDotxuwdGNyzzgw773RAkzNQylj_DWfVZk",
  authDomain: "dragon-news-5ded1.firebaseapp.com",
  projectId: "dragon-news-5ded1",
  storageBucket: "dragon-news-5ded1.appspot.com",
  messagingSenderId: "314753436955",
  appId: "1:314753436955:web:34939622a80aafdbd817be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
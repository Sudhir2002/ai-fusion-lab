// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASR_API_KEY,
    authDomain: "sudhir-kr.firebaseapp.com",
    projectId: "sudhir-kr",
    storageBucket: "sudhir-kr.firebasestorage.app",
    messagingSenderId: "550245021533",
    appId: "1:550245021533:web:3af0902d81d386e2f85ab4",
    measurementId: "G-PBYJ2VC305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, 'ai-fusion-lab')
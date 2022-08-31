import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnq_yVZSrs8n3Kgp6D--NC933baELsruw",
    authDomain: "dario-volkmann-portfolio.firebaseapp.com",
    projectId: "dario-volkmann-portfolio",
    storageBucket: "dario-volkmann-portfolio.appspot.com",
    messagingSenderId: "211033961217",
    appId: "1:211033961217:web:c38406afb50d3fb595e100"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

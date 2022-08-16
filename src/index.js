import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcnxWmX5eUe5OuvZC8kRWQ_kQeDmVe-Bc",
  authDomain: "tzure-bags-ecommerce.firebaseapp.com",
  projectId: "tzure-bags-ecommerce",
  storageBucket: "tzure-bags-ecommerce.appspot.com",
  messagingSenderId: "1029038338040",
  appId: "1:1029038338040:web:35bf65b7cffc0a7dd9700d"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();

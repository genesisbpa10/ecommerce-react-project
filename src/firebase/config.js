import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcnxWmX5eUe5OuvZC8kRWQ_kQeDmVe-Bc",
  authDomain: "tzure-bags-ecommerce.firebaseapp.com",
  projectId: "tzure-bags-ecommerce",
  storageBucket: "tzure-bags-ecommerce.appspot.com",
  messagingSenderId: "1029038338040",
  appId: "1:1029038338040:web:35bf65b7cffc0a7dd9700d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
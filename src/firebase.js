import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDZSu27XFRWmQzSYPtoiMUAbaI4xcbiank",
  authDomain: "ticket-project-cadb4.firebaseapp.com",
  projectId: "ticket-project-cadb4",
  storageBucket: "ticket-project-cadb4.appspot.com",
  messagingSenderId: "397615623947",
  appId: "1:397615623947:web:eb93f8654aea9a8ef4bc0e"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
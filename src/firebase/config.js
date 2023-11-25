import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"; 

/*const firebaseConfig = {
  apiKey: "AIzaSyCYqqrnW2AvnuCyNW9xmzlUcm1w2AtBizo",
  authDomain: "registro-de-vouchers.firebaseapp.com",
  projectId: "registro-de-vouchers",
  storageBucket: "registro-de-vouchers.appspot.com",
  messagingSenderId: "1030397336618",
  appId: "1:1030397336618:web:29bcf77d0a21c593383753",
};*/
const firebaseConfig = {
  apiKey: "AIzaSyCWlmc3vGkzNOS3oKNE8nH8OwZJg_eYX8M",
  authDomain: "vauchers-96223.firebaseapp.com",
  projectId: "vauchers-96223",
  storageBucket: "vauchers-96223.appspot.com",
  messagingSenderId: "124661729671",
  appId: "1:124661729671:web:097c3592463e04eaa86b22",
  measurementId: "G-E4MVBZYKNV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const storage = getStorage(app);





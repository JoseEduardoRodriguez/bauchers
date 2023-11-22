import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYqqrnW2AvnuCyNW9xmzlUcm1w2AtBizo",
  authDomain: "registro-de-vouchers.firebaseapp.com",
  projectId: "registro-de-vouchers",
  storageBucket: "registro-de-vouchers.appspot.com",
  messagingSenderId: "1030397336618",
  appId: "1:1030397336618:web:29bcf77d0a21c593383753"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export function uploadFile(file){
    const storageRef = ref(storage, 'some-child')
    uploadBytes(storageRef, file).then(snapshot => {
        console.log(snapshot)
    })
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, query, where, addDoc, getDocs, collection } from "firebase/firestore"; 



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9P46yWh5iFINpp0chrBHln0XjvgRUFzo",
  authDomain: "myinventory-2eb8b.firebaseapp.com",
  projectId: "myinventory-2eb8b",
  storageBucket: "myinventory-2eb8b.appspot.com",
  messagingSenderId: "1014719657599",
  appId: "1:1014719657599:web:925163c5bd703055f4f14a",
  measurementId: "G-VRF55NWDSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);





export async function setItem(itemAmount, itemName, itemUsage){

    try {
        const docRef = await addDoc(collection(db, "items"), {
          amount: itemAmount,
          name: itemName,
          usage: itemUsage,
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export const info = {
  itemName: "",
  itemAmount: "",
}

export async function getItem(searchName){

  const q = query(collection(db, "items"), where("name", "==", searchName));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id);
    const myItems = doc.data();


    console.log("This is the amount: " + myItems.amount);
    info.itemAmount = myItems.amount;
    console.log("This is the info.itemAmount: " + info.itemAmount);
    
  });


}


export async function setShowData(data){

  if(data == "amount"){
    return info.itemAmount
  }
}




      


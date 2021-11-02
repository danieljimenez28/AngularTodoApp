import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoviccar7mJryaWaLOrYScQFAExiOGxE8",
    authDomain: "todo-9b7d2.firebaseapp.com",
    projectId: "todo-9b7d2",
    storageBucket: "todo-9b7d2.appspot.com",
    messagingSenderId: "42537272866",
    appId: "1:42537272866:web:8be405c6403689bbebec7b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function Get_conection() {
    //getCities();
    return db;
}

// Get a list of cities from your database
async function getCities() {
    const citiesCol = collection(db, 'todos');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
    return cityList;
}


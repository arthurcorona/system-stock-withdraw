// Import the functions you need from the SDKs you need;

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
  import { getFirestore} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhIAI6BDqztTx4KT42jAz_lYoUD9-2kQ",
  authDomain: "system-removes-gelden.firebaseapp.com",
  projectId: "system-removes-gelden",
  storageBucket: "system-removes-gelden.appspot.com",
  messagingSenderId: "345683085544",
  appId: "1:345683085544:web:e4be3ef433a4424425615d",
  measurementId: "G-2SLTX89KWB"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); 
  const db = getFirestore(app);// database fireabse
  const storage = firebase.storage() 
  const ref = storage.ref("/folder do firebase") // referencia para a pasta raiz do storage no firebase, da pra especificar ainda mais o arquivo preenchendo o ()

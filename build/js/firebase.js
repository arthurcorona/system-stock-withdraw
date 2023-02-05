import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCLhIAI6BDqztTx4KT42jAz_lYoUD9-2kQ",
    authDomain: "system-removes-gelden.firebaseapp.com",
    projectId: "system-removes-gelden",
    storageBucket: "system-removes-gelden.appspot.com",
    messagingSenderId: "345683085544",
    appId: "1:345683085544:web:e4be3ef433a4424425615d",
    measurementId: "G-2SLTX89KWB"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  const db = firebase.firestore() // database fireabse
  const auth = firebase.auth() //authenticator firebase
  const storage = firebase.storage() 
  const ref = storage.ref("/folder do firebase") // referencia para a pasta raiz do storage no firebase, da pra especificar ainda mais o arquivo preenchendo o ()

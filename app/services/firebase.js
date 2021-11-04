import firebase from "firebase";
import { firebaseConfig } from "../../firebaseConfig";

let app = firebase.apps.length
  ? firebase.app() //initialized
  : firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();

export default { auth, firestore };

import firebase from "firebase";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";


let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app(); // if already initialized, use that one

}
//const analytics = getAnalytics(app);
export const auth = app.auth();
export const firestore = app.firestore();

export default { auth, firestore };
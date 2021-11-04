# ZERBYZ

## Project setup
- `npm i`
- Create a new file called `firebaseConfig.js` in the base directory of the proyect.
- Insert your staging firebase configs into that file. 
`export const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
};`
- `expo start`
const Rebase = require('re-base');
const firebase = require('firebase');

const conn = {
    apiKey: "AIzaSyAfFIyzmbbruMJ5uZ4228UJ7QVuEwbZJ5Y",
    authDomain: "company-react-76b28.firebaseapp.com",
    databaseURL: "https://company-react-76b28.firebaseio.com",
    projectId: "company-react-76b28",
    storageBucket: "company-react-76b28.appspot.com",
    messagingSenderId: "151667952895"
  };


const app = firebase.initializeApp(conn);
const ConfigFirebase = Rebase.createClass(app.database());

export const auth = app.auth();

export const storage = app.storage();

export default ConfigFirebase;

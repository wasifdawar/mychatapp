import "./App.css";
import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({});

const auth = firebase.auth();
const firestore = firebase.firestore;

function App() {
  return (
    <div className="App">
      <h1>My Chat app</h1>
      <h2>Firebase is not working</h2>
    </div>
  );
}

export default App;

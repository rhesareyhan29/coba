
const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");
const { getFirestore, initializeFirestore } = require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLhNvmj5sllTSGHhx8e3PTZV908gtIzq0",
  authDomain: "fingerspell-422914.firebaseapp.com",
  projectId: "fingerspell-422914",
};

// Initialize Firebase only once
let firebaseApp;
let auth;
let firestore;
let googleProvider;

const initFirebase = (config = {}) => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
    googleProvider = new GoogleAuthProvider();

    // Initialize Firestore with a non-default database if provided
    if (config.databaseId) {
      firestore = initializeFirestore(
        firebaseApp,
        {
          ignoreUndefinedProperties: true,
        },
        config.databaseId
      );
    } else {
      firestore = getFirestore(firebaseApp);
    }
  }
  return { auth, firestore, googleProvider };
};

module.exports = { initFirebase };

import 'dotenv/config'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfvCRWPuz1ub9oZ7ND-3dbeZkLUbKMZfo",
  authDomain: "proy-final-844ff.firebaseapp.com",
  projectId: "proy-final-844ff",
  storageBucket: "proy-final-844ff.firebasestorage.app",
  messagingSenderId: "406609169822",
  appId: "1:406609169822:web:5c1d2207e934899cc55a8f"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}
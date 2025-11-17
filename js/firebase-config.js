// Importamos las funciones desde el SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDB8wJex14E-Ute7FNvJcAOeZOY8iV4pBQ",
  authDomain: "generador-de-analiticos.firebaseapp.com",
  projectId: "generador-de-analiticos",
  storageBucket: "generador-de-analiticos.firebasestorage.app",
  messagingSenderId: "568586999279",
  appId: "1:568586999279:web:2d29683cef32fddc57921a",
  measurementId: "G-NH62MTKJL4"
};

// Inicializamos Firebase con esa configuración
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportamos para poder usarla en otros archivos
export { app };
export { db };
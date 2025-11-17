import { app } from "./firebase-config.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Se inicializa  Firestore
const db = getFirestore(app);

// Función para guardar los datos del formulario en Firebase
export async function guardarDatosPersonalesFirebase() {
  // Se toman los valores del formulario
  const alumno = {
    apellido: document.querySelector('#apellido').value.trim(),
    nombre: document.querySelector('#nombre').value.trim(),
    fechaNac: document.querySelector('#fechaNac').value,
    ciudadNac: document.querySelector('#ciudadNac').value.trim(),
    provinciaNac: document.querySelector('#provinciaNac').value.trim(),
    dni: document.querySelector('#dni').value.trim(),
    libroMatriz: document.querySelector('#libroMatriz').value.trim(),
    folio: document.querySelector('#folio').value.trim()
  };

  try {
    // Agregamos el documento en la colección "alumnos"
    const docRef = await addDoc(collection(db, "alumnos"), alumno);
    console.log("Documento guardado con ID:", docRef.id);
    localStorage.setItem("alumnoId", docRef.id);
    
    //return docRef.id;

  } catch (error) {
    console.error("Error al guardar datos:", error);
    throw error; // para manejarlo desde donde se llame
  }
}

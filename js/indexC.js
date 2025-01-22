
//Conexión con Firebase, index 3 "Inscripcion"

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, doc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA4JSPgcmebK4igcJvJnplMLnukJj7hEA0",
    authDomain: "camaling-c2127.firebaseapp.com",
    projectId: "camaling-c2127",
    storageBucket: "camaling-c2127.firebasestorage.app",
    messagingSenderId: "523740018044",
    appId: "1:523740018044:web:6848568842e66856f5a0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const registrosRef = collection(db, "registros");
const Inscritos = document.getElementById("Inscritos");

//Mostrar Inscritos
async function cargarInscritos() {
    Inscritos.innerHTML = '<option value="">---Selecciona--</option>';
    try {
        let querySnapshot = await getDocs(registrosRef);
        querySnapshot.forEach((doc) => {
            let registro = doc.data();
            let option = document.createElement("option");
            option.value = doc.id;
            option.text = registro.correo;
            Inscritos.add(option);
        });
    } catch(e) {
        console.error(`iNo Fue Posible Cargar La Lista De Documentos Debido Al Error ${e}!`);
        alert("iNo Fue Posible Cargar La Lista De Inscritos!");
    }
}

cargarInscritos().then();

//Limpiar Campos

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("idioma").selectedIndex = 0;
    document.getElementById("nivel").selectedIndex = 0;
    document.getElementById("turno").selectedIndex = 0;
    document.getElementById("correo").value = "";
    Inscritos.selectedIndex = 0;
}

//Inscribir Usuarios


let registrar = document.getElementById("BotonIns");
registrar.addEventListener("click", async () => {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let idioma = document.getElementById("idioma").value;
    let nivel = document.getElementById("nivel").value;
    let turno = document.getElementById("turno").value;
    let correo = document.getElementById("correo").value;

    const nombreRegex1 = /^[a-zA-ZáéíúóÁÉÍÓÚÑñ -]*$/;
    const emailRegex1 = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (isNaN(edad) || edad < 10 || edad > 50) {
        alert("¡La edad debe estar entre 10 y 50 años!");
        return;
    }
    if (!nombreRegex1.test(nombre)) {
        alert("¡Por favor,Introduce un nombre válido!");
        return;
    }

    if (!emailRegex1.test(correo)) {
        alert("¡Por favor,Introduce un correo válido!");
        return;
    }

    if (nombre === "" || apellidos === "" || edad === "" || idioma === "" || nivel === "" || turno === "" || correo === "") {
        alert("iPor Favor, Completa Toda La Información Solicitada!");
        return;
    }

    try {
        let nuevoRegistro = {
            nombre: nombre,
            apellidos: apellidos,
            edad: parseInt(edad),
            idioma: idioma,
            nivel: nivel,
            turno: turno,
            correo: correo

        };

        let docRef = await addDoc(registrosRef, nuevoRegistro); // Usar `registrosRef`
        console.log(`Documento registrado con el ID ${docRef.id}`);
        alert("¡Inscrito con éxito!");
        limpiarCampos();
        await cargarInscritos();
    } catch(e) {
        console.error(`iNo Fue Posible Agregar El Documento Debido Al Error ${e}!`);
        alert("Error Al Inscribir Usuario");
    }
});

//Mostrar Inscritos


async function mostrarInscritos(registroID) {
    try {
        let docRef = doc(db, "registros", registroID);
        let docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let registro = docSnap.data();
            document.getElementById("nombre").value = registro.nombre;
            document.getElementById("apellidos").value = registro.apellidos;
            document.getElementById("edad").value = registro.edad;
            document.getElementById("idioma").value = registro.idioma;
            document.getElementById("nivel").value = registro.nivel;
            document.getElementById("turno").value = registro.turno;
            document.getElementById("correo").value = registro.correo;
        } else {
            console.log("iEl Documento No Existe!");
            alert("iLa Inscripción No Existe!");
        }
    } catch (e) {
        console.error(`iNo Fue Posible Mostrar El Documento Debido Al Error ${e}!`);
        alert("iNo Fue Posible Mostrar El Documento!");
    }
}

Inscritos.addEventListener("change", () => {
    let registroID = Inscritos.value;
    if (registroID)
        mostrarInscritos(registroID).then();
    else
        limpiarCampos();
});


let actualizar = document.getElementById("BotonAct");
actualizar.addEventListener("click", async () => {
    let registroID = Inscritos.value;
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let edad = document.querySelector("#edad").value;
    let idioma = document.querySelector("#idioma").value;
    let nivel = document.querySelector("#nivel").value;
    let turno = document.querySelector("#turno").value;
    let correo = document.querySelector("#correo").value;

    // Validación del correo y nombre
    const nombreRegex = /^[a-zA-ZáéíúóÁÉÍÓÚÑñ -]*$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (isNaN(edad) || edad < 10 || edad > 50) {
        alert("¡La edad debe estar entre 10 y 50 años!");
        return;
    }
    if (!nombreRegex.test(nombre)) {
        alert("¡Por favor,Introduce un nombre válido!");
        return;
    }

    if (!emailRegex.test(correo)) {
        alert("¡Por favor,Introduce un correo válido!");
        return;
    }

    if (nombre === "" || apellidos === "" || edad === "" || idioma === "" || nivel === "" || turno === "" || correo === "") {
        alert("iPor Favor, Completa Toda La Información Solicitada!");
        return;
    }

    if (registroID) {
        try {
            let Inscritos = doc(db, "registros", registroID);

            let registroActualizado = {
                nombre: document.getElementById("nombre").value,
                apellidos: document.getElementById("apellidos").value,
                edad: parseInt(document.getElementById("edad").value),
                idioma: idioma,
                nivel: nivel,
                turno: turno,
                correo: document.getElementById("correo").value
            };

            await updateDoc(Inscritos, registroActualizado);
            console.log("iDocumento Actualizado Con Éxito!");
            alert("Inscripción Actualizada Con Éxito!");
            await cargarInscritos();
        } catch(e) {
            console.error(`iNo Fue Posible Actualizar El Documento Debido Al Error ${e}!`);
            alert("iNo Fue Posible Actualizar los Datos!");
        }
    } else {
        alert("iPor Favor, Selecciona Un Registro De La Lista!");
    }
});

let eliminar = document.getElementById("CancelarInscripción");
eliminar.addEventListener("click", async () => {
    let registroID = Inscritos.value;
    if (registroID) {
        try {
            await deleteDoc(doc(db, "registros", registroID));
            console.log("iDocumento Eliminado Con Éxito!");
            alert("Registro Eliminado Con Éxito!");
            limpiarCampos();
            await cargarInscritos();
        } catch(e) {
            console.error(`iNo Fue Posible Eliminar El Documento Debido Al Error ${e}!`);
            alert("iNo Fue Posible Eliminar El Registro!");
        }
    } else {
        alert("iPor Favor, Selecciona Un Registro De La Lista!");
    }
});

let limpiar = document.getElementById("Limpiar");
limpiar.addEventListener("click", () => {
    limpiarCampos();
});
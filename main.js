class ContactList {
    constructor() {
        this.contactos = [];
        this.cargarContactos();
    }

    cargarContactos() {
        let contactosGuardados = localStorage.getItem("contactos");
        if (contactosGuardados) {
            this.contactos = JSON.parse(contactosGuardados);
        }
    }

    guardarContactos() {
        localStorage.setItem("contactos", JSON.stringify(this.contactos));
    }

    añadirContacto(contacto) {
        this.contactos.push(contacto);
        this.guardarContactos();
    }

    borrarContacto(id) {
        let index = this.contactos.findIndex(contacto => contacto.id === id);
        if (index !== -1) {
            this.contactos.splice(index, 1);
            this.guardarContactos();
        }
    }

    imprimirContactos() {
        for (let contacto of this.contactos) {
            console.log(`${contacto.nombres} ${contacto.apellidos}`);
        }
    }

    actualizarLista() {
        let listaNombres = document.getElementById("lista-nombres");
        listaNombres.innerHTML = "";
        for (let contacto of this.contactos) {
            let li = document.createElement("li");
            li.textContent = `${contacto.nombres} ${contacto.apellidos}`;
            listaNombres.appendChild(li);
        }
    }
}

let contactList = new ContactList();

function insertarNombre(event) {
    event.preventDefault();
    let id = document.getElementById("id").value;
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let teléfono = document.getElementById("teléfono").value;
    let ubicaciones = document.getElementById("ubicaciones").value;
    let ciudad = document.getElementById("ciudad").value;
    let dirección = document.getElementById("dirección").value;

    let contacto = { id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección };
    contactList.añadirContacto(contacto);
    contactList.actualizarLista();
}
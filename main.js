class ContactList {
    constructor() {
        this.contactos = ["Engels Zaldivar", "María García", "Pedro López"];
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

    añadirContacto(nombre) {
        this.contactos.push(nombre);
        this.guardarContactos();
    }

    borrarContacto(nombre) {
        let index = this.contactos.indexOf(nombre);
        if (index !== -1) {
            this.contactos.splice(index, 1);
            this.guardarContactos();
        }
    }

    imprimirContactos() {
        for (let contacto of this.contactos) {
            console.log(contacto);
        }
    }

    actualizarLista() {
        let listaNombres = document.getElementById("lista-nombres");
        listaNombres.innerHTML = "";
        for (let contacto of this.contactos) {
            let li = document.createElement("li");
            li.textContent = contacto;
            listaNombres.appendChild(li);
        }
    }
}

let contactList = new ContactList();

function insertarNombre(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    contactList.añadirContacto(nombre);
    contactList.actualizarLista();
}
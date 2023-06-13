// Supongamos que esta es la implementación de la clase ContactList
class ContactList {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    updateContact(id, updatedContact) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            this.contacts[index] = {...this.contacts[index], ...updatedContact};
        }
    }

    getContacts() {
        return this.contacts;
    }
}

// Crea una instancia de la clase ContactList para almacenar los contactos
const contactList = new ContactList();

// Agrega un controlador de eventos para el formulario de contacto
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Obtén los detalles del formulario
    const id = document.getElementById('id').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const teléfono = document.getElementById('teléfono').value;
    const ubicaciones = document.getElementById('ubicaciones').value;
    const ciudad = document.getElementById('ciudad').value;
    const dirección = document.getElementById('dirección').value;

    // Agrega el contacto a la lista de contactos
    contactList.addContact({id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección});

    // Actualiza la lista de contactos en la página
    updateContactList();
});

// Función para actualizar la lista de contactos en la página
function updateContactList() {
    const contacts = contactList.getContacts();
    const listElement = document.getElementById('lista-nombres');
    listElement.innerHTML = '';
    for (const contact of contacts) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${contact.nombres} ${contact.apellidos}</span>
            <button data-id="${contact.id}">Actualizar</button>
        `;
        listElement.appendChild(listItem);
    }
}
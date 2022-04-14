import { useState, useEffect } from 'react';

import List from './List';
import Form from './Form';
import './style.css';

function Contacts() {

    const [contacts, setContacts] = useState([
        { id: 1, fullname: "John Doe1", phone_number: "5352081362" },
        { id: 2, fullname: "Jane Doe2", phone_number: "6321475889" },
        { id: 3, fullname: "Jack Doe3", phone_number: "88978547555" },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
    return (
        <div id='container'>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
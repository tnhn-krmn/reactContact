import { useState } from 'react'
import '../style.css';


function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        });
    });
    return (
        <div>
            <div className='contact'>
                Contact
            </div>
            <input
                type="text"
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className='list'>
                {filtered.map(contact => (
                    <li key={contact.id}>
                        {contact.fullname + ' - ' + contact.phone_number}
                    </li>
                ))}
            </ul>

            <p>
                <small> Total Contacts ({filtered.length})</small>
            </p>
        </div>
    )
}

export default List;
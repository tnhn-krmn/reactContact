import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(form);
        if (form.fullname === "" && form.phone_number === "") {
            alert("Please fill all the fields");
        }
        else {
            addContact([...contacts, form]);
        }

    }
    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <div>
                    <input
                        name="fullname"
                        placeholder='Fullname'
                        value={form.fullname}
                        onChange={onChangeInput} />
                </div>
                <div>
                    <input
                        name="phone_number"
                        placeholder='Phone Number'
                        value={form.phone_number}
                        onChange={onChangeInput} />
                </div>

                <div className='btn'>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Form;
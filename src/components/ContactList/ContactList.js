import { deleteContactById } from "../../redux/reducers/contacts/contactSlice";
import './ContactList.css'

import { useSelector, useDispatch } from 'react-redux'



const ContactList = () => {
    const contacts = useSelector((state) => state.contact);
    const dispatch = useDispatch();

    const handleRemoveContact = (id) => {
        dispatch(deleteContactById(id));
    };

    return (
            <table>
                {
                    contacts.map((contact) => 
                        <tr>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <button onClick={() => handleRemoveContact(contact.id)}>Borrar contacto</button>
                        </tr>
                        )
                    }
            </table>
            )
};

export default ContactList;
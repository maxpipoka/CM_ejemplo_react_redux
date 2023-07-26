
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/reducers/contacts/contactSlice";

const AddContact = () => {

    const dispatch = useDispatch();

const handleAddContactSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");


    dispatch(addContact({name, username, email}));
    
    form.reset();

};

    return(
        <div className="addContactForm">
            <h2>Agregar nuevo contacto</h2>
            <form onSubmit={handleAddContactSubmit}>
                <input type="text" placeholder="Ingrese el nombre" name="name"/>
                <input type="text" placeholder="Ingrese el nombre de usuario" name="username"/>
                <input type="text" placeholder="Ingrese el email" name="email"/>
                <button type="submit" >Agregar</button>
            </form>
        </div>
    )

};

export default AddContact;
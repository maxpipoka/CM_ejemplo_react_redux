import { createSlice } from "@reduxjs/toolkit";

const contacts = [
    {   "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
      { "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
      },
      { "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
      },
      { "id": 4,
        "name": "Patricia Lebsack",
        "username": "patolebsack",
        "email": "patricialebsack@yesenia.net",
      },
      { "id": 5,
        "name": "Chelsey Dietrich",
        "username": "chelseydietrich",
        "email": "chelseydietrich@yesenia.net",
      },
]
const contactSlice = createSlice(
    {
        name: "contact",
        initialState: contacts,
        reducers: {
            addContact: (state, action) => {
                const newContact = {
                  'name': action.payload.name, 
                  'username': action.payload.username,
                  'email': action.payload.email};
                newContact.id = state.length() + 1;
                state.push(newContact);
            },
            deleteContactById: (state, action) => {
              const id_to_delete = action.payload;
                return state.filter(contact => contact.id !== id_to_delete );
             }
        },
    });

    export const { addContact, deleteContactById} = contactSlice.actions;
    export default contactSlice.reducer;

    


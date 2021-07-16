import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Contact from "./Contact"
import { getContacts } from '../JS/actions/contacts'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts= useSelector(state => state.contactReducer.contacts);
    const loadContacts= useSelector(
        (state) => state.contactReducer.loadContacts
        );
    console.log(contacts, loadContacts)
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {loadContacts ? (<h2>loading</h2>): 
        (contacts.map((el) => < Contact key={el._id} contact={el} />))
        }
    </div>
   );
};

export default ContactList;


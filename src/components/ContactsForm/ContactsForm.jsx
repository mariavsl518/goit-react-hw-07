import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import css from './ContactsForm.module.css'
import { addContact } from '../../redux/contactsOps';

export const ContactsForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (evt) =>{
        evt.preventDefault();

        const name = evt.target.name.value;
        const number = evt.target.phone.value;

        if (name===''||number===''){
            alert('You need to fill each field')
            return
        }

        const newContact = {
            name,
            number,
        }

        dispatch(addContact(newContact))

        evt.currentTarget.reset();
    }

  return (

    <form onSubmit={handleSubmit} className={css.contactForm}>
        <label htmlFor="name">
            Name
        </label>
        <input type="text" id="name" className={css.contactInput}/>

        <label htmlFor="phone">
            Phone number
        </label>
        <input type="tel" id="phone"className={css.contactInput}/>

        <button type="submit" className={css.contactBtn}>
            Add contact
        </button>
    </form>

  )
}
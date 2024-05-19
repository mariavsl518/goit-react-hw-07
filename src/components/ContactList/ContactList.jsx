import React from 'react'
import { Contact } from '../Contact/Contact'
import { useSelector } from 'react-redux'
import {filteredItems} from '../../redux/contactsSlice'
import css from './ContactList.module.css'

export const ContactList = () => {

  const filteredContacts = useSelector(filteredItems)

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({id, name, number})=>
        <li key={id} className={css.listItem}>
          <Contact name={name} number={number} id={id}/>
        </li>
        )}
    </ul>
  )
}
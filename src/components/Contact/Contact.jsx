import React from 'react';
import { useDispatch } from "react-redux";
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contactsOps.js';

export const Contact = ({ id, name, number }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }
  
  return (
    <div className={css.contact}>
      <p> {name} : {number}</p> 
      <button onClick={handleDelete}
      className={css.deleteBtn}>x</button>
    </div>
  )
}
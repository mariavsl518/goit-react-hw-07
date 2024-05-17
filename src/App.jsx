import {SearchBox} from './components/SearchBox/SearchBox'
import {ContactsForm} from './components/ContactsForm/ContactsForm'
import {ContactList} from './components/ContactList/ContactList'
import { fetchContacts } from './redux/contactsOps'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './App.css'

export default function App () {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchContacts())
  },
  [dispatch])

  return (
    <div>
    <ContactsForm/>

    <SearchBox/>

    <ContactList></ContactList>
    </div>
  )
}

import { useState } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from 'components/ContactForm/ContactForm'
import SearchBox from 'components/SearchBox/SearchBox'
import ContactList from 'components/ContactList/ContactList'
import initialContacts from 'data/contacts'

const App = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [search, setSearch] = useState('')

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid()
    }
    setContacts((prevState) => [...prevState, newContact])
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  )
}

export default App

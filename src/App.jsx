import { useState } from 'react'
import SearchBox from 'components/SearchBox/SearchBox'
import ContactList from 'components/ContactList/ContactList'
import initialContacts from 'data/contacts'

const App = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [search, setSearch] = useState('')

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  )
}

export default App

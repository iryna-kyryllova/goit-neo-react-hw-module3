import { useState } from 'react'
import ContactList from 'components/ContactList/ContactList'
import initialContacts from 'data/contacts'

const App = () => {
  const [contacts, setContacts] = useState(initialContacts)

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App

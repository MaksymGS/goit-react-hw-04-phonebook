import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout, Wrapper } from './Layout';

const getInitContacts = () => {
  const localStorageContacts = localStorage.getItem('storedContacts');
  if (localStorageContacts !== null) {
    return JSON.parse(localStorageContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('storedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const getfilteredContacts =
    filter === ''
      ? contacts
      : contacts.filter(({ name }) => {
          const filterValue = filter.toLowerCase();
          const filteredContacts = name.toLowerCase().includes(filterValue);
          return filteredContacts;
        });

  const addContacts = objContact => {
    if (contacts.some(contact => contact.name === objContact.name)) {
      alert(`${objContact.name} is already in the phone book`);
      return;
    }
    setContacts(prevState => [...prevState, { ...objContact, id: nanoid(5) }]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={addContacts} />
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter onChangeFilter={changeFilter} />
        <ContactList contacts={getfilteredContacts} onDelete={deleteContact} />
      </Wrapper>
    </Layout>
  );
};

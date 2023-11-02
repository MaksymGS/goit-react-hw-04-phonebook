import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobeWrap, Wrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.getItem('storedContacts');
  }, []);

  // useEffect(() => {
  //     localStorage.setItem('storedContacts', JSON.stringify(contacts));
  //   }, [contacts]);
  
  const filteredContacts = [];
  const addContacts = '';
  const changeFilter = '';
  const deleteContact = []

  return (
    <GlobeWrap>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={addContacts} />
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter onChangeFilter={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={deleteContact}
        />
      </Wrapper>
    </GlobeWrap>
  );
};

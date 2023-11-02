import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobeWrap, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('storedContacts');
    if (localStorageContacts !== null) {
      this.setState({ contacts: JSON.parse(localStorageContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'storedContacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  addContacts = objContact => {
    if (this.state.contacts.some(contact => contact.name === objContact.name)) {
      alert(`${objContact.name} is already in the phone book`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...objContact, id: nanoid(5) }],
    }));
  };
  changeFilter = value => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    if (filter !== '') {
      return contacts.filter(({ name }) => {
        const filterValue = filter.toLowerCase();
        const filteredContacts = name.toLowerCase().includes(filterValue);
        return filteredContacts;
      });
    } else {
      return contacts;
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <GlobeWrap>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm onAddContacts={this.addContacts} />
        </Wrapper>
        <Wrapper>
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </Wrapper>
      </GlobeWrap>
    );
  }
}

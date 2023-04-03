import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';
import ContactForm from 'components/Form';
import ContactList from 'components/Contacts';
import Filter from 'components/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (data) => {
    const equalName = contacts.find((el) => el.name.toLowerCase() === data.name.toLowerCase());
    if (equalName) return alert(`${equalName.name} is already in contacts.`);

    const newContact = { id: nanoid(), ...data };
    setContacts((prev) => [newContact, ...prev]);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length ? (
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContacts} />
      ) : (
        <p>No any contacts</p>
      )}
    </Container>
  );
};

export default App;
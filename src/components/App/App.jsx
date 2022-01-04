import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import Form from '../Form/Form'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
// import Section from '../Section/Section'
// import Notification from '../Notification/Notification'


// import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  

  formSubmitHandler = ({name, number}) => {
    const newContact = {
      name,
      number,
      // id: nanoid()
    }

    newContact.id = nanoid()
    
    
    this.setState(({contacts}) => {
      console.log(newContact)
      return { 
         contacts : [newContact, ...contacts]
      }
    })
  }

  filterContacts = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  }

  findContacts = () => {
    const {contacts, filter} = this.state
    const filterToLowerCase = filter.toLowerCase()

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterToLowerCase))
  }

  deleteContact = contactId => {
      this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render(){
    const visiableContacts = this.findContacts()
    const filter = this.state.filter

      return(
        <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} contacts={this.state.contacts}/>
          
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.filterContacts}/>
        <ContactList visiableContacts={visiableContacts} onDelete={this.deleteContact}/>
        </>
      )
  }
}

export default App

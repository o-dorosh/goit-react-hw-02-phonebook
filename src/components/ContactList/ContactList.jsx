// import PropTypes from 'prop-types';

// import s from '../App/App.module.css';

const ContactList = ({visiableContacts, onDelete}) => {
    return(
        <ul>
        {visiableContacts.map(contact => {
          return  <li key={contact.id}>{contact.name}: {contact.number}<button onClick={() => onDelete(contact.id)}>del</button></li>
        })}
      </ul>
    );
  };
  
  export default ContactList;
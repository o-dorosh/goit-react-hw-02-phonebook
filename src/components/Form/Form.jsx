import React,{Component} from 'react';

// import s from './Feedback.module.css';

class Form extends Component {
    state = {
        name: '',
        number: ''
    }

    handleInputChange = (e) => {
      const {name, value} = e.currentTarget
      this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        if(this.props.contacts.some((contact) => 
          contact.name.toLowerCase() === this.state.name.toLowerCase() ||
          contact.number === this.state.number
        )){
          alert(`Contact with such ${this.state.name} or ${this.state.number} is already in Phonebook`);
          this.reset();
          return;
        }
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: 
            <input
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
            </label>
            <label htmlFor="number">Number: 
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleInputChange}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        )
    }
}

export default Form
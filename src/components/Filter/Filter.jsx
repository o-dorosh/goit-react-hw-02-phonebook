// import PropTypes from 'prop-types';

// import s from '../App/App.module.css';

const Filter = ({filte, onChange}) => {
    return(
        <label>Find contacts by name: 
            <input value={filte} onChange={onChange} />
        </label>
    );
  };
  
  export default Filter;
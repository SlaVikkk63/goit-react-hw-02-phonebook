import Button from 'components/Button';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ addContacts }) => {
  const onFormSabmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.name.value.toLowerCase();
    const userTel = e.currentTarget.number.value;
    addContacts(userName, userTel);
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={e => onFormSabmit(e)}>
      <label className={css.label} htmlFor="contactsName">
        Name
      </label>
      <input
        className={css.input}
        id="contactsName"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="contactsTel">
        Number
      </label>
      <input
        className={css.input}
        id="contactsTel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button text="Add contact" type="submit" />
    </form>
  );
};

ContactForm.propTypes = {
};

ContactForm.defaultProps = {
};

export default ContactForm;
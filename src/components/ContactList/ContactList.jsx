import Button from 'components/Button';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactItem}>
            <span className={css.userName}>{name}:</span>
            <span className={css.usertel}>{number}</span>
            <Button
              text="delete"
              type="button"
              onBtnClick={() => deleteContacts(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
};

ContactList.defaultProps = {
};

export default ContactList;
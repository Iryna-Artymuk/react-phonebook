import { useSelector } from 'react-redux';
// import { selectFiteredContats } from '../../redux/selectors';
import { selectStoreContacts } from '../../redux/contacts/selectors';

import { ContactItem } from './ContactItem/ContactItem';

import css from './ContactList.module.css';
export const ContactsList = data => {
  // console.log(data);

  // console.log(filter);

  // const filteredContacts = useSelector(selectFiteredContats);
  const ContactsData = useSelector(selectStoreContacts);

  return (
    <ul className={css.contactList}>
      {ContactsData.map(contactData => (
        <ContactItem key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};

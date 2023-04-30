// import { selectFiteredContats } from '../../redux/selectors';
import { useContactsSelect } from '../../hooks/UseContactsSelect';

import { ContactItem } from './ContactItem/ContactItem';

import css from './ContactList.module.css';
export const ContactsList = data => {
  // console.log(data);

  // console.log(filter);

  // const filteredContacts = useSelector(selectFiteredContats);
  const { contacts } = useContactsSelect();

  return (
    <ul className={css.contactList}>
      {contacts.map(contactData => (
        <ContactItem key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};

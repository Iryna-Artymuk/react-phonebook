import { useContactsSelect } from '../../hooks/UseContactsSelect';

import { ContactItem } from './ContactItem/ContactItem';

import css from './ContactList.module.css';
export const ContactsList = data => {
  // console.log(data);

  // console.log(filter);

  const { filteredContacts } = useContactsSelect();
  // const { contacts } = useContactsSelect();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contactData => (
        <ContactItem key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};

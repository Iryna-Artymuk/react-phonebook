import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ContactsList } from '../ContactsList/ContactsList';
import { AddContactForm } from '../AddContactForm/AddContactForm';
import Modal from '../Modal/Modal';

import IconButton from '../Button/IconButton';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { BsSortAlphaDown } from 'react-icons/bs';

import { FilterByName } from '../FilterByName/FilterByName';
import { Sort } from '../Sort/Sort';

import css from './Contacts.module.css';
export default function Contacts() {
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contactsList = useSelector(selectStoreContacts);
  // const dispatch = useDispatch();

  const toggleSort = () => {
    setActiveSort(!activeSort);
  };

  const toggleFilter = () => setActiveFilter(!activeFilter);
  const toggleModal = () => setModalActive(!modalActive);

  //  викликаєм   dispatch(getTodos()) при загрузці сторінки ( монтуванні компонкнта App)
  // і так як  результаом  виклику  getTodos() є інша функція яка очікує  dispatch як параметр він туди передається автоматично
  // або можна підставти    dispatch(getTodos( dispatch));
  // і виконуються функція з файлу operations.js яка робить
  //   робиться асинхронний запит на бекенд щоб отримати список завданні і передати payload який reducer запише в state
  // також відправляє  всі інші  екшени
  // useEffect(() => {
  //   dispatch(fetchContactsData());
  // }, [dispatch]);
  return (
    <div className={css.contentWrapper}>
      <h2 className={css.title}>Contacts</h2>
      <FilterByName activeFilter={activeFilter} />
      <Sort activeSort={activeSort} />

      <IconButton
        onClick={toggleSort}
        type="button"
        aria-label=" sort contacts by name"
        sortButton
      >
        <BsSortAlphaDown />
      </IconButton>
      <IconButton
        onClick={toggleFilter}
        type="button"
        aria-label=" find contact by name"
        searchButton
      >
        <MdSearch />
      </IconButton>
      <IconButton
        onClick={toggleModal}
        type="button"
        aria-label=" add contact"
        addContactButton
      >
        <MdPersonAdd />
      </IconButton>

      {modalActive && (
        <Modal togglModal={toggleModal}>
          <AddContactForm />
        </Modal>
      )}
      <div>
        {/* {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>} */}
      </div>
      {/* {contactsList && <ContactsList />} */}
      <ContactsList />
    </div>
  );
}

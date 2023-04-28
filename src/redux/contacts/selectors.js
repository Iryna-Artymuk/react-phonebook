export const selectStoreContacts = state => {
  //   отримуєм значення контактів з store
  return state.contacts.items;
};
// export const selectFiteredContats = state => {
//   const contactsList = selectStoreContacts(state);
//   const filter = selectStoreFilter(state);
//   return contactsList.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = (state) => {
  return state.contacts.contacts.filter((contact) => {
    return contact.name
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase());
  });
};

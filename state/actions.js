export const SAVE_CONTACT = "SAVE_CONTACT";

export function saveContact(contact) {
  return dispatch => {
    dispatch({ type: SAVE_CONTACT, data: contact });
  };
}

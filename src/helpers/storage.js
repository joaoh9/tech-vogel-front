/* eslint-disable no-console */
const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (e) {
    return e;
  }
};

const removeState = key => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    return e;
  }
};

const saveOnSession = (key, state) => {
  const serializedState = JSON.stringify(state);

  sessionStorage.setItem(key, serializedState);
};

const getFromSession = key => {
  const serializedState = sessionStorage.getItem(key);

  return JSON.parse(serializedState);
};
export default {
  loadState,
  saveState,
  removeState,
  saveOnSession,
  getFromSession,
};

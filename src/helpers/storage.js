import settings from '@config';

/* eslint-disable no-console */
const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return null;
    }

    const item = JSON.parse(serializedState);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    console.log(item.value[0] === '{');

    return item.value[0] === '{' ? JSON.parse(item.value) : item.value;
  } catch (e) {
    return undefined;
  }
};

const saveState = (key, state) => {
  state = typeof state === 'string' ? state : JSON.stringify(state);

  try {
    const now = new Date().getTime();
    const serializedState = JSON.stringify({
      value: state,
      expiry: now + settings.storageExpiry,
    });

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

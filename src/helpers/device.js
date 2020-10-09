import { loadState, saveState } from './storage';
import jwt from 'jwt-simple';

export const isDeviceRegistered = () => {
  try {
    const serializedState = loadState('account');

    if (!serializedState) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const saveAccountOnDevice = (account, pin) => {
  const encryptedAccount = jwt.encode(account, pin);

  saveState('account', encryptedAccount);
};

export const loadAccountFromDevice = pin => {
  try {
    const encryptedAccount = loadState('account');
    const account = jwt.decode(encryptedAccount, pin);

    return account;
  } catch (e) {
    return null;
  }
};

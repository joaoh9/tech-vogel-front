import jwt from 'jsonwebtoken';
import config from '@config';
import StorageHelper from './storage';

export default class {
  constructor({ secret, expiresIn } = {}) {
    this.secret = secret || config.jwt.secret || 'secret';
    this.expiresIn = expiresIn || config.jwt.expiresIn || '1h';
  }

  createToken(token) {
    return jwt.sign(token, this.secret, {
      expiresIn: this.expiresIn,
    });
  }

  decodeToken(token) {
    return jwt.verify(token, this.secret);
  }

  getData(token) {
    console.log('token', token);
    const jwt = StorageHelper.loadState(token);
    console.log('jwt', jwt);
    const data = jwt.split('.')[1];
    const res = atob(data);
    return JSON.parse(res);
  }
}

import jwt from 'jsonwebtoken';
import config from '@config';

export default class {
  constructor({ secret, expiresIn } = { secret: undefined, expiresIn: undefined }) {
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
}

import jwt from 'jsonwebtoken';
import config from '@config';

export default class {
  constructor({ secret, expiresIn } = { secret: undefined, expiresIn: undefined }) {
    this.secret = secret || config.jwt.secret;
    this.expiresIn = expiresIn || config.jwt.expiresIn;
  }

  createToken(token) {
    return jwt.sign(token, this.secret, {
      expiresIn: this.expiresIn,
    });
  }

  decodeToken(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (err) {
      console.log(err);

      return null;
    }
  }
}

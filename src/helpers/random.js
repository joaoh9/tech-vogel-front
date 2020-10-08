import crypto from 'crypto';

class Random {
  constructor(seed) {
    this.defaultSize = 10 ** 6;
    this.seed = seed || Math.round(Math.random() * this.size);
  }

  randomInt(size) {
    return Math.round(Math.random() * (size || this.defaultSize));
  }

  randomString({
    algorithm = 'sha256',
    secret = '',
    options = {},
    seed = '',
    size = this.defaultSize,
    digest = 'hex',
  } = {}) {
    return crypto
      .createHash(algorithm, secret, options)
      .update(seed)
      .digest(digest)
      .slice(0, size);
  }
}

export default Random;

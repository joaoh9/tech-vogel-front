import crypto from 'crypto';

class HashHelper {
  hash(data) {
    return data ? crypto.createHmac('sha256', data.toString()).digest('hex') : null;
  }

  errorCode(errorMessage, prefix) {
    return prefix + (parseInt(this.hash(errorMessage), 16) % 10 ** 7).toString();
  }
}

export default HashHelper;

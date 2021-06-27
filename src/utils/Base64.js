export class Base64 {
  static encode(file) {
    const base64 = Buffer.from([file]).toString('base64');

    return base64;
  }

  static decode(base64) {
    const buffer = Buffer.from(base64, 'base64');

    return buffer;
  }
}

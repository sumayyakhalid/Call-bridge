import CryptoJS from "crypto-js";

export function encryptNote(note, secretKey) {
  return CryptoJS.AES.encrypt(note, secretKey).toString();
}

export function decryptNote(encrypted, secretKey) {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    return "";
  }
}

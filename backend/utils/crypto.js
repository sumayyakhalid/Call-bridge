import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
export function encryptNote(note) {
  return CryptoJS.AES.encrypt(note, SECRET_KEY).toString();
}

export function decryptNote(encrypted) {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    return "";
  }
}

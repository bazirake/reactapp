// src/Components/data/Encrypt.ts
import CryptoJS from "crypto-js";

const secretKey ="bazirake-eric-extech-1212212"; // Use a secure key in real apps

export function encrypt(text: string): string {
   return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(cipherText: string): string {
   const bytes = CryptoJS.AES.decrypt(cipherText,secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
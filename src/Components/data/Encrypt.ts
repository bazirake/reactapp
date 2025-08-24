// src/Components/data/Encrypt.ts
import CryptoJS from "crypto-js";

//const secretKey ="bazirakeericextech"; // Use a secure key in real apps



const secretKey = "bazirakeericextech";

export function encrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
//  export function encrypt(text: string): string {
//    return CryptoJS.AES.encrypt(text, secretKey).toString();
// }

// export function encrypt(text: string): string {
//   const data = CryptoJS.enc.Utf8.parse(text);      // ensure WordArray
//   const key  = CryptoJS.enc.Utf8.parse(secretKey); // ensure WordArray
//   const encrypted = CryptoJS.AES.encrypt(data, key, {
//     mode: CryptoJS.mode.ECB, // or CBC with IV if you want stronger security
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return encrypted.toString();
// }


// export function decrypt(ciphertext: string): string {
//   const key = CryptoJS.enc.Utf8.parse(secretKey);
//   const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return decrypted.toString(CryptoJS.enc.Utf8);
// }
//  export function decrypt(cipherText: string): string {
//    const bytes = CryptoJS.AES.decrypt(cipherText,secretKey);
//   return bytes.toString(CryptoJS.enc.Utf8);
// }
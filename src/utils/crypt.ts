/* eslint-disable no-unused-vars */
// @ts-nocheck
import CryptoJS from "crypto-js";

const config = {
  wms: { key: "1234123412ABCDEF", iv: "ABCDEF1234123412" },
  params: { key: "zczsL2d9DfhLZO0s", iv: "412SFA342442saas" }
};

export function useCrypto(sysCode = "wms") {
  const KEY = CryptoJS.enc.Utf8.parse(config[sysCode]?.key);
  const IV = CryptoJS.enc.Utf8.parse(config[sysCode]?.iv);

  // AES加密
  function encrypt(encStr) {
    const srcs = CryptoJS.enc.Utf8.parse(encStr);
    const encrypted = CryptoJS.AES.encrypt(srcs, KEY, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypted;
  }

  // AES解密
  function decrypt(encrypted) {
    // 一个字符串的密文
    const key = KEY; // 十六位十六进制数作为密钥
    const decrypt = CryptoJS.AES.decrypt(encrypted, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = CryptoJS.enc.Utf8.stringify(decrypt).toString();
    return decryptedStr;
  }

  /**
   * AES加密 ：字符串 key iv  返回base64
   */
  function paramEncrypt(word) {
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  }

  /**
   * AES 解密 ：字符串 key iv  返回base64
   */
  function paramDecrypt(word, keyStr, ivStr) {
    const base64 = CryptoJS.enc.Base64.parse(word);
    const src = CryptoJS.enc.Base64.stringify(base64);

    const decrypt = CryptoJS.AES.decrypt(src, KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }

  return {
    encrypt,
    decrypt,
    paramEncrypt,
    paramDecrypt
  };
}

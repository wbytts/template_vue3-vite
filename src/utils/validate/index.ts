import { phoneNumberRegex } from "./regex";

/**
 * 验证输入的字符串是否为有效的电话号码格式
 * @param {String} str
 * @returns {Boolean}
 */
export function validatePhoneNumber(str: string) {
  return phoneNumberRegex.test(str);
}

/**
 * 验证输入的字符串是否符合密码复杂度要求
 * @param {String} str
 * @returns {Boolean}
 */
export function validatePwd(str: string) {
  const reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
  return reg.test(str);
}

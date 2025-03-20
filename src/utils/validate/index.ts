import { regPhoneNumber, regPassword } from "./regex";

/**
 * 验证输入的字符串是否为有效的电话号码格式
 * @param {String} str
 * @returns {Boolean}
 */
export function validatePhoneNumber(str: string) {
  return regPhoneNumber.test(str);
}

/**
 * 验证输入的字符串是否符合密码复杂度要求
 * @param {String} str
 * @returns {Boolean}
 */
export function validatePwd(str: string) {
  return regPassword.test(str);
}

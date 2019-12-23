class TextUtils {
  static validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(text);
  };

  static isEmpty = (text) => {
    return text.trim() === ""
  };

  static isNumbersOnly = (text) => {
    return /^\d+$/.test(text)
  };
}

export default TextUtils

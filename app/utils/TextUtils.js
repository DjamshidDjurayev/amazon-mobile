import Masker from '../libs/Masker'

export default {
  validateEmail: (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(text);
  },

  isEmpty: (text) => {
    return text.trim() === ""
  },

  isDigitsOnly: (text) => {
    return /^\d+$/.test(text)
  },

  getMaskedPhone : phone => Masker.toPattern(phone, {pattern: '+99999 999 99 99'})
}

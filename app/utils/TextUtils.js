import Masker from '../libs/Masker'

export default {
  validateEmail: (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(text);
  },

  isEmpty: (text: string) => {
    return text.trim() === ""
  },

  isDigitsOnly: (text: string) => {
    return /^\d+$/.test(text)
  },

  getInitialLetter: (text: string) => {
    return text ? text.charAt(0) : 'A'
  },

  getMaskedPhone : phone => Masker.toPattern(phone, {pattern: '+99999 999 99 99'})
}

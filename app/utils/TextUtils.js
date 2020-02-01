import Masker from '../libs/Masker'
import colors from './colors';

export default {
  validateEmail: (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(text);
  },

  isEmpty: (text: string) => {
    if (!text) return true;

    return text.trim() === ""
  },

  hasDigitsOnly: (text: string) => {
    return /^\d+$/.test(text)
  },

  getInitialLetter: (text: string) => {
    return text ? text.charAt(0) : 'A'
  },

  getMaskedPhone: phone => Masker.toPattern(phone, {pattern: '+99999 999 99 99'}),

  getRandomColor: title => {
    let sumChars = 0;
    for (let i = 0; i < title.length; i += 1) {
      sumChars += title.charCodeAt(i)
    }
    const colors = [
      '#1abc9c',
      '#e67e22',
      '#34495e',
      '#9b59b6',
      '#c0392b',
    ];

    return colors[sumChars % colors.length]
  },

  checkObjectIsEmpty: obj => {
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    if (obj == null) return true;

    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    if (typeof obj !== "object") return true;

    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }
}

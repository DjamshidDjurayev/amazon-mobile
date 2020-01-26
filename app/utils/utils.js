import TextUtils from './TextUtils';

const isObjectEmpty = obj => {
  if (!obj) return true;

  return !!(TextUtils.isEmpty(obj.title)
    && TextUtils.isEmpty(obj.price)
    && TextUtils.isEmpty(obj.price_placeholder)
    && (obj.features && obj.features.length === 0) && (obj.twister && obj.twister.length === 0));
};

export default {isObjectEmpty}

import * as types from '../actionTypes';

const phones = [
  {
    id: 0,
    img: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/central-asia/by/mkt/pdp/phones/p30-lite/pic_familyP30pro_md@2x.jpg',
    title: 'Huawei P30 PRO',
    url: 'bags',
  },
  {
    id: 1,
    img: 'http://www.tfn-trading.com/media/k2/galleries/558/Mi%209.png',
    title: 'Xiaomi Mi 9',
    url: 'bags',
  },
  {
    id: 2,
    img: 'https://api.sonymobile.com/files/01_Xperia-1_Primary-product-image_Black-e776e241f1d48b55ad6e630f862253b6.png',
    title: 'Sony Xperia 1',
    url: 'bags',
  },
  {
    id: 3,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154',
    title: 'iPhone XS Max',
    url: 'bags',
  },
  {
    id: 4,
    img: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_product_key_visual_beyond_s10__product_image_black_181211_sm_g975_galaxys10_.jpg',
    title: 'Samsung S10 Plus',
    url: 'bags',
  },
];

const brands = [
  {
    "id": 0,
    "image": require('../../assets/images/logo/Wrangler_logo_gray.png'),
    "url": "https://www.wrangler-ap.com/"
  },
  {
    "id": 1,
    "image": require('../../assets/images/logo/1280px-EBay_logo.svg.png'),
    "url": "https://www.ebay.com/"
  },
  {
    "id": 2,
    "image": require('../../assets/images/logo/Levis_logo.svg.png'),
    "url": "https://www.levi.com/"
  },
  {
    "id": 3,
    "image": require('../../assets/images/logo/Walmart_logo.svg.png'),
    "url": "https://www.walmart.com/"
  },
  {
    "id": 3,
    "image": require('../../assets/images/logo/apple.png'),
    "url": "https://www.apple.com/"
  },
  {
    "id": 4,
    "image": require('../../assets/images/logo/ralph_lauren.png'),
    "url": "https://www.ralphlauren.com/"
  },
  {
    "id": 5,
    "image": require('../../assets/images/logo/h&m.png'),
    "url": "https://www.hm.com/"
  }
];

const initialState = {
  brands: brands,
  phones: phones,
  product: {},
  error: null,
  isLoading: false,
  isCancelled: false,
};

export default function product(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_PRODUCT_DETAILS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case types.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: {
          ...state.product,
          [action.id]: {
            ...action.data,
          }
        },
        error: null,
      };

    case types.GET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.GET_PRODUCT_DETAILS_CANCEL:
      return {
        ...state,
      };

    case types.GET_PRODUCT_DETAILS_CANCELLED:
      return {
        ...state,
        isLoading: false,
        isCancelled: true,
        error: null,
      };
    default:
      return state;
  }
}

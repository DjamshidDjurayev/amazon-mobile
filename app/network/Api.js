import buildUrl from 'build-url'

export default {
  userLogin: () => buildUrl('/api/users/login'),
  userLogout: () => buildUrl('/api/users/logout'),
  userRegistration: () => buildUrl('/api/users'),
  userGetDetails: id => buildUrl('/api/users', {path: id}),
  getCategories: () => buildUrl('/api/categories'),
  getCart: () => buildUrl('/api/users/me/cart'),
  getMyOrders: () => buildUrl('/api/users/me/myorders'),
  searchProducts: data => buildUrl('/api/products/getProducts', {
    queryParams: {
      query: data.query,
      category: data.category
    }
  }),
  getProductDetails: id => buildUrl('/api/products/getAmazonProduct', {
    queryParams: {
      query: 'http://amazon.com/dp/' + id
    }
  }),
  getHomeProducts: () => buildUrl('/api/products/main'),
  updateUserNames: id => buildUrl('/api/users', {
    path: id,
  })
}

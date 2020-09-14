import vue from 'vue'
vue.filter('header', (url, val) => {
  return url.replace(/\/upload/, val)
})

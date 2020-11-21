// 本地缓存封装
export default {
  getItem: (key) => {
    let value
    try {
      value = localStorage.getItem(key)
    } catch (error) {
      // 开发环境下提示，error
      if (process.env.NODE_ENV === 'development') {
        console.log('localStorage.getItem报错，', error.message)
      }
    } finally {
      return value
    }
  },
  setItem: (key, value) => {
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      localStorage.setItem(key, value)
    } catch (error) {
      // 开发环境下提示，error
      if (process.env.NODE_ENV === 'development') {
        console.log('localStorage.getItem报错，', error.message)
      }
    }
  },
}

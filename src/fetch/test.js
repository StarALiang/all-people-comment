import 'whatwg-fetch'
import 'es6-promise'

export function getData() {
  var result = fetch('/news', {
    credentials: 'include',
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
  })

  result
    .then((res) => {
      return res.text()
    })
    .then((text) => {
      console.log(text)
    })
}

export function postData() {
  var result = fetch('/api/post', {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // 注意 post 时候参数的形式
    body: 'a=100&b=200',
  })

  result
    .then((res) => {
      return res.text()
    })
    .then((text) => {
      console.log(text)
    })
}

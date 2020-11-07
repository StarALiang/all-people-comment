import 'whatwg-fetch'
import 'es6-promise'

function obj2Params(obj) {
  var result = ''
  for (var item in obj) {
    result += `&${item}=${encodeURIComponent(obj[item])}`
  }
  console.log(result)
  if (result) {
    result = result.slice(1)
  }

  return result
}

export function post(url, paramsObj) {
  var result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // 注意 post 时候参数的形式
    body: obj2Params(paramsObj),
  })

  return result
}

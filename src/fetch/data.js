import { get } from './get'
import { post } from './post'

export function getData() {
  var result = get('/news')

  result
    .then((res) => {
      return res.text()
    })
    .then((text) => {
      console.log(text)
    })
}

export function postData() {
  var result = post('/api/post', { a: 100, b: 20000 })

  result
    .then((res) => {
      return res.text()
    })
    .then((text) => {
      console.log(text)
    })
}

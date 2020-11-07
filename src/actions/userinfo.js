import * as types from '../constants/userinfo'

export const login = (data) => {
  return {
    type: types.USERINFO_LOGIN,
    data,
  }
}

export const updateCityName = (data) => ({
  type: types.UPDATE_CITYNAME,
  data,
})

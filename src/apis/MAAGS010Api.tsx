import request from 'utils/request'

export const logoutRequest = () =>
  request({
    url: `MAAGS010/logout`,
    method: 'post',
  })

export const getUserInfoRequest = () =>
  request({
    url: '/MAAGS010/init',
    method: 'post',
  })

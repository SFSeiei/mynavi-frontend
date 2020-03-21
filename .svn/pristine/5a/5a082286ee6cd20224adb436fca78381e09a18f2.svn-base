import request from 'utils/request'
import PasswordRequestDto from 'types/MAABS010PasswordRequest'

export const updatePasswordRequest = (params:PasswordRequestDto) =>
  request({
    url: '/MAABS010/changePassword',
    method: 'post',
    data:params,
  })

export const initSysVersionNumber = () =>
  request({
    url: '/MAABS010/init',
    method: 'post',
})
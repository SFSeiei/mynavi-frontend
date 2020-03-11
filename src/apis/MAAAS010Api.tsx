import loginRequestDto from 'types/MAAAS010LoginRequest'
import request from 'utils/request'
export const loginRequest = (params:loginRequestDto) =>
  request({
    url: '/MAAAS010/login',
    method: 'post',
    data:params,
  })

export const isIpAddress = () =>
  request({
    url: '/MAAAS010/init',
    method: 'post',
  })


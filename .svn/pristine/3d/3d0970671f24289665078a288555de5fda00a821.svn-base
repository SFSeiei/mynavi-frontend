import request from 'utils/request'
import { MAAES010QueryRequest } from 'types/MAAES010QueryRequest'
import { MAAES010IdRequest } from 'types/MAAES010IdRequest'

export const initRequest = () =>
  request({
    url: '/MAAES010/init',
    method: 'post',
  })
  
export const selectRequest = (apiData: MAAES010QueryRequest) =>
  request({
    url: '/MAAES010/list',
    method: 'post',
    data: apiData,
  })

export const makePublicRequest = (apiData: MAAES010IdRequest[]) =>
  request({
    url: '/MAAES010/makePublic',
    method: 'post',
    data: apiData,
  })

export const makeNoPublicRequest = (apiData: MAAES010IdRequest[]) =>
  request({
    url: '/MAAES010/makeNoPublic',
    method: 'post',
    data: apiData,
  })

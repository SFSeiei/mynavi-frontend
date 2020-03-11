import request from 'utils/request'
import { MAABS020QueryRequest } from 'types/MAABS020QueryRequest'
import { MAABS020IdRequest } from 'types/MAABS020IdRequest'

export const selectRequest = (apiData: MAABS020QueryRequest) =>
  request({
    url: '/MAABS020/find',
    method: 'post',
    data: apiData,
  })

export const updateByValidRequest = (apiData: MAABS020IdRequest[]) =>
  request({
    url: '/MAABS020/activate',
    method: 'post',
    data: apiData,
  })
  
export const updateByInValidRequest = (apiData: MAABS020IdRequest[]) =>
  request({
    url: '/MAABS020/deactivate',
    method: 'post',
    data: apiData,
  })

  export const inValidCheckRequest = (apiData: MAABS020IdRequest[]) =>
  request({
    url: '/MAABS020/deactivateCheck',
    method: 'post',
    data: apiData,
  })  

export const updateByPasswordRequest = (apiData: MAABS020IdRequest[]) =>
  request({
    url: '/MAABS020/resetPassword',
    method: 'post',
    data: apiData,
  })

export const fetchRequest = () =>
  request({
    url: '/MAABS020/list',
    method: 'get',
  })




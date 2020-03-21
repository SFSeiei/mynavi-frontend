import request from 'utils/request'
import {MAACS040QueryRequest} from 'types/MAACS040QueryRequest';
import {MAACS040IdRequest} from 'types/MAACS040IdRequest'

export const selectRequest = (apiData: MAACS040QueryRequest) =>
  request({
    url: '/MAACS040/find',
    method: 'post',
    data: apiData,
  })

export const SetPasswordRequest = (apiData: MAACS040IdRequest) =>
  request({
    url: '/MAACS040/temporaryPasswordIssuance',
    method: 'post',
    data: apiData,
  })
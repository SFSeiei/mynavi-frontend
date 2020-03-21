import request from 'utils/request'
import {MAACS030UpdateRequest} from 'types/MAACS030UpdateRequest'

export const companyDetailRequest = (id: string) =>
  request({
    url: `MAACS030/init/${id}`,
    method: 'post',
  })

export const companyUpdateRequest = (apiData: MAACS030UpdateRequest) =>
request({
  url: 'MAACS030/update',
  method: 'post',
  data: apiData,
})

export const contractCheckRequest = (companyId : string) =>
request({
  url: `MAACS030/detailCheck/${companyId}`,
  method: 'post',
})



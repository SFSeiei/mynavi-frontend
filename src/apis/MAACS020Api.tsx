import request from 'utils/request'
import {MAACS020CreateRequest} from 'types/MAACS020CreateRequest'

export const createCompanyRequest = (apiData: MAACS020CreateRequest) =>
request({
  url: '/MAACS020/resister',
  method: 'post',
  data: apiData,
})
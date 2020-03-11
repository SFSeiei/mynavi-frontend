import request from 'utils/request'
import { MAAES020CreateRequest } from 'types/MAAES020CreateRequest'

export const initialCreateRequest = (
  newsId: number
) =>
  request({
    url: `/MAAES020/init/${newsId}`,
    method: 'post',
  })

export const createNotificationRequest = (apiData: MAAES020CreateRequest) =>
  request({
    url: '/MAAES020/resister',
    method: 'post',
    data: apiData,
  })

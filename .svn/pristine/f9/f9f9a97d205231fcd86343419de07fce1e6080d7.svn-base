import request from 'utils/request'
import { MAAES030UpdateRequest } from 'types/MAAES030UpdateRequest'

export const initialDetailRequest = (newsId: number) =>
  request({
    url: `/MAAES030/init/${newsId}`,
    method: 'post',
  })

export const updateNotificationRequest = (apiData: MAAES030UpdateRequest) =>
  request({
    url: '/MAAES030/update',
    method: 'post',
    data: apiData,
  })

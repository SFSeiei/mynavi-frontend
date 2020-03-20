import request from 'utils/request'
import { MAAES020CreateRequest } from 'types/MAAES020CreateRequest'

export const initialCreateRequest = (
  newsId: number
) =>
  request({
    url: `/MAAES020/init/${newsId}`,
    method: 'post',
  })

export const createNotificationRequest = (apiData: MAAES020CreateRequest) => {

  const data = new FormData()
  data.append('createRequest',encodeURI(JSON.stringify(apiData)))
  apiData.fileSelected.map(i => (
    data.append('fileSelected', i)
  ))

  return request({
    url: '/MAAES020/resister',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}


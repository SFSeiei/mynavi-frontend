import request from 'utils/request'
import MAABS040UpdateRequest from 'types/MAABS040UpdateRequest'



export const detailRequest = (id: string) =>
  request({
    url: `MAABS040/init/${id}`,
    method: 'post',
  })

export const updateRequest = (account: MAABS040UpdateRequest) =>
  request({
    url: '/MAABS040/update',
    method: 'post',
    data: account,
  })


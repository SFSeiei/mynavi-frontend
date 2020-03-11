import request from 'utils/request'
import MAABS030CreateRequest from 'types/MAABS030CreateRequest'


export const createInit = () =>
  request({
    url: '/MAABS030/init',
    method: 'post',
  })

export const createRequest = (account: MAABS030CreateRequest) =>
  request({
    url: '/MAABS030/create',
    method: 'post',
    data: account,
  })



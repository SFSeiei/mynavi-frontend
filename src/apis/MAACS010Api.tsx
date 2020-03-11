import request from 'utils/request';
import MAACS010QueryRequest  from 'types/MAACS010QueryRequest';
import MAACS010IdRequest  from 'types/MAACS010IdRequest';

export const searchRequest = (companyData: MAACS010QueryRequest) =>
  request({
    url: '/MAACS010/search',
    method: 'post',
    data: companyData,
});
export const accountIssuanceRequest = (companyData: MAACS010IdRequest) =>
  request({
    url: '/MAACS010/accountIssuance',
    method: 'post',
    data: companyData,
});
export const temporaryPasswordIssuanceRequest = (companyData: MAACS010IdRequest) =>
  request({
    url: '/MAACS010/temporaryPasswordIssuance',
    method: 'post',
    data: companyData,
});
export const findAdministrator = () =>
  request({
    url: '/MAACS010/findAdmin',
    method: 'post',
});
export const initializeRequest = () =>
  request({
    url: '/MAACS010/init',
    method: 'post',
});

import request from 'utils/request';
import MAAFS010LogQueryRequest from 'types/MAAFS010QueryRequest';
import { MAAFS010OperationLogOutDto } from 'reducers/operationLogReducer';

export const searchRequest = (operationLog: MAAFS010LogQueryRequest) =>
  request({
    url: '/MAAFS010/find',
    method: 'post',
    data: operationLog,
  });
export const outputCsvRequest = (operationLog: MAAFS010OperationLogOutDto[]) =>
request({
  url: '/MAAFS010/outputCsv',
  method: 'post',
  data: operationLog,
});
export const searchInit = () =>
request({
  url: '/MAAFS010/init',
  method: 'post',
});


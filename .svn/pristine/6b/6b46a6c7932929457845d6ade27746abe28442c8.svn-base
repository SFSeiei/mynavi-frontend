import request from 'utils/request';
import { MAADS010QueryRequest} from 'types/MAADS010QueryRequest';
import { initList } from 'reducers/applicationReducer';

//入力した検索条件を元に申込情報を検索する
export const searchRequest = (application: MAADS010QueryRequest) =>
  request({
    url: '/MAADS010/find',
    method: 'post',
    data: application,
  })
//営業担当者情報を取得する
export const searchInit = () =>
  request({
    url: '/MAADS010/init',
    method: 'post',
  })
//選定した企業を登録する
export const loginMagiClient = () =>
request({
  url: '/MAADS010/loginMagiClient',
  method: 'post',
})
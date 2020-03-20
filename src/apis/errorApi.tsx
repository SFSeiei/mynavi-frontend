import request from 'utils/request';
import { getErrorFromStorage } from 'utils/error';

export const sendRequest = (error: ReturnType<typeof getErrorFromStorage>) =>
  request({
    url: '/auth/errorlog',
    method: 'post',
    data: error,
  });

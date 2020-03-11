import request from 'utils/request';
import { getErrorFromStorage } from 'utils/error';

export const sendRequest = (error: ReturnType<typeof getErrorFromStorage>) =>
  request({
    url: '/admin/errorlog',
    method: 'post',
    data: error,
  });

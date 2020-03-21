import request from 'utils/request';

export const uploadRequest = (
  files: File[],
  setProgress: React.Dispatch<React.SetStateAction<number>>,
) => {
  const data = files.reduce((result, current) => {
    result.append('files', current);
    return result;
  }, new FormData());

  return request({
    url: '/uploadMulti',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: progressEvent => {
      setProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total),
      );
    },
    data,
  });
};

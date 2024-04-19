import {request} from '../network/index';
import {upload} from '../network/file';


// 入职申请 
export function submitApply(params={}) {
  return request({
    url: '/pklApi/public/joining/submitJoiningApproval',
    method: 'POST',
    params
  });
}

// 文件上传 
export function uploadImg(file, params={}) {
  return upload({
    file,
    url: '/pklApi/public/joining/uploadFile',
    params
  });
}
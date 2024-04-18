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
export function uploadImg(file) {
  return upload({
    file,
    path: '/pklApi/private/file/uploadFile',
    params: {}
  });
}
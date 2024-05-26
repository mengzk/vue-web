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

// 获取组织 
export function queryGroupTree(params={}) {
  return request({
    url: '/pklApi/private/organization/getOrganizationTree',
    method: 'POST',
    params
  });
}

// 获取员工信息 
export function queryStaff(userId) {
  return request({
    url: '/pklApi/private/user/getUserDetailByUserId',
    method: 'POST',
    params: {userId}
  });
}

// 获取角色 
export function queryRole() {
  return request({
    url: '/pklApi/private/dict/getEnumObjectByType',
    method: 'POST',
    params: {enumType: 'JOB_POSITION'}
  });
}

// 获取办公地址 
export function queryOfficeLocation() {
  return request({
    url: '/pklApi/private/officeLocation/listPageOfficeLocation',
    method: 'POST',
    params: {pageNo: 1, pageSize: 1000}
  });
}

// 获取省市区 
export function getAreaConfig() {
  return request({
    url: '/pklApi/public/agent/getAreaConfig',
    method: 'GET',
    params: {}
  });
}
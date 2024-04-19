/**
 * 获取参数
 * @param {*} location 
 */
export function getUrlParams() {
  const location = window.location;
  // console.log(location);
  const search = location.search||'';
  const params = {};
  if(search.includes('?')) {
    const arr = search.replace('?', '').split('&');
    arr.forEach(e => {
      const cell = e.split('=');
      params[cell[0]] = cell[1];
    });
  }
  console.log(params);
  return params;
}
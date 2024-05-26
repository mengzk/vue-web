
// 请求头及参数处理
export function interceptor(params, headers) {
  headers['Content-Type'] = "application/json";
  // headers.token = token;
  return { params, headers };
}

// 配置 
export function network(options) {
  if (options.method == "POST") {
    options.body = JSON.stringify(options.params);
    delete options.params;
  }

  return fetch(options.url, options)
  .then((res) => res.json());
}

// 请求头及参数处理
export function interceptor(params, headers) {
  let token = "9AZMBYfKQdyaJzQ";
  headers['Content-Type'] = "application/json";
  // headers.token = token;
  return { params, headers };
}

// 配置 
export function network(options) {
  if (options.method == "POST") {
    options.data = options.params;
    delete options.params;
  }

  return new Promise((resolve, reject) => {
    fetch(options.url, options)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
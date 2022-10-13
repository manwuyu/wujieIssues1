// 携带登录态credentials必须为include
export default function fetch(url, options) {
  console.log(url)
  if(url.indexOf('baidu.com')>-1 ||url.indexOf('bdimg.com')>-1 ){
    return window.fetch(url, { ...options, credentials: "omit",  mode: 'no-cors', });
  } else{
    return window.fetch(url, { ...options, credentials: "omit" , mode: 'cors',});
  }
  
}

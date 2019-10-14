
import axios from 'axios'
import { message } from 'ant-design-vue'
import store from '../store/index.js'

// 创建axios实例

const service = axios.create({
  baseURL: process.env.Base_URL, // api的base_url 设置代理后不需要baseUrl
  timeout: 5000 // 请求超时时间
});
// request拦截器
let errorMessage = true;
service.interceptors.request.use(
  config => {
   //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
   // config.headers['Content-Type'] = 'application/json;';
    //token
    let token=localStorage.getItem('token');
    if(token){
      config.headers.common['Authorization']=token;
    }
// 设置当前请求是否是错误提示
    try {
      errorMessage = config.setting.errorMessage
    } catch (err) {
      errorMessage = true
    }
// 设置请求参数
   // config.data = Qs.stringify(config.data);
   // config.data = JSON.stringify(config.data);
    return config
  },
  error => {
    Promise.reject(error)
  }
);
//respone拦截器
service.interceptors.response.use(response => {
    const code = response.code;

    if(code==='999'){
        store.commit('setlogin',false);   //重新登录
      //删除token
     // localStorage.removeItem('token');
      message.error('请先登录',5);
     }else if(response.data.token){
      localStorage.setItem('token',response.data.token);

    };
    return response;

  },
  error => {
   message.error('系统错误，请稍后重试',5);
    return Promise.reject(error)
  }
);
export default service

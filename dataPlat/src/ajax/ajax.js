import  api from './api.js';
function $ajax(url,method,data1){
  if(method==='POST'){
    let data= Object.assign({},data1);
    return api.request({url,method,data});
  }
  else{
    let params= Object.assign({},data1);
    return api.request({url,method,params});
  }
}
export default $ajax;

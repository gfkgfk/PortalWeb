import axios from 'axios'
import {getToken} from "@/utils/utils";

var urls = require('@/api/urls')

const tokenKey = 'token' //TODO:config your token key

/**
 * @description 创建请求实例
 */
function createInstance() {
    const service = axios.create()
    // 请求拦截器
    service.interceptors.request.use(
        async config => {
            config.headers[tokenKey] = getToken()
            return config
        },
        error => {
            // 发送失败
            console.log(error)
            Promise.reject(error)
        }
    )

    // 响应拦截器
    service.interceptors.response.use(
        response => {
            //TODO:Token过期重新获取
            return response
        },
        error => {
            console.log('response error: ', error);
            return Promise.reject(error)
        }
    )
    return service
}



function getInstance(){
    // 用于真实网络请求的实例和请求方法
    const service = createInstance()

    /**
     * Request Wrapper
     * @param {Object} {name: "request api name",data:{request params}}
     * @returns
     */
    service.send = function send(name, params, config) {
        if (!urls.default[name]) {
            console.log('urls.default', urls.default)
            console.log(name)
            return Promise.reject('url is not included in config file (api.js config)')
        }

        let url = process.env.VUE_APP_BASE_URL + urls.default[name].url
        console.log('urlurlL:',url)
        let data = params
        let type = urls.default[name].type
        // Generate get request parameters
        if (type.toUpperCase() == 'GET') {
            url += "?"
            for (let key in data) {
                url += key + "=" + data[key] + "&"
            }
            //去除最后多余的"&"
            if(url.length>1 && url.endsWith("&")){
                url = url.substring(0, url.length - 1)
            }
        }
        // post request handle
        if (type.toUpperCase() == 'POST') {

        }

        let defaultConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',  // application/json;charset=utf-8
                // 'Content-Type': 'application/json;charset=utf-8',  // application/json;charset=utf-8
            },
            url: url,
            method: type,
            data: data,
            withCredentials: true,//请求头中携带cookies
            timeout: 30 * 1000,
        }
        return service.request(Object.assign(defaultConfig, config))
    }

    return service;
}

export const api = getInstance();
// 取token
export function getToken() {
    return localStorage.getItem('token')
}
// 设置token
export function setToken(token) {
    localStorage.setItem('token', token)
}

// 取 localStorage
export function getStorage(key) {
    return localStorage.getItem(key)
}
// 设置 localStorage
export function setStorage(key,val) {
    localStorage.setItem(key, val)
}

// 删除 localStorage 中的item
export function removeStorage(key) {
    localStorage.removeItem(key)
}
//删除 localStorage 中的个人信息
export function clearInfo() {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
}
//删除 localStorage 中的所有
export function clearStorage() {
    localStorage.clear()
}

/**
 * 时间格式化
 * @param {Object} fmt
 * @param {Object} date
 */
export function dateFormat(fmt, date){
    date = new Date(date)
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
                .length)));
    return fmt;
}


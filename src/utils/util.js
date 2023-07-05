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
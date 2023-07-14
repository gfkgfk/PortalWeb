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


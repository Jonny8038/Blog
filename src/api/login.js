import request from '@/until/request'

// 登录方法
export function login(phone, password) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            phone,
            password
        }
    })
}
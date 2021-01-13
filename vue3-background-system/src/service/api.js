import { get, post } from './request'

/**
 * 请求方法
 * @param {*} p 请求参数
 */
export const apiAddress = p => post('/rentcar/tenant/api/v1/promote/token/getCashDetail', p)

import { get, post, put, del } from '../api/index'

/**
 * 获取列表
 */
export function getDBList() {
    return get('/dbope/list', {})
}

export function getAllDBList(page = 1) {
    return get('/dbope/listAll', { page, per: 2 })
}

export function getTableList(db_id) {
    return get(`/tbope/list?dbId=${db_id}`, {})
}

/**
 * 创建数据
 * @param {*} data
 */
export function createDB(data) {
    return post('/dbope/create', data)
}

/**
 * 删除数据
 * @param {*} data
 */
export function dropDB(data) {
    return post('/dbope/drop', data)
}

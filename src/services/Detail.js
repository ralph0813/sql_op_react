import { get, post, put, del } from "../api/index"

/**
 * 获取列表
 */
export function listDetail() {
    return get("//v1/admin/products", { });
}

/**
 * 创建数据
 * @param {*} data
 */
export function createApi(data) {
    return post("/api/v1/admin/products", data);
}

/**
 * 根据id获取获取数据
 * @param {*} id
 */
export function getOneById(id) {
    return get(`/api/v1/admin/products/${id}`);
}

/**
 * 修改记录
 * @param {*} id
 * @param {*} data
 */
export function modifyOne(id, data) {
    return put(`/api/v1/admin/products/${id}`, data);
}

/**
 * 删除记录
 * @param {*} id
 * @param {*} data
 */
export function delOne(id, data) {
    return del(`/api/v1/admin/products/${id}`);
}

import React from 'react'
import { getDBList } from '../services/db'

const defaultStore = {
    list: []
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 'GET_DB_LIST':
            let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
            getDBList()
                .then(res => {
                    // console.log(res.data.data)
                    let new_db_list = []
                    for (let index in res.data.data) {
                        new_db_list.push({
                            key: res.data.data[index]['id'],
                            id_: res.data.data[index]['id'],
                            name: res.data.data[index]['name']
                        })
                    }
                    newState.list = new_db_list
                    return newState
                })
                .catch(error => {
                    console.log('axios 获取数据失败' + error)
                })
            return state

        case 'GET_TABLE_LIST':
            let new_table_list = []
            getDBList().then(res => {
                for (let index in res.data.data) {
                    new_table_list.push({
                        key: res.data.data[index]['id'],
                        id_: res.data.data[index]['id'],
                        name: res.data.data[index]['name']
                    })
                }
            })
            return { ...state, tableList: new_table_list }
        default:
            return state
    }
}

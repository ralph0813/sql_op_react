import React from 'react'
import { getDBList } from '../services/db'

const defaultStore = {
    dbList: [
        {
            key: 0,
            id_: 1,
            name: 'db'
        }
    ],
    tableList: []
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 'GET_DB_LIST':
            let new_db_list = []
            getDBList().then(res => {
                for (let index in res.data.data) {
                    new_db_list.push({
                        key: res.data.data[index]['id'],
                        id_: res.data.data[index]['id'],
                        name: res.data.data[index]['name']
                    })
                }
            })
            return { ...state, dbList: new_db_list }
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

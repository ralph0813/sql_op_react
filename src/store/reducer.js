// import {getDBList} from "../services/db";
// import store from "./index";
import {Button, Divider} from "antd";
import React from "react";
import {getDBList} from "../services/db";

const defaultStore = {
    columns: [
        {
            title: '数据库编号',
            dataIndex: 'id_',
            key: 'id_',
            render: text => <Button type='link'>{text}</Button>
        },
        {
            title: '数据库名',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type='link'>{text}</Button>
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type='primary'> Edit </Button>
                    <Divider type='vertical'/>
                    <Button type='danger'>Delete</Button>
                </span>
            )
        }
    ],
    dbList: [{
        key: 0,
        id_: 1,
        name: 'db'
    }],
    tableList: [],
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 'GET_DB_LIST':
            let newState = JSON.parse(JSON.stringify(state))
            let new_db_list = []
            getDBList().then(res => {
                console.log(res.data.data)
                for (let index in res.data.data) {
                    new_db_list.push({
                        key: res.data.data[index]['id'],
                        id_: res.data.data[index]['id'],
                        name: res.data.data[index]['name']
                    })
                }
            })
            newState.dbList = new_db_list
            return newState
        default:
            return state
    }
}

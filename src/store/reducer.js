import {MENU_TOGGLE} from './actionType'
import {getDBList} from "../services/db";
import store from "./index";
import {Button, Divider} from "antd";
import React from "react";

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
    dbList: [],
    tableList: [],
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 'GET_DB_LIST':
            let newState = JSON.parse(JSON.stringify(state))
            newState.dbList = action.db_list
            console.log(newState)
            return newState
        default:
            return state
    }
}

import React, {Component} from 'react';
import {Anchor, Button, Card, Divider, Table, Tag} from "antd";
// import {getDBList} from '@/services/db.js'
import store from "../../../../store";
import {getDBList} from "../../../../services/db";


class ListDB extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState()
    }


    componentDidMount() {
        const db_list = []
        getDBList().then(res => {
            for (let index in res.data.data) {
                db_list.push({
                    key: res.data.data[index]['id'],
                    id_: res.data.data[index]['id'],
                    name: res.data.data[index]['name']
                })
            }
        })
        let action = {
            type: "GET_DB_LIST",
            db_list: db_list
        }
        store.dispatch(action)
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({selectedRowKeys})
    }

    render() {
        console.log(this.state.columns)
        console.log(this.state.dbList)
        return (
            <Card title='数据库'>
                <Table columns={this.state.columns} dataSource={this.state.dbList}/>
            </Card>
        )
    }

}

export default ListDB;
import React, {Component} from 'react';
import {Card,Table} from "antd";
import store from "../../../../store";


class ListDB extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState()
    }


    componentDidMount() {
        let action = {
            type: "GET_DB_LIST",
        }
        store.dispatch(action)
    }


    render() {
        console.log(this.state.columns)
        console.log(this.state.dbList)
        return (
            <Card title='数据库' >
                <Table columns={this.state.columns} dataSource={this.state.dbList}/>
            </Card>
        )
    }

}

export default ListDB;
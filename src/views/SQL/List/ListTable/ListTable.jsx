import React, { Component } from 'react'
import { Button, Card, Divider, Table } from 'antd'
import store from '../../../../store'

class ListTable extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    columns = [
        {
            title: '编号',
            dataIndex: 'id_',
            key: 'id_',
            render: text => <Button type='link'>{text}</Button>
        },
        {
            title: '表名',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type='link'>{text}</Button>
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button
                        type='primary'
                        onClick={() => {
                            this.props.history.push('/sql/list/:db_id')
                        }}>
                        查看
                    </Button>
                    <Divider type='vertical' />
                    <Button type='primary'> 编辑 </Button>
                    <Divider type='vertical' />
                    <Button type='danger'> 删除 </Button>
                </span>
            )
        }
    ]

    componentDidMount() {
        let action = {
            type: 'GET_TABLE_LIST'
        }
        store.dispatch(action)
    }

    render() {
        console.log(this.state.tableList)
        return (
            <Card title='数据表'>
                <Table columns={this.columns} dataSource={this.state.tableList} />
            </Card>
        )
    }
}

export default ListTable

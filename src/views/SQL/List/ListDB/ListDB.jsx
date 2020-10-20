import React, { Component } from 'react'
import { Button, Card, Divider, Table } from 'antd'
import store from '../../../../store'

class ListDB extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    columns = [
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
            render: (text, record, index) => {
                return (
                    <span>
                        <Button
                            type='primary'
                            onClick={() => {
                                this.props.history.push(`/sql/list/${record.id_}`)
                            }}>
                            查看
                        </Button>
                        <Divider type='vertical' />
                        <Button
                            type='primary'
                            onClick={() => {
                                this.props.history.push(`/sql/edit/${record.id_}`)
                            }}>
                            {' '}
                            编辑{' '}
                        </Button>
                        <Divider type='vertical' />
                        <Button type='danger'> 删除 </Button>
                    </span>
                )
            }
        }
    ]

    componentDidMount() {
        let action = {
            type: 'GET_DB_LIST'
        }
        store.dispatch(action)
    }

    render() {
        console.log(this.state.dbList)
        return (
            <Card title='数据库'>
                <Table columns={this.columns} dataSource={this.state.dbList} />
            </Card>
        )
    }
}

export default ListDB

import React, { Component } from 'react'
import { Button, Card, Divider, Table } from 'antd'
import { getTableList } from '../../../../services/db'

class ListTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            db_id: 0
        }
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
            render: (text, record, index) => {
                return (
                    <span>
                        <Button
                            type='primary'
                            onClick={() => {
                                this.props.history.push(`/sql/list//${record.id_}`)
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
        getTableList(this.state.db_id)
            .then(res => {
                let new_table_list = []
                for (let index in res.data.data) {
                    new_table_list.push({
                        key: res.data.data[index]['id'],
                        id_: res.data.data[index]['id'],
                        name: res.data.data[index]['name']
                    })
                }
                this.setState({ list: new_table_list })
            })
            .catch(error => {
                console.log('axios 获取数据失败' + error)
            })
    }

    render() {
        console.log(this.state.list)
        return (
            <Card title='表'>
                <Table columns={this.columns} dataSource={this.state.list} />
            </Card>
        )
    }
}

export default ListTable

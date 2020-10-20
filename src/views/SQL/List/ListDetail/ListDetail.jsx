import React, {Component} from 'react';
import {Anchor, Button, Card, Divider, Table, Tag} from "antd";

const {Column} = Table
const {Link} = Anchor

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </span>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type='link'>Invite {record.name}</Button>
                <Divider type='vertical'/>
                <Button type='link'>Delete</Button>
            </span>
        )
    }
]

const data = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: `${i + 1}`,
        address: `London, Park Lane no. ${i}`,
        tags: ['nice', 'developer']
    })
}

class ListDetail extends Component {
    state = {
        selectedRowKeys: []
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({selectedRowKeys})
    }

    render() {
        const {selectedRowKeys} = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()] // 0...45
                        })
                    }
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = []
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false
                            }
                            return true
                        })
                        this.setState({selectedRowKeys: newSelectedRowKeys})
                    }
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = []
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true
                            }
                            return false
                        })
                        this.setState({selectedRowKeys: newSelectedRowKeys})
                    }
                }
            ]
        }
        return (
            <Card title='表格内容'>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
            </Card>)

    }
}

export default ListDetail;
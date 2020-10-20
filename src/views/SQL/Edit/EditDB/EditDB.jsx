import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import {
    Alert,
    Layout,
    Row,
    Col,
    Divider,
    Form,
    Button,
    Icon,
    Input,
    InputNumber,
    Checkbox,
    Tooltip,
    Cascader,
    Select,
    DatePicker,
    Radio,
    Rate,
    Switch,
    Slider,
    AutoComplete,
    message
} from 'antd'
import '@/style/view-style/form.scss'
//
// const {Option} = Select
// const AutoCompleteOption = AutoComplete.Option

class FromView extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        visible: true
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (err) return
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'] ? fieldsValue['date-picker'].format('YYYY-MM-DD') : ''
            }
            console.log('这就是你填好的数据' + values)
            message.info('你很棒哦,这么快就填好了!')
        })
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致!')
        } else {
            callback()
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    }

    handleWebsiteChange = value => {
        let autoCompleteResult
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['@google.com', '@163.com', '@qq.com'].map(domain => `${value}${domain}`)
        }
        this.setState({ autoCompleteResult })
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 10 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 0
                },
                sm: {
                    span: 10,
                    offset: 6
                }
            }
        }

        return (
            <Layout className='animated fadeIn'>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <div>
                                {this.state.visible ? (
                                    <Alert
                                        message='你最好认真的填写表单!'
                                        type='warning'
                                        closable
                                        banner
                                        afterClose={this.handleClose}
                                    />
                                ) : null}
                            </div>
                            <Divider orientation='left'>基础功能</Divider>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item
                                    label={
                                        <span>
                                            用户名&nbsp;
                                            <Tooltip title='可以尽量好听点，真的!'>
                                                <Icon type='question-circle-o' />
                                            </Tooltip>
                                        </span>
                                    }>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名' }]
                                    })(<Input placeholder='请输入用户名' />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        disabled={getFieldValue('agreement') ? false : true}>
                                        添加
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FromView)

export default WrappedNormalLoginForm

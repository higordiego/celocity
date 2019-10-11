import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Row, Col, Card } from 'antd';

import Logo from '../../img/logo.png'

const { actionAuthenticate, saveTokenUser } = require('../../actions/authenticate/auth.action')

class Login extends Component {

    state = {
        loading: false
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    this.setState({ loading: true })
                    const user = await actionAuthenticate(values)
                    saveTokenUser(user.token)
                    this.props.history.push(`/dashboard`)
                } catch (err) {
                    this.setState({ loading: false })
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row type="flex" justify="center" gutter={16} style={{ margin: "50px 0px 0px 0px" }} >
                    <Col xxl={6} lg={8} md={12} sm={22} xs={23} style={{ marginTop: "50px", padding: 0 }}>
                        <Card align="center" title="Autenticação" >
                            <img src={Logo} alt="logo finspect" style={{ marginBottom: "30px", marginTop: "30px", height: "200px" }} />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Por favor insira seu email!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="email"
                                            placeholder="Email"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Por favor coloque sua senha!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Senha"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Link
                                    style={{ float: "right", marginTop: "-3%", marginBottom: '2%' }} to="/forgot" alt="Esqueceu sua senha ?"><Icon type="lock" color="#53A1F9"/> Equeceu sua senha ? </Link>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={this.state.loading}
                                        style={{ width: '100%' }}> Entrar </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login);

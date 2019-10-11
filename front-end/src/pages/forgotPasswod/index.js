import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Row, Col, Card, Avatar } from 'antd';


import { validateTokenForgot, updatePasswordForgot } from '../../actions/user/user.actions'

import { openNotification } from '../../components/notification'


class ForgotPassword extends Component {

    state = {
        loading: false,
        token: null
    }

    async componentDidMount() {
        try {
            const { token } = this.props.match.params
            if (token) await validateTokenForgot(token)
            else return this.props.history.push(`/`)
            this.setState({ token: token })
        } catch (err) {
            return this.props.history.push(`/`)
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    this.setState({ loading: true })
                    if (values.password1 !== values.password2) openNotification('Erro', 'As senhas devem ser iguais!', 'warning')
                    else {
                        await updatePasswordForgot({ password: values.password1, code: this.state.token })
                        openNotification('Sua senha', 'Sua senha foi modificada.!', 'success')
                        this.props.history.push(`/`)
                    }
                    this.setState({ loading: false })
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
                <Row type="flex" justify="center" style={{ margin: "100px 0px 0px 0px" }} >
                    <Col xxl={6} lg={8} md={12} sm={22} xs={23} style={{ marginTop: "50px", padding: 0 }}>
                        <Card align="center" >
                            <Avatar size={120} icon="lock" style={{ marginBottom: "30px", marginTop: "30px"  }} />
                            <h4 align="center" style={{ marginBottom: '5%' }}> Insira sua nova senha! </h4>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('password1', {
                                        rules: [{ required: true, min: 6, message: 'Por favor coloque sua senha!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Senha"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password2', {
                                        rules: [{ required: true, min: 6, message: 'Por favor coloque sua senha!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Senha"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={this.state.loading}
                                        style={{ width: '100%' }}> Salvar </Button>
                                </Form.Item>
                                <Link style={{ float: "left" }} to="/" alt="Retornar para o login ?"> Retonar para o login ? </Link>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}
export default Form.create({ name: 'forgotPassword' })(ForgotPassword);

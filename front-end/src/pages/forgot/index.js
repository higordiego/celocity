import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Row, Col, Card, Avatar } from 'antd';


import { forgot } from '../../actions/user/user.actions'

import { openNotification } from '../../components/notification'


class Forgot extends Component {

    state = {
        loading: false
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    this.setState({ loading: true })
                    await forgot(values)
                    openNotification('Senha Enviada', 'Sua nova senha foi enviado para o seu email!', 'success', 'smile')
                    this.props.history.push(`/`)
                } catch (err) {
                    this.setState({ loading: false })
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" style={{ margin: "100px 0px 0px 0px" }} >
                <Col xxl={6} lg={8} md={12} sm={22} xs={23} style={{ marginTop: "50px", padding: 0 }}>
                    <Card align="center">
                        <Avatar size={120} icon="mail"/>
                        <h4 align="center"  style={{  marginBottom: '5%', marginTop: '5%' }}> Enviaremos uma nova senha para você! </h4>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Por favor insira seu email!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="email"
                                        placeholder="Email"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={this.state.loading}
                                    style={{ width: '100%', marginTop: "10px" }}> Enviar </Button>
                            </Form.Item>
                            <Link style={{ float: "left" }} to="/" alt="Retornar para o login ?"> Retonar para o login ? </Link>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}
export default Form.create({ name: 'forgot' })(Forgot);

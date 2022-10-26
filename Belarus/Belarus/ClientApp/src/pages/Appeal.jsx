import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const APPEAL_API_URL = 'http://localhost:7001/api/appeal/post';

class Appeal extends React.Component {
    state = {
    name: '',
    mail: '',
    theme: '',
    text: ''
    }
    componentDidMount() {
    if (this.props.user) {
    const { name, mail, theme, text } = this.props.user
    this.setState({ name, mail, theme, text});
    }
    }
    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
    e.preventDefault();
    fetch(`${APPEAL_API_URL}`, {
    method: 'post',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    name: this.state.name,
    document: this.state.mail,
    email: this.state.theme,
    phone: this.state.text
    })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    }
    render() {
    return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
    <FormGroup>
    <Label for="name">ФИО:</Label>
    <Input type="text" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
    </FormGroup>
    <FormGroup>
    <Label for="document">ПОЧТА:</Label>
    <Input type="text" name="document" onChange={this.onChange} value={this.state.document === null ? '' : this.state.document} />
    </FormGroup>
    <FormGroup>
    <Label for="email">ТЕМА:</Label>
    <Input type="email" name="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
    </FormGroup>
    <FormGroup>
    <Label for="phone">ТЕКСТ:</Label>
    <Input type="text" name="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}
    />
    </FormGroup>
    <Button>Send</Button>
    </Form>;
    }
    }
    export default Appeal;

    

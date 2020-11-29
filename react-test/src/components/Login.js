import React from 'react';

import LoginStyle from './LoginStyle';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    onEmailChange = (e) =>{
        this.setState({
            email: e.target.value
        })
    }
    onPasswordChahge = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    onSigninSubmit = (e) =>{
        e.preventDefault();
        console.log('email: ' + this.state.email + ', password: ' + this.state.password);
    }
    render() {
        return(
            <LoginStyle
                onSigninSubmit={this.onSigninSubmit}
                onEmailChange={this.onEmailChange}
                email={this.state.email}
                password={this.state.password}
                onPasswordChahge={this.onPasswordChahge}
            />

        )
    }
}

export default Login;
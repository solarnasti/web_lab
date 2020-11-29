import React from 'react';

import SignUpStyle from './SignUpStyle';

class SignUp extends React.Component {
    state = {
        fname:'',
        lname:'',
        email: '',
        password: ''
    }
    onFirstNameChahge = (e) =>{
        this.setState({
            fname: e.target.value
        })
    }
    onLastNameChahge = (e) =>{
        this.setState({
            lname: e.target.value
        })
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
    onSignupSubmit = (e) =>{
        e.preventDefault();
        console.log('fname: ' + this.state.fname +'lname: ' + this.state.lname +'email: ' + this.state.email + ', password: ' + this.state.password );
    }
    render() {
        return(
            <SignUpStyle
                onSignupSubmit={this.onSignupSubmit}
                onFirstNameChange={this.onFirstNameChahge}
                onLastNameChange={this.onLastNameChahge}
                onEmailChange={this.onEmailChange}
                onPasswordChahge={this.onPasswordChahge}
                fname={this.state.fname}
                lname={this.state.lname}
                email={this.state.email}
                password={this.state.password}
            />
        )
    }
}

export default SignUp;
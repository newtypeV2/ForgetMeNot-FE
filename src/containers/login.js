import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LOGIN } from '../constants';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }

    componentDidMount = () => {
        // This is to push to another url.
        // this.props.history.push('/app')
    }

    onChangeHandler = (key, value) => {
        this.setState({
            [key] : value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(LOGIN,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            if (data.message){
                alert(data.message)
            }else{
                this.props.setUser(data)
                this.props.history.push('/app')
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Username: </label>
                    <input type = 'text' name='username' onChange={(e)=>this.onChangeHandler('username',e.currentTarget.value)}/>
                    <label>Password: </label>
                    <input type = 'password' name='password' onChange={(e)=>this.onChangeHandler('password',e.currentTarget.value)}/>
                    <input type = 'submit' name = 'submit' />
                </form>
            </div>
        )
    }
}

export default withRouter(Login)

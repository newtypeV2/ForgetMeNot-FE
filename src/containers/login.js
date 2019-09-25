import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
        // console.log('sTaTe',this.state)
        // this.setState({
        //     [key] : value
        // })
    }

    render() {
        return (
            <div>
                <form>
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

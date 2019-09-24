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
    render() {
        return (
            <div>
                This is Login
            </div>
        )
    }
}

export default withRouter(Login)

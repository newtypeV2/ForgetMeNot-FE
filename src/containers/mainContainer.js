import React from 'react';
import NavBar from './navContainer';
import ListContainer from './listContainer';
import ItemContainer from './itemContainer';
import { LOGIN } from '../constants';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'claire',
            password : 'password1'
        }

    }

    componentDidMount = () => {
        console.log('LOGIN IS ',LOGIN)
        fetch(LOGIN,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => console.log('reply is ',data))
        debugger
    }

    render(){
        return(
            <div>
                <NavBar />
                <ListContainer />
                <ItemContainer />
            </div>
        )
    }
}

export default MainContainer
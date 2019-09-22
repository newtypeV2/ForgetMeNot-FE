import React from 'react';
import NavBar from './navContainer';
import Lists from '../components/lists';
import Items from '../components/items';
import { LOGIN } from '../constants';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'claire',
            password : 'password',
            list : [],
            selectedList : {}
        }

    }

    componentDidMount = () => {
        fetch(LOGIN,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => this.setState({
            list : data.lists
        }))
    }

    selectListHandler = (name) => {
        console.log(name,'was clicked.')
    }

    render(){
        return(
            <div>
                <NavBar />
                <Lists 
                    lists = {this.state.list}
                    clickHandler = {this.selectListHandler}

                />
                <Items itemLists = {this.state.selectedList}/>
            </div>
        )
    }
}

export default MainContainer
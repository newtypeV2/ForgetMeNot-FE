import React from 'react';
import NavBar from './navContainer';
import Lists from '../components/lists';
import Items from '../components/items';
import { LOGIN } from '../constants';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedList : {}
        }

    }

    selectListHandler = (name) => {
        console.log(name,'was clicked.')
    }

    render(){
        return(
            <div>
                <NavBar />
                <Lists 
                    lists = {this.props.user.lists}
                    clickHandler = {this.selectListHandler}

                />
                <Items itemLists = {this.state.selectedList}/>
            </div>
        )
    }
}

export default MainContainer
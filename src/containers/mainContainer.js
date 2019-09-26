import React from 'react';
import NavBar from './navContainer';
import Lists from '../components/lists';
import Items from '../components/items';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedList : {}
        }

    }

    selectListHandler = (list) => {
        console.log(list.name,'was clicked.');
        this.setState({
            selectedList : list
        })
    }

    render(){
        return(
            <div>
                <NavBar />
                <Lists 
                    lists = {this.props.user.lists}
                    clickHandler = {this.selectListHandler}

                />
                <Items items= {this.state.selectedList.items}/>
            </div>
        )
    }
}

export default MainContainer
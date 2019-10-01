import React, { Component } from 'react'

export class ItemContainer extends Component {

    renderItems = () => {
        // console.log(this.props.items)
        return this.props.items.map(item => <li key={item.name}>{item.name}</li>)
    }

    render() {
        return (
            this.props.items ? 
            <div id="itemcontainer">
                <h3>Items in List</h3>
                <ol>
                    {
                        this.renderItems()
                    }
                </ol>
            </div>
            :
            null
        )
    }
}

export default ItemContainer

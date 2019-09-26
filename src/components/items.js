import React, { Component } from 'react'

export class ItemContainer extends Component {

    renderItems = () => {
        // console.log(this.props.items)
        return this.props.items.map(item => <li key={item.name}>{item.name}</li>)
    }

    render() {
        return (
            <div id="itemcontainer">
                <h3>Items in List</h3>
                <ol>
                    {
                        this.props.items ? this.renderItems() : null
                    }
                </ol>
            </div>
        )
    }
}

export default ItemContainer

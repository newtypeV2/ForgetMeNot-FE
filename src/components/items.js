import React, { Component } from 'react'

export class ItemContainer extends Component {
    render() {
        return (
            <div id="itemcontainer">
                <h3>Items in List</h3>
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ol>
            </div>
        )
    }
}

export default ItemContainer

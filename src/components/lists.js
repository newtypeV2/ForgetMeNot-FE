import React from 'react'

const Lists = (props) => {

    
    const renderLists = () => {
        return props.lists.map(list => <li onClick={() => props.clickHandler(list)} key={list.id}>{list.name}</li>)
        // return [<li>{props.lists[0].name}</li>,<li>{props.lists[1].name}</li>]
    }

    return (
        <div id="listcontainer">

            <h3>Lists</h3>
            <ul>
                {
                    props.lists.length === 0 ?
                    null
                    :
                    renderLists()
                }
            </ul>
            <form>
                <input type = 'button'  value = 'Add List' onClick={() => console.log('Clicked')}/>
            </form>
        </div>
    )
}

export default Lists

import React from 'react';
function List(props){
    return(
    <ul>
        {
            props.item.map((items,index) => 
            <li key={index}>{items}</li>)
        }
       
    </ul>
    )     
}

export default List;
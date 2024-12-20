import React from 'react';

import {useCardStore} from "../../containers/CardContainer/store";

// import {BiTrash} from "react-icons/bi";

// interface item {
//     id: string,
//     title: string,
//     status: 'clear' | 'done' | 'canceled',
// }

const Item = ({item}) => {
    const {changeStatus, deleteItem} = useCardStore();

    return(
        <div className={`item ${item.status}`}>
            <div className="checkbox" onClick={() => {changeStatus(item.id)}}>
                <div className={`circle`}>
                    {item.status == 'done' ? '✓' : null}
                    {item.status == 'canceled' ? '✖' : null}
                </div>
            </div>
            <span>{item.title}</span>
            <div className={'delete'} onClick={() => deleteItem(item.id)}>
                {/* <BiTrash/> */} X
            </div>
        </div>
    )
};

export default Item;
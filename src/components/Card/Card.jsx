import React from 'react';

import './Card.scss';

import AddInput from "./AddInput";

import {useCardStore} from "../../containers/CardContainer/store";
import Item from "./Item";

const Card = () => {
    const {items} = useCardStore();

    return(
        <>
            <div className="container">
                <div className="flex w100 center">
                    <div className="desk">
                        <AddInput/>
                        {items.length ? items.map(el => (<Item key={el.id} item={el}/>)) : null}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;
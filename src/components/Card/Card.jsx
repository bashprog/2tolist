import React from 'react';

import './Card.scss';

import AddInput from "./AddInput";

import {useCardStore} from "../../containers/CardContainer/store";
import Item from "./Item";

import List from '@mui/material/List';

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

const Card = () => {
    const {items} = useCardStore();

    return(
        <>
            <div className="container">
                <div className="flex w100 center">
                    <div className="desk">
                        <AddInput/>
                        <List sx={style}>
                            {items.length ? items.map(el => (<Item key={el.id} item={el}/>)) : null}
                        </List>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;
import React from 'react';

import {useCardStore} from "../../containers/CardContainer/store";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

//Почтистил компонент.

const Item = ({item}) => {
    const {changeStatus, deleteItem} = useCardStore();

    return(
            <>
                <ListItem>
                    <div className='iconContainer' onClick={() => {changeStatus(item.id)}}>
                        {item.status == 'clear' ? <AddCircleIcon className='icon' sx={{color: 'black'}}/> : null}
                        {item.status == 'done' ? <CheckCircleIcon className='icon' sx={{fill: 'green'}}/> : null}
                        {item.status == 'canceled' ? <CancelIcon className='icon' sx={{color: 'red'}}/> : null}
                    </div>
                    <ListItemText primary={item.title}/>
                    <DeleteIcon onClick={() => deleteItem(item.id)} className='deleteIcon icon'/>
                </ListItem>
                <Divider/>
            </>

    )
};

export default Item;
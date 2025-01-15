import React from 'react';

import {useCardStore} from "../../containers/CardContainer/store";

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

import CircleIcon from '@mui/icons-material/Circle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';


// import {BiTrash} from "react-icons/bi";

// interface item {
//     id: string,
//     title: string,
//     status: 'clear' | 'done' | 'canceled',
// }

const Item = ({item}) => {
    const {changeStatus, deleteItem} = useCardStore();

    return(
        // <div className={`item ${item.status}`}>
        //     <div className="checkbox" onClick={() => {changeStatus(item.id)}}>
        //         <div className={`circle`}>
        //             {item.status == 'done' ? '✓' : null}
        //             {item.status == 'canceled' ? '✖' : null}
        //         </div>
        //     </div>
        //     <span>{item.title}</span>
        //     <div className={'delete'} onClick={() => deleteItem(item.id)}>
        //         {/* <BiTrash/> */} X
        //     </div>
        // </div>

        // <FormControl variant="outlined">
        //   <InputLabel htmlFor="outlined-adornment-password" disabled>{item.title}</InputLabel>
        //   <OutlinedInput
        //     id="outlined-adornment-password"
        //     endAdornment={
        //       <InputAdornment position="end">
        //         <IconButton>
        //           <AddIcon />
        //         </IconButton>
        //       </InputAdornment>
        //     }
        //     label="Password"
        //   />
        // </FormControl>

            <>
                <ListItem>
                    <div onClick={() => {changeStatus(item.id)}}>
                        {item.status == 'clear' ? <CircleIcon/> : null}
                        {item.status == 'done' ? <AddCircleIcon/> : null}
                        {item.status == 'canceled' ? <CancelIcon/> : null}
                    </div>
                    <ListItemText primary={item.title}/>
                    <DeleteIcon onClick={() => deleteItem(item.id)}/>
                </ListItem>
                <Divider/>
            </>

    )
};

export default Item;
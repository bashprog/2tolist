import React, {useEffect, useRef, useState} from "react";

import {useCardStore} from '../../containers/CardContainer/store';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const AddInput = () => {
    const [state, changeState] = useState(''); // Написал это для апдейта компонента

    const addItem = useCardStore(s => s.addItem);

    return (
        // <div className={'addInput'}>
        //     {/* <input type="text" value={state} onChange={(e) => changeState(e.target.value)} placeholder={'Введите желаемое нвзвание'} /> */}
            
            // <div className={`add ${state ? 'active' : ''}`} onClick={() => {
            //     if (state) {
            //         addItem(state);
            //         changeState('');
            //     }
            // }}>
        //         <span>&#10003;</span>
        //     </div>
        // </div>

        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Название</InputLabel>
            <OutlinedInput id="outlined-basic" value={state} label="Outlined" variant="outlined" onChange={(e) => changeState(e.target.value)} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={"Добавить"}
                  edge="end"
                >
                    <AddIcon onClick={() => {
                        if (state) {
                            addItem(state);
                            changeState('');
                        }
                    }}/>
                </IconButton>
              </InputAdornment>
            }/>
        </FormControl>
    )
};

export default AddInput
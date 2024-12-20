import React, {useEffect, useRef, useState} from "react";

import {useCardStore} from '../../containers/CardContainer/store';

const AddInput = () => {
    const [state, changeState] = useState(''); // Написал это для апдейта компонента

    const addItem = useCardStore(s => s.addItem);

    return (
        <div className={'addInput'}>
            <input type="text" value={state} onChange={(e) => changeState(e.target.value)} placeholder={'Введите желаемое нвзвание'} />
            <div className={`add ${state ? 'active' : ''}`} onClick={() => {
                if (state) {
                    addItem(state);
                    changeState('');
                }
            }}>
                <span>&#10003;</span>
            </div>
        </div>
    )
};

export default AddInput
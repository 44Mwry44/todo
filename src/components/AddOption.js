import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice'

const AddOptions = () => {

    const [state, setState] = useState();

    const dispatch = useDispatch();

    const onSummit = (event) => {
        event.preventDefault();
        dispatch(addTask({
            title: state,
        }));
        setState('');
    };

    return (
        <div>
            <form className="add-option">
                <input value={state} onChange={(event) => setState(event.target.value)} className="add-option__input" type="text" name="Option" />
                <button onClick={onSummit} type="submit" className="button">Add task</button>
            </form>
        </div>
    );
}

export default AddOptions;
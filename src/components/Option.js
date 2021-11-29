import React from 'react';
import { useDispatch } from 'react-redux';
import {updateTask} from '../redux/todoSlice'

const Option = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(updateTask({id: id, done: !completed}));
    };
    return(
        <div className= "option">
            <p className= "option__text">{title}</p>            
            <button className = "button button--link" onClick={handleClick}>
                {!completed ? 'Task done' : 'Undo' }
            </button>
        </div>
    );
}

export {Option as default};
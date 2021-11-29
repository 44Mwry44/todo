import React from 'react';
import Option from './Option'
import { useSelector, useDispatch } from 'react-redux';
import { updateShow } from '../redux/todoSlice';

const Opcions = () => {
    //Obtengo la lista de tareas
	const tasks = useSelector((state) => state.taskList.todos);
    //Que se mostrará
    const show = useSelector((state) => state.taskList.show)
    
    //Manejo de la lista a mostrar
    const dispatch = useDispatch();
    
    const handleShowAll = () => {
        dispatch(updateShow({action: 3}));
    };
    const handleShowCompleted = () => {
        dispatch(updateShow({action: 2}));
    };
    const handleShowUndone = () => {
        dispatch(updateShow({action: 1}));
    };

    
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your tasks</h3>
                <button onClick={handleShowCompleted} className="button button--link">Completed</button>
                <button onClick={handleShowUndone} className="button button--link">Undone</button>
                <button onClick={handleShowAll} className="button button--link">Show All</button>
            </div>
            { show == 1 ? (tasks.filter((task) => (task.done !== true)).map((task) =>( <Option id={task.id} title={task.title} completed={task.done} /> ))) : show == 3 ? (tasks.map((task) =>( <Option id={task.id} title={task.title} completed={task.done} /> ))) : (tasks.filter((task) => (task.done !== false)).map((task) =>( <Option id={task.id} title={task.title} completed={task.done} /> ))) }
        </div>
    );
}


export {Opcions as default};
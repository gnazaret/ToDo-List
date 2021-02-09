import React, { useState, useRef } from 'react';

export default function Form(props) {
	const [todo, setTodo] = useState('');
	const task = useRef(null);
	const [todoList, setTodoList] = useState([]);

	const handleChange = event => {
		event.preventDefault();
		setTodo(event.target.value);
	};

	const addTodo = () => {
		if (todo !== '') {
			const todoDetails = {
				value: todo,
				completed: false
			};
			setTodoList([...todoList, todoDetails]);
		}
	};

	const completedTodo = (event, value) => {
		event.preventDefault();
		const tarea = todoList.findIndex(tarea1 => tarea1.value == value); //find element by value
		const newTodoList = [...todoList]; //copying the array into a new variable
		newTodoList[tarea] = {
			...newTodoList[tarea],
			completed: true
		};

		setTodoList(newTodoList);
	};

	const deleteToDo = (event, value) => {
		event.preventDefault();
		setTodoList(todoList.filter(todo => todo.value != value));
	};
	return (
		<div className={'Page-wrapper'}>
			<lable className={'lable'}>
				To Do{' '}
				<input
					type="text"
					ref={task}
					onChange={event => handleChange(event)}
				></input>
				<button className={'button'} onClick={addTodo}>
					Add To Do
				</button>
			</lable>
			{todoList !== [] ? (
				<ul>
					{todoList.map(todo => (
						<li className={todo.completed ? 'crosstext' : 'list'}>
							{todo.value}
							<button
								className={'button-c'}
								onClick={event => completedTodo(event, todo.value)}
							>
								Completed
							</button>
							<button
								className={'button-r'}
								onClick={event => deleteToDo(event, todo.value)}
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

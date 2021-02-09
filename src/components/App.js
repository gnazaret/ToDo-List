import React, { useState } from 'react';
import Form from './Form';

export default function App(props) {
	const [name, updateName] = useState();
	return (
		<div className={'Page-wrapper'}>
			{' '}
			<h1>My To Do List</h1> <br />
			<div>
				<Form />
			</div>
		</div>
	);
}

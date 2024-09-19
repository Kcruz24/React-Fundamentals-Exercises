import PropTypes from 'prop-types';
import { useState } from 'react';

const AddItem = ({ items, setItems }) => {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addItem = (event) => {
		event.preventDefault();
		setItems([...items, value]);
		setValue('');
	};

	const inputIsEmpty = () => value === '';

	return (
		<>
			<form onSubmit={addItem}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={value}
					onChange={handleChange}
				/>
				<button disabled={inputIsEmpty()}>Add</button>
			</form>
		</>
	);
};

AddItem.propTypes = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

export default AddItem;

import PropTypes from 'prop-types';
import DeleteLastItem from './deleteLastItem';
import AddItem from './addItem';

const ItemForm = ({ items, setItems }) => {
	return (
		<>
			<AddItem items={items} setItems={setItems} />
			<DeleteLastItem items={items} setItems={setItems} />
		</>
	);
};

ItemForm.propTypes = {
	items: PropTypes.array.isRequired,
	setItems: PropTypes.func.isRequired,
};

export default ItemForm;

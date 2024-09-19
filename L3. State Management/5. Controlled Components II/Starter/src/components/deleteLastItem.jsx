import PropTypes from "prop-types";


const DeleteLastItem = ({items, setItems}) => {

    const deleteLastItem = (event) => {
		setItems(items.slice(0, -1));
    };

    const noItemsFound = () => items.length === 0;

    return (
		<>
			<button onClick={deleteLastItem} disabled={noItemsFound()}>
				Delete Last Item
			</button>
		</>
	);
 }

DeleteLastItem.propTypes = {
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired
 }

export default DeleteLastItem;
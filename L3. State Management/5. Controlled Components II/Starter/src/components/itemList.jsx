import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
	return (
		<>
			<p className="items">Items</p>
			<ol className="item-list">
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ol>
		</>
	);
};

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemList;

import './App.css';
import { useState } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import ItemForm from './components/itemForm';

const App = () => {
	const [items, setItems] = useState([]);

	return (
		<div className="App">
			<Header />

			<h2>Shopping List</h2>

			<ItemForm items={items} setItems={setItems} />
			<ItemList items={items} />
		</div>
	);
};

export default App;

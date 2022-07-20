import './EditInventoryItem.scss';
import inventories from '../../data/inventories.json'; 
import warehouses from '../../data/warehouses.json';
import { v4 as uuid } from 'uuid';

function EditInventoryItem() {
	//Selecting a random Item to Display TESTING ONLY
	const selectedItem = inventories[Math.floor(Math.random() * 69)];
	console.log("Selected Item");
	console.log(selectedItem);
	
	//Look thru json and find all unique categories and place in an array named uniqueCategories
	let uniqueCategories = [];
	inventories.forEach(inventory => {
		!uniqueCategories.includes(inventory.category) && uniqueCategories.push(inventory.category);
	});

	const selectedInStock = (selectedItem.status === "In Stock");
	
	return (
		<>
			<header>
				<h1>edit inventory item</h1>
			</header>
			<section>
				<h2>item details</h2>

				<h3>item name</h3>
				<input type="text" defaultValue={selectedItem.itemName}/>

				<h3>description</h3>
				<textarea id="" name="" defaultValue={selectedItem.description}></textarea>

				<h3>category</h3>
				<select id="inventoryCategory" name="inventoryCategory">
					<option value={selectedItem.category}>{selectedItem.category}</option>				
					{
						uniqueCategories.map( category => {
							if (category !== selectedItem.category) {
								return <option key={uuid()} value={category}>{category}</option>;
							}
							return null;
						})
					}

				</select>
			</section>
			<section>
				<h2>item availability</h2>
				<h3>status</h3>
					<input 
						type="radio" 
						id="inStock" 
						value="inStock" 
						name="stock" 
						defaultChecked={selectedInStock}
					/>
					<label htmlFor="inStock">In stock</label>

					<input 
						type="radio" 
						id="outOfStock" 
						value="outOfStock" 
						name="stock" 
						defaultChecked={!selectedInStock}
					/>
					<label htmlFor="outOfStock">Out of stock</label>
				<h3>warehouse</h3>
					<select id="warehouseList" name="warehouseList">
						<option value={selectedItem.warehouseName}>{selectedItem.warehouseName}</option>
						{
							warehouses.map( warehouse => {
								if (warehouse.name !== selectedItem.warehouseName) {
									return <option key={uuid()} value={warehouse.name}>{warehouse.name}</option>;
								}
								return null;
							})
						}

					</select>
			</section>
			<div>
				<button name="cancel" type="reset">cancel</button>
				<button name="save" type="submit">save</button>
			</div> 
		</>
	);
}

export default EditInventoryItem;

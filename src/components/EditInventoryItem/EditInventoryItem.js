import './EditInventoryItem.scss';
import inventories from './inventories.json'; 

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
		<div>
			<header>
				<h1>edit inventory item</h1>
			</header>
			<section>
				<h2>item details</h2>

				<label>item name</label>
				<input type="text" defaultValue={selectedItem.itemName}/>

				<label>description</label>
				<textarea id="" name="" defaultValue={selectedItem.description}></textarea>

				<select id="inventoryCategory" name="inventoryCategory">
					<option value={selectedItem.category}>{selectedItem.category}</option>				
					{
						uniqueCategories.map( category => {
							if (category !== selectedItem.category) {
								return <option value={category}>{category}</option>;
							}
						})
					}

				</select>
			</section>
			<section>
				<label>status</label>
				<fieldset>
					<label htmlFor="inStock">In stock</label>
						<input 
							type="radio" 
							id="inStock" 
							value="inStock" 
							name="stock" 
							defaultChecked={selectedInStock}
						/>
					<label htmlFor="outOfStock">Out of stock</label>
						<input 
							type="radio" 
							id="outOfStock" 
							value="outOfStock" 
							name="stock" 
							defaultChecked={!selectedInStock}
						/>
				</fieldset>
			</section>
			<div>
				<button name="cancel" type="reset">cancel</button>
				<button name="save" type="submit">save</button>
			</div> 
		</div>
	);
}

export default EditInventoryItem;

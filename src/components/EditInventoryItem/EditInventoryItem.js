import inventories from './inventories.json'; 

function EditInventoryItem() {
	console.log(inventories);
	
	return (
		<div>
			<header>
				<h1>edit inventory item</h1>
			</header>
			<section>
				<h2>item details</h2>
				<label>item name</label>
				<input type="text"/>
				<label>description</label>
				<textarea id="" name=""></textarea>
				<select id="inventoryCategory" name="inventoryCategory">
					<option value=""></option>
				</select>
			</section>
		</div>
	);
}

export default EditInventoryItem;

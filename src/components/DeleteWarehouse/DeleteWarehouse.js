import './DeleteWarehouse.scss';

function DeleteWarehouse () {
	return(
		<div className="delete-warehouse">
			<div className="delete-warehouse__card">
				<button className="delete-warehouse__x-button"></button>
				<h1>Delete VARIABLE warehouse</h1>
				<p>Please confirm that you'd like to delete the VARIABLE from the list of warehouses. You won't be able to undo this action.</p>
				<div className="delete-warehouse__buttons-containter">
					<button>cancel</button>
					<button>delete</button>
				</div>
			</div>
		</div>
	)
}

export default DeleteWarehouse;

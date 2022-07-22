import './DeleteWarehouse.scss';

const DeleteWarehouse = ({ hideDeleteWarehouse, handleDeleteWarehouse }) => {
	return(
		<div className="delete-warehouse">
			<div className="delete-warehouse__card">
				<button onClick={hideDeleteWarehouse} className="delete-warehouse__x-button"></button>
				<h1>Delete VARIABLE warehouse</h1>
				<p>Please confirm that you'd like to delete the VARIABLE from the list of warehouses. You won't be able to undo this action.</p>
				<div className="delete-warehouse__buttons-containter">
					<button onClick={hideDeleteWarehouse}>cancel</button>
					<button onClick={handleDeleteWarehouse}>delete</button>
				</div>
			</div>
		</div>
	)
}

export default DeleteWarehouse;

import './CostItem.css';
import CostDate from './CostDate';
import  Card from "../UI/Card";
// import React, { useState } from "react";

const CostItem = (props) => {

	// const [description, setDescription] = useState(props.description);
	// console.log("Text in component definition");


	// const changeDescriptionHandler = () => {
	// 	// description = 'New Cost';
	// 	setDescription('New Cost'); //description = 'New cost'; & CostItem(props);
	// 	console.log(description);
	// };
	return (
		<li>
			<Card className='cost-item'>
				<CostDate date={props.date} />
				<div className='cost-item__description'>
					<h2>{props.description}</h2>
					<div className='cost-item__price'>${props.amount}</div>
				</div>
				{/* <button onClick={changeDescriptionHandler}>Изменить Описание</button> */}
			</Card>
		</li>
	);
}
export default CostItem;
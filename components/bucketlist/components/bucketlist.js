import React, { Component } from 'react';

const bucketList = [
	{item: "Get married", status: "accomplished"},
	{item: "Have Children", status: "accomplished"},
	{item: "Buy a house", status: "accomplished"},
	{item: "Travel to Australia", status: "pending"},
	{item: "Ride an airplane", status: "pending"},
	{item: "Take the chunnel", status: "pending"},
	{item: "Celebrate New Year's in another timezone", status: "pending"},
	{item: "Go on a cruise", status: "pending"},
	{item: "Ship a AAA game", status: "pending"},
	{item: "Attend PAX West", status: "pending"},
	{item: "Give a talk at a major software conference", status: "pending"},
];

export class BucketList extends Component {

	render() {
		const items = bucketList.map((item) => (
				<li className={item.status}>
					{item.item}
				</li>

			));
		return (
		    <div className="bucketlist-container section-container container-fluid">
				<ul>
					Bucket List:
					{items}
				</ul>	
			</div>
		  )
	}
}

export default BucketList;
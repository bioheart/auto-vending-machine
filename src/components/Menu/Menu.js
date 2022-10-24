import React, { useEffect } from 'react';
import menus from '../../stock.json';
import { useState } from 'react';
import MenuBtn from '../MenuBtn/MenuBtn';

const Menu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [selectedItem, setSeletecItem] = useState({});
	console.log('menuItems', menuItems);
	const handleMenuItemClicked = (menuItem) => {
		setSeletecItem(menuItem);
	};

	const handleCancleClicked = () => {
		setSeletecItem({});
	};

	const handleBuyClicked = () => {
		console.log('buy item : ', selectedItem);
	};

	useEffect(() => {
		setMenuItems(menus.menus);
	}, [menuItems]);

	return (
		<div className='Container'>
			<div className="menu-header">DRINKS</div>
			<div className="menu-items">
				{menuItems?.map((menu, index) => {
					return (
						<div className="menu-items-list" key={index}>
							{console.log('value !!', menu.name)}
							<MenuBtn onClick={handleMenuItemClicked} menu={menu}></MenuBtn>
						</div>
					);
				})}
			</div>
			<div className="item-details">
					{selectedItem.name && (
						<div>
							<p>Name : {selectedItem.name}</p>
							<p>Price : {selectedItem.value}</p>
							<p>Remain : {selectedItem.remain}</p>
						</div>
					)}
				</div>
				<button className="buy-btn btn" onClick={handleBuyClicked}>
					Buy
				</button>
				<button className="cancel-btn btn" onClick={handleCancleClicked}>
					Cancel
				</button>
		</div>
	);
};

export default Menu;

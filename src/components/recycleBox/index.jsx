import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import ItemSelectionBox from './ItemSelection';
import LocationSelectionBox from './LocationSelectionBox';
import ShowCenters from './showCenters';

import PageType from './type';
import axios from 'axios';

function MainBox() {
	const [activeState, setactiveState] = useState(PageType.edit_selection);
	const [materialList, setmaterialList] = useState({
		Books: [
			{
				title: 'BooksMusic',
				selected: false,
			},
			{
				title: 'Books',
				selected: false,
			},
		],
		PaperWaste: [
			{
				title: 'Cartons',
				selected: false,
			},
			{
				title: 'Paper',
				selected: false,
			},
			{
				title: 'Cardboard',
				selected: false,
			},
		],
		Foil: [
			{
				title: 'CansFoil',
				selected: false,
			},
		],
		Plastic: [
			{
				title: 'CansPlasticBottles',
				selected: false,
			},
			{
				title: 'PlasticBottles',
				selected: false,
			},
		],
		Materials: [
			{
				title: 'Textiles',
				selected: false,
			},
			{
				title: 'Shoes',
				selected: false,
			},
		],
		Silicon: [
			{
				title: 'Glass',
				selected: false,
			},
		],
		ElectronicsAndElectrical: [
			{
				title: 'WEEE',
				selected: false,
			},
		],
		Others: [
			{
				title: 'CharityBanks',
				selected: false,
			},
		],
	});
	const [centersList, setcentersList] = useState([]);

	const fetchCenterList = async (cacheData) => {
		const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}api/secured/orders/create`, {
			recyclingBankId: cacheData.recyclingBankId,
			pickupDate: cacheData.pickupDate,
		});
		if (res.status === 200) {
			alert(res.data.message);
		}
	};

	//apply for item collection if selected item avialable
	useEffect(() => {
		const cacheData = localStorage.getItem('data');
		if (!cacheData) return;

		if (window.confirm('Some items are in cart. Do you want to request for collection.')) {
			// apply for collection
			fetchCenterList(JSON.aprse(cacheData));
		}
		localStorage.removeItem('data');
	}, []);

	const SearchNearCenters = async (lat, lon, apierror) => {
		let itemList = [];
		Object.entries(materialList).map((items) => items[1].map((item) => item.selected && itemList.push(item.title.toLowerCase())));

		const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}api/secured/recyclebank/recycling-banks`, {
			categories: itemList.join('|'),
			x: lat,
			y: lon,
		});
		if (res.status === 200) {
			setcentersList(res.data);
			setactiveState(PageType.result_page);
		} else {
			alert('Something went wrong');
			apierror();
		}
	};

	if (activeState === PageType.edit_selection) return <ItemSelectionBox dataList={materialList} setDataList={setmaterialList} loadLocationPage={() => setactiveState(PageType.edit_location)} />;
	if (activeState === PageType.edit_location) return <LocationSelectionBox loaditemSelectionPage={() => setactiveState(PageType.edit_selection)} search={SearchNearCenters} />;
	if (activeState === PageType.result_page) return <ShowCenters centerlist={centersList} />;

	return <Container></Container>;
}

export default MainBox;

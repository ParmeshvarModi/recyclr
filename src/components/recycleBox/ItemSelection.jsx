import { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import AutomotiveBox from './sublist/Automotive';
import FoilBox from './sublist/Foil';
import GlassBox from './sublist/GlassGlass';
import CardboardBox from './sublist/Cardboard';
import FoodWasteBox from './sublist/FoodWaste';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	mainContainer: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '100%',
	},

	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	tabPlane: {
		flex: 1,
		overflow: 'auto',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
}));

export default function ItemSelectionBox() {
	const itemList = ['Automotive', 'Foil', 'Glass', 'Cardboard', 'Food waste', 'Automotive', 'Foil', 'Glass', 'Cardboard', 'Food waste'];
	const [dataList, setDataList] = useState({
		Automotive: [
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
		],
		Foil: [
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
		],
		Glass: [
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
		],
		Cardboard: [
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
		],
		FoodWaste: [
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
			{
				title: 'data 1',
				selected: false,
			},
		],
	});
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const updateList = (key, value) => {
		setDataList((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<Container className={classes.root}>
			<Paper className={classes.mainContainer}>
				<Tabs orientation='vertical' variant='scrollable' value={value} onChange={handleChange} aria-label='Vertical tabs example' className={classes.tabs}>
					{itemList.map((e, index) => (
						<Tab label={e} {...a11yProps(index)} key={'options-list-' + index} classes={{ wrapper: classes.row }} />
					))}
				</Tabs>
				<TabPanel value={value} index={0} className={classes.tabPlane}>
					<AutomotiveBox list={dataList.Automotive} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.tabPlane}>
					<FoilBox list={dataList.Foil} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={2} className={classes.tabPlane}>
					<GlassBox list={dataList.Glass} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={3} className={classes.tabPlane}>
					<CardboardBox list={dataList.Cardboard} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={4} className={classes.tabPlane}>
					<FoodWasteBox list={dataList.FoodWaste} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={5} className={classes.tabPlane}>
					<AutomotiveBox list={dataList.Automotive} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={6} className={classes.tabPlane}>
					<FoilBox list={dataList.Foil} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={7} className={classes.tabPlane}>
					<GlassBox list={dataList.Glass} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={8} className={classes.tabPlane}>
					<CardboardBox list={dataList.Cardboard} updateList={updateList} />
				</TabPanel>
				<TabPanel value={value} index={9} className={classes.tabPlane}>
					<FoodWasteBox list={dataList.FoodWaste} updateList={updateList} />
				</TabPanel>
			</Paper>
		</Container>
	);
}

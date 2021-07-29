import { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import ItemSelectionListOptionsBox from './sublist/ItemSelectionListOptions';

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
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
	headerBtnContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px 15px',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#8bc63e',
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
	btn: {
		backgroundColor: '#517700',
		borderRadius: '4px',
		fontWeight: 600,
		'&:hover': {
			background: '#517700e1',
		},
	},
}));

export default function ItemSelectionBox({ dataList, setDataList, loadLocationPage }) {
	const itemList = ['Books', 'Paper waste', 'Foil', 'Plastic', 'Materials', 'Silicon', 'Electronics and Electrical', 'Others'];

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
			<div className={classes.root}>
				<Paper className={classes.headerBtnContainer}>
				<p style={{fontSize:'1rem',fontWeight:'600'}}>Recycling Locator</p>
					<Button variant='contained' size='medium' color='primary' className={classes.btn} onClick={loadLocationPage}>
						Continue
					</Button>
				</Paper>
				<Paper className={classes.mainContainer}>
					<Tabs orientation='vertical' variant='scrollable' value={value} onChange={handleChange} aria-label='Vertical tabs example' className={classes.tabs}>
						{itemList.map((e, index) => (
							<Tab label={e} {...a11yProps(index)} key={'options-list-' + index} classes={{ wrapper: classes.row }} />
						))}
					</Tabs>
					{Object.entries(dataList).map((e, index) => (
						<TabPanel value={value} index={index} className={classes.tabPlane} key={'list-item-' + index}>
							<ItemSelectionListOptionsBox list={e[1]} updateList={updateList} title={e[0]} />
						</TabPanel>
					))}
				</Paper>
			</div>
		</Container>
	);
}

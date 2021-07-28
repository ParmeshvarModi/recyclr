import { useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	mainContainer: {
		flexGrow: 1,
		// backgroundColor: theme.palette.background.paper,
		backgroundColor: 'whitesmoke',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
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
	title: {
		fontWeight: 600,
		fontSize: '0.97rem',
	},
	textfieldcontainer: {
		border: '1.7px solid #00000021',
		display: 'flex',
		alignItems: 'center',
		margin: '5px 0 10px',
		padding: 0,
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textfield: {
		width: '100%',
	},
	input: {
		paddingBottom: '2px',
	},
	button: {
		borderRadius: 0,
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: 'white',
			boxShadow: 'none',
		},
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

export default function ItemSelectionBox({ loaditemSelectionPage, search }) {
	const classes = useStyles();
	const [location, setlocation] = useState({ lat: '', lon: '' });
	const [apiStatus, setapiStatus] = useState(false);

	const handleInput = (e) => {
		setlocation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = () => {
		setapiStatus(true);
		search(location.lat, location.lon, () => {
			setapiStatus(false);
		});
	};

	const getUserLocation = () => {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setlocation({ lat: latitude, lon: longitude });
				},
				() => {}
			);
		} else {
			alert('This feature is not supported in your system');
		}
	};

	return (
		<Container className={classes.root}>
			<Paper className={classes.headerBtnContainer}>
				<Button variant='contained' size='medium' color='primary' className={classes.btn} onClick={loaditemSelectionPage}>
					<ArrowBackIosIcon />
				</Button>
			</Paper>
			<Paper className={classes.mainContainer}>
				<div>
					<Typography variant='button' display='block' className={classes.title}>
						Find places to recycle near...
					</Typography>
					<div>
						<Grid container spacing={1} alignItems='flex-end' className={classes.textfieldcontainer}>
							<Grid item xs={4} className={classes.center}>
								Latitude
							</Grid>
							<Grid item xs={8} className={classes.center}>
								<Input className={classes.textfield} placeholder='latitude' name='lat' value={location.lat} onChange={handleInput} type='number' classes={{ input: classes.input }} />
							</Grid>
						</Grid>
						<Grid container spacing={1} alignItems='flex-end' className={classes.textfieldcontainer}>
							<Grid item xs={4} className={classes.center}>
								Longitude
							</Grid>
							<Grid item xs={8} className={classes.center}>
								<Input className={classes.textfield} placeholder='longitude' name='lon' value={location.lon} onChange={handleInput} type='number' classes={{ input: classes.input }} />
							</Grid>
						</Grid>
						<Grid container spacing={1} alignItems='flex-end' className={classes.textfieldcontainer} style={{ background: '#e0e0e0' }}>
							<Button variant='contained' color='default' className={classes.button} startIcon={<LocationOnIcon />} fullWidth onClick={getUserLocation}>
								Use Current Location
							</Button>
						</Grid>
						<Grid container spacing={1} alignItems='flex-end' style={{ margin: '5px 1px 0 0' }}>
							<Button
								variant='contained'
								size='medium'
								color='primary'
								className={classes.btn}
								fullWidth
								style={{ borderRadius: 0 }}
								onClick={handleClick}
								disabled={apiStatus || location.lat === '' || location.lon === ''}
							>
								{apiStatus ? <CircularProgress /> : 'Search'}
							</Button>
						</Grid>
					</div>
				</div>
			</Paper>
		</Container>
	);
}

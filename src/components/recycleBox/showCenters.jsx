import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	mainContainer: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		padding: '10px',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
	headerBtnContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '10px 15px',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#8bc63e',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingRight: '15px',
	},
	subtitle2: {
		fontWeight: 600,
		fontSize: '0.78rem',
	},
	btn: {
		backgroundColor: '#517700',
		borderRadius: '4px',
		fontWeight: 600,
		'&:hover': {
			background: '#517700e1',
		},
	},
	btn2: {
		color: '#517700',
		borderRadius: '4px',
		fontWeight: 600,
		fontSize: '0.75rem',
		'&:hover': {
			color: '#517700e1',
		},
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width: '50%',
	},
}));

export default function ItemSelectionBox({ centerlist }) {
	const classes = useStyles();
	const history = useHistory();
	const [activeView, setactiveView] = useState('list');
	const [location, setLocation] = useState([0, 0]);

	// get pick up date from user
	const [showModal, setShowModal] = useState(false);
	const [activeSelectedCenterId, setactiveSelectedCenterId] = useState(null);
	const [selectedDate, setselectedDate] = useState(new Date().toISOString().split('T')[0]);

	useEffect(() => {
		centerlist[0] && setLocation([centerlist[0].y, centerlist[0].x]);
	}, []);

	const changeView = () => {
		setactiveView((prev) => (prev === 'list' ? 'map' : 'list'));
	};

	const handleDatePickup = (id) => {
		setactiveSelectedCenterId(id);
		setShowModal(true);
	};
	const handleBookCenter = async () => {
		setShowModal(false);

		if (!localStorage.getItem('token')) {
			// user not login, store data and redirect to login page
			localStorage.setItem('data', JSON.stringify({ id: activeSelectedCenterId, date: selectedDate.split('-').reverse().join('-') }));
			alert('Please login.');
			history.push('/login');
		} else {
			const userId = localStorage.getItem('user');
			const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}api/secured/orders/create`, {
				recyclingBankId: activeSelectedCenterId,
				pickupDate: selectedDate.split('-').reverse().join('-'),
				userId,
			});
			if (res.status === 200) {
				alert(res.data.message);
			}
		}
	};

	const handleDateInput = (e) => {
		setselectedDate(e.target.value);
	};

	return (
		<Container className={classes.root}>
			<div className={classes.root}>
				<Paper className={classes.headerBtnContainer}>
					<Button variant='contained' size='medium' color='primary' className={classes.btn} onClick={changeView}>
						{activeView === 'list' ? 'Map' : 'List'}
					</Button>
				</Paper>
				<Paper className={classes.mainContainer}>
					{activeView === 'list' ? (
						<Grid container spacing={3}>
							{centerlist &&
								centerlist
									.filter((e) => e.distance * 0.001 < 30)
									.map((e, index) => (
										<Grid item xs={12} sm={6} key={'center-list-item-' + index}>
											<Paper style={{ padding: '4px 8px' }}>
												<Typography variant='h6'>{e.site_name_}</Typography>
												<Typography variant='subtitle2'>{e.ward}</Typography>
												<Typography variant='subtitle2'>{e.address}</Typography>
												<div className={classes.flex}>
													<Typography variant='subtitle2' className={classes.subtitle2}>
														{parseFloat(e.distance * 0.001).toFixed(2)}KM
													</Typography>
													<Button size='small' color='primary' className={classes.btn2} onClick={() => handleDatePickup(e.objectid)}>
														Book
													</Button>
												</div>
											</Paper>
										</Grid>
									))}
						</Grid>
					) : (
						<MapContainer center={location} zoom={13} scrollWheelZoom={false} style={{ width: '100vw', height: '80vh' }}>
							<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
							{centerlist &&
								centerlist
									.filter((e) => e.distance * 0.001 < 30)
									.map((e, index) => (
										<Marker position={[e.y, e.x]} key={'map-marker-' + index}>
											<Popup>{e.site_name_}</Popup>
										</Marker>
									))}
						</MapContainer>
					)}
				</Paper>
			</div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={showModal}
				onClose={() => setShowModal(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<div className={classes.paper}>
					<div style={{ display: 'flex' }}>
						<p>Please selecte pick-up date:</p>
						<TextField
							id='date'
							type='date'
							defaultValue={selectedDate}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleDateInput}
							style={{ marginLeft: '15px', justifyContent: 'center' }}
						/>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button variant='contained' size='medium' color='primary' className={classes.btn} onClick={handleBookCenter}>
							Confirm
						</Button>
					</div>
				</div>
			</Modal>
		</Container>
	);
}

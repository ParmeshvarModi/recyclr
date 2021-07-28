import { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
		justifyContent: 'flex-start',
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

export default function ItemSelectionBox() {
	const classes = useStyles();
	const [centerlist, setcenterlist] = useState([]);

	useEffect(() => {
		async function fetchList() {
			const res = await axios.get(`${process.env.REACT_APP_API_BASEURL}api/secured/orders/all`);
			if (res.status === 200) {
				setcenterlist(res.data);
			}
		}
		fetchList();
	}, []);

	const handleClick = async (id, index) => {
		const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}api/secured/orders/cancel/${id}`);
		if (res.status === 200) {
			alert(res.data?.message);
			let tempList = centerlist;
			tempList[index].status = 'Order Cancelled';
			setcenterlist(tempList);
		} else {
			alert('Something went wrong');
		}
	};

	return (
		<Container className={classes.root}>
			<div className={classes.root}>
				<Paper className={classes.headerBtnContainer}>Orders</Paper>
				<Paper className={classes.mainContainer}>
					<Grid container spacing={3}>
						{centerlist &&
							centerlist
								.filter((e) => e.status !== 'Order Cancelled')
								.map((e, index) => (
									<Grid item xs={12} sm={6} key={'center-list-item-' + index}>
										<Paper style={{ padding: '4px 8px' }}>
											<Typography variant='h6'>{e.title}</Typography>
											<div className={classes.flex}>
												<Button size='small' color='primary' className={classes.btn2} onClick={() => handleClick(e.id, index)}>
													remove
												</Button>
											</div>
										</Paper>
									</Grid>
								))}
					</Grid>
				</Paper>
			</div>
		</Container>
	);
}

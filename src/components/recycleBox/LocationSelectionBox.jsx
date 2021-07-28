import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	mainContainer: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		backgroundColor: 'whitesmoke',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
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
	button: {
		borderRadius: 0,
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: 'white',
			boxShadow: 'none',
		},
	},
}));

export default function ItemSelectionBox() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Paper className={classes.mainContainer}>
				<div>
					<Typography variant='button' display='block' className={classes.title}>
						Find places to recycle near...
					</Typography>
					<div>
						<Grid container spacing={1} alignItems='flex-end' className={classes.textfieldcontainer}>
							<Grid item xs={2} className={classes.center}>
								<LocationOnIcon />
							</Grid>
							<Grid item xs={10} className={classes.center}>
								<Input id='input-with-icon-grid' className={classes.textfield} placeholder='Postcode' />
							</Grid>
						</Grid>
						<Grid container spacing={1} alignItems='flex-end' className={classes.textfieldcontainer} style={{ background: '#e0e0e0' }}>
							<Button variant='contained' color='default' className={classes.button} startIcon={<LocationOnIcon />} fullWidth>
								Upload
							</Button>
						</Grid>
						<Grid container spacing={1} alignItems='flex-end' style={{ margin: '5px 1px 0 0' }}>
							<Button variant='contained' size='medium' color='primary' fullWidth style={{ borderRadius: 0 }}>
								Search
							</Button>
						</Grid>
					</div>
				</div>
			</Paper>
		</Container>
	);
}

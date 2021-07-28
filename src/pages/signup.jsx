import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	rootcontainer: {
		borderRadius: '8px',
		background: theme.palette.background.paper,
	},
	header: {
		padding: '18px 0',
		background: '#4caf50',
		borderRadius: '8px 8px 0 0',
		color: 'white',
		fontSize: '18px',
		fontWeight: 600,
	},
	body: {
		paddingTop: '35px',
		paddingBottom: '35px',
	},
	btn: {
		background: '#4caf50',
		borderRadius: '4px',
		'&:hover': {
			background: 'green',
		},
	},
	textMuted: {
		color: 'gray',
		margin: 0,
		fontWeight: 600,
	},
	textLink: {
		color: '#4caf50',
		margin: 0,
	},
}));

export default function Singup() {
	const classes = useStyle();

	return (
		<Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '100vh' }}>
			<Grid xs={12} sm={6}>
				<Paper className={classes.rootcontainer}>
					<div>
						<Grid container direction='row' justifyContent='center' alignItems='center' className={classes.header}>
							Sign Up
						</Grid>
					</div>
					<Grid container direction='row' justifyContent='center' alignItems='center' className={classes.body} spacing={2}>
						<Grid item xs={8}>
							<TextField fullWidth label='Name' name='username' variant='outlined' />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='Email' variant='outlined' name='email' type='email' />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='Contact no.' variant='outlined' type='number' />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='Zip' variant='outlined' type='number' />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='Address' variant='outlined' type='textarea' name='address' />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='password' variant='outlined' name='password' type='password' />
						</Grid>
						<Grid item xs={8}>
							<Button variant='contained' size='medium' color='primary' fullWidth className={classes.btn}>
								Signup
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='column' justifyContent='center' alignItems='center' className={classes.body} spacing={2}>
						<Typography variant='caption' display='block' gutterBottom className={classes.textMuted}>
							Already have an account?
						</Typography>
						<Link to={'/login'} style={{ textDecoration: 'none' }}>
							<Typography variant='subtitle1' gutterBottom className={classes.textLink}>
								SIGN IN NOW
							</Typography>
						</Link>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}

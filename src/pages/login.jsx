import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

export default function Login({ updateLoginState }) {
	const classes = useStyle();
	const history = useHistory();
	const [state, setstate] = useState({ email: '', password: '' });

	const handleChange = (e) => {
		setstate((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleLogin = async () => {
		const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}auth/login`, state);
		if (res.status === 200 && res.data.access_token) {
			alert(res.data.message);
			localStorage.setItem('token', `Bearer ${res.data.access_token}`);
			localStorage.setItem('user', `Bearer ${res.data.data.id}`);
			updateLoginState(true);
			history.push('/');
		} else {
			if (res.data?.message) alert(res.data.message);
			else alert('Something went wrong.');
		}
	};

	return (
		<Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '100vh' }}>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.rootcontainer}>
					<div>
						<Grid container direction='row' justifyContent='center' alignItems='center' className={classes.header}>
							Sign In
						</Grid>
					</div>
					<Grid container direction='row' justifyContent='center' alignItems='center' className={classes.body} spacing={2}>
						<Grid item xs={8}>
							<TextField fullWidth label='Email' variant='outlined' name='email' onChange={handleChange} value={state.email} />
						</Grid>
						<Grid item xs={8}>
							<TextField fullWidth label='password' variant='outlined' type='password' name='password' onChange={handleChange} value={state.password} />
						</Grid>
						<Grid item xs={8}>
							<Button variant='contained' size='medium' color='primary' fullWidth className={classes.btn} onClick={handleLogin}>
								Login
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='column' justifyContent='center' alignItems='center' className={classes.body} spacing={2}>
						<Typography variant='caption' display='block' gutterBottom className={classes.textMuted}>
							Don't have an account?
						</Typography>
						<Link to={'/signup'} style={{ textDecoration: 'none' }}>
							<Typography variant='subtitle1' gutterBottom className={classes.textLink}>
								SIGN UP NOW
							</Typography>
						</Link>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}

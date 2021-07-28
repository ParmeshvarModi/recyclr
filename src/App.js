import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from './assets/images/recyclrLogo.PNG';

import './App.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	logo: {
		height: '2.5rem',
		width: '7rem',
	},
	p: {
		color: 'white',
		textDecoration: 'none',
	},
}));

function App() {
	const classes = useStyles();
	const [isLogin, setisLogin] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) setisLogin(true);
	}, []);

	const handleLogout = () => {
		setisLogin(false);
		localStorage.clear();
	};

	return (
		<Router>
			<AppBar position='static' style={{ background: '#8bc63e', marginBottom: '1rem' }}>
				<Toolbar>
					<div style={{ flexGrow: 1 }}>
						<img src={logo} alt='Logo' className={classes.logo} />
					</div>
					{isLogin ? (
						<div>
							<Link to='/orders' className={classes.p}>
								Orders
							</Link>
							<Button style={{ color: 'white' }} onClick={handleLogout}>
								Logout
							</Button>
						</div>
					) : (
						<>
							<Link to='/login' className={classes.p}>
								login
							</Link>
						</>
					)}
				</Toolbar>
			</AppBar>
			<Routes updateLoginState={setisLogin} />
		</Router>
	);
}

export default App;

import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
const Signup = lazy(() => import('pages/signup'));

const SuspenseFallbackComponent = () => {
	return (
		<div className='col-md-9 col-sm-9 col-lg-9'>
			<div className='center py-2' style={{ width: '100%' }}>
				<div className='loader'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

const Routes = () => {
	return (
		<Suspense fallback={<SuspenseFallbackComponent />}>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/' exact component={Home} />
				<Route path='*' component={Home} />
			</Switch>
		</Suspense>
	);
};

export default Routes;

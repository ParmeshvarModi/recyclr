import { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
const Signup = lazy(() => import('pages/signup'));
const Orders = lazy(() => import('pages/Orders'));
const AboutUs = lazy(() => import('pages/AboutUs'));
const Faq = lazy(() => import('pages/Faq'));

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

const Routes = ({ updateLoginState, isLogin }) => {
	return (
		<Suspense fallback={<SuspenseFallbackComponent />}>
			<Switch>
				{isLogin ? null : <Route path='/login' component={() => <Login updateLoginState={updateLoginState} />} />}
				{isLogin ? null : <Route path='/signup' component={() => <Signup updateLoginState={updateLoginState} />} />}
				<Route path='/orders' component={Orders} />
				<Route path='/aboutus' component={AboutUs} />
				<Route path='/faq' component={Faq} />
				<Route path='/' exact component={Home} />
				<Redirect to='/' component={Home} />
			</Switch>
		</Suspense>
	);
};

export default Routes;

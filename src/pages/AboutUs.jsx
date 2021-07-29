import Typography from '@material-ui/core/Typography';

const AboutUs = () => {
	return (
		<div style={{ padding: '1rem 2rem' }}>
			<Typography variant='h4' gutterBottom>
				About us
			</Typography>
			<Typography variant='subtitle1' gutterBottom>
				Recyclr is the United Kingdom's national recycling effort. We're here to assist folks in recycling more items, more frequently. You can recycle from a list of numerous categories,
				which includes:
			</Typography>
			<ul>
				<li>Books Music</li>
				<li> Books</li>
				<li>Cartons</li>
				<li> Paper</li>
				<li> Cardboard</li>
				<li> Cans Foil</li>
				<li> Cans Plastic Bottles</li>
				<li> Plastic Bottles</li>
				<li> Textiles</li>
				<li> Shoes</li>
				<li> Glass</li>
				<li> WEEE</li>
				<li> Charity Banks</li>
			</ul>
			<Typography variant='subtitle1' gutterBottom>
				Users can login to the website and search for pick up centres around them. They can then raise a pick-up request for the waste to be collected on a desired date.
			</Typography>
		</div>
	);
};

export default AboutUs;

import Typography from '@material-ui/core/Typography';

const Faq = () => {
	return (
		<div style={{ padding: '1rem 2rem' }}>
			<Typography variant='h4' gutterBottom>
				CAN WE HELP?
			</Typography>
			<Typography variant='subtitle1' gutterBottom>
				Please read the answers to commonly asked questions below to see if these will answer your query.
			</Typography>
			<ul>
				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: My recycling has not been collected, what do I do?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						You need to drop a mail at
						<a href='mailto:support@recyclr.com' target='_blank' rel='noreferrer' style={{ margin: 'auto 4px' }}>
							support@recyclr.com
						</a>
						with the pickup and user details along with date of pick up.
					</Typography>
				</li>
				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: My local recycling bank has been moved, what do I do?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						You will need to raise this with our support team
						<a href='mailto:support@recyclr.com' target='_blank' rel='noreferrer' style={{ margin: 'auto 4px' }}>
							support@recyclr.com.
						</a>
						They will reach out to you in order to update the details in our database
					</Typography>
				</li>

				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: The recycling banks listed on the Recycling Locator in my area are wrong, can they be corrected?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						You will need to raise this with our support team
						<a href='mailto:support@recyclr.com' target='_blank' rel='noreferrer' style={{ margin: 'auto 4px' }}>
							support@recyclr.com.
						</a>
						They will look into the matter and also reach you if needed
					</Typography>
				</li>
				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: How do I find out what and where I can recycle near me?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						You can find out what you can recycle at home and where your nearest recycling centres are by simply entering your latitude and longitude or click on detect my location button
						into this handy locator tool.
					</Typography>
				</li>
				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: I want to recycle an old piece of furniture that is still in good condition. How do I do this?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						There are a number of organisations you can contact to pass on your wanted furniture. They include: • The Furniture Reuse Network (FRN), who holds details of a network of
						organisations who reuse furniture.
						<ul>
							<li>
								• If you live in Scotland you can also find a local re-use organisation through CRNS, by telephoning the National re-use phone line on 0800 0665 820, or donate it to a
								Revolve accredited store.
							</li>
							<li>
								• If you live in Northern Ireland, try re:store, a chain of outlets run by the East Belfast Mission. They accept a wide range of donated items. You could also advertise
								the item on some of the free recycling websites, within your local free newspapers or local supermarket noticeboards. For more ideas, read our full guide on what to do
								with furniture.
							</li>
						</ul>
					</Typography>
				</li>
				<li style={{ marginBottom: '10px' }}>
					<Typography variant='subtitle1' gutterBottom style={{ fontWeight: 600 }}>
						Q: Can you link to my organisation from your website?
					</Typography>
					<Typography variant='subtitle2' gutterBottom>
						<span style={{ fontWeight: 600, marginRight: '4px' }}>A:</span>
						Due to the number of requests we receive to link to other websites and organisations, we are unable to respond to unsolicited link requests.
					</Typography>
				</li>
			</ul>
			<Typography variant='subtitle1' gutterBottom>
				If you're running a recycling or re-use event and would like us to share the details to our team at
				<a href='mailto:support@recyclr.com' target='_blank' rel='noreferrer' style={{ margin: 'auto 4px' }}>
					support@recyclr.com.
				</a>
				we will do the needful to help.
			</Typography>
		</div>
	);
};

export default Faq;

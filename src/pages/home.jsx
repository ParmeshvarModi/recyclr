import Grid from '@material-ui/core/Grid';

import RecycleBox from 'components/recycleBox';

export default function Home() {
	return (
		<Grid container style={{ padding: '4px' }}>
			<Grid item xs={12} style={{ height: '30rem' }}>
				<RecycleBox />
			</Grid>
		</Grid>
	);
}

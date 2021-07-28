import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	li: {
		border: '0.5px solid #0000001a',
		marginBottom: '4px',
	},
}));

export default function CheckboxList({ list, updateList }) {
	const classes = useStyles();

	const handleToggle = (index, value) => () => {
		value.selected = !value.selected;
		let newlist = list;
		newlist[index] = value;
		updateList('Glass', newlist);
	};

	return (
		<List className={classes.root}>
			{list.map((value, index) => {
				const labelId = `checkbox-list-label-glass-${index}`;

				return (
					<ListItem key={'glass-' + index} role={undefined} dense button onClick={handleToggle(index, value)} className={classes.li}>
						<ListItemIcon>
							<Checkbox edge='start' checked={value.selected} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
						</ListItemIcon>
						<ListItemText id={labelId} primary={value.title} />
					</ListItem>
				);
			})}
		</List>
	);
}

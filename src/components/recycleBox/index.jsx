import { useState } from 'react';
import Container from '@material-ui/core/Container';

import ItemSelectionBox from './ItemSelection';
import LocationSelectionBox from './LocationSelectionBox';

import PageType from './type';

function MainBox() {
	const [activeState, setactiveState] = useState(PageType.edit_selection);

	if (activeState === PageType.edit_selection) return <ItemSelectionBox />;
	if (activeState === PageType.edit_location) return <LocationSelectionBox />;

	return <Container></Container>;
}

export default MainBox;

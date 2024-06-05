import Container from '../UI/Container';
import Card from '../modules/Card';

import sunset from '../../../public/img/sunset.png';
import trees from '../../../public/img/trees.png';

const Cards = () => {
	return (
		<Container cols='2'>
			<Card
				heading='Pink & Purple Sunset'
				description='Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
				ligula porta felis euismod semper.'
				img={sunset}
				linkText='Go to the sunset'
				linkUrl='#'
			/>
			<Card
				heading='Pink & Purple Sunset'
				description='Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
				ligula porta felis euismod semper.'
				img={trees}
				linkText='View some more'
				linkUrl='#'
			/>
		</Container>
	);
};

export default Cards;

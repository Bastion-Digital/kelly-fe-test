import Container from '../UI/Container';
import landscape1 from '../../../public/img/landscape1.png';
import landscape2 from '../../../public/img/landscape2.png';
import landscape3 from '../../../public/img/landscape3.png';
import landscape4 from '../../../public/img/landscape4.png';
import sunset from '../../../public/img/sunset.png';

const images = [
	{
		id: 1,
		img: landscape1,
		description: 'A sunset shining over a lake and mountainscape',
	},
	{
		id: 2,
		img: landscape2,
		description: 'Photograph of a rocky lake with a mountain behind',
	},
	{
		id: 3,
		img: landscape3,
		description: 'Landscape description 3',
	},
	{
		id: 4,
		img: landscape4,
		description: 'Landscape description 4',
	},
	{
		id: 4,
		img: sunset,
		description: 'Landscape description 5',
	},
];

const Carousel = () => {
	return (
		<Container>
			<div className='carousel'>
				<div className='carousel__wrapper'>
					{images.map((image) => (
						<div
							className='carousel__item'
							key={image.id}
						>
							<img
								src={image.img}
								alt={image.description}
								className='carousel__item-img'
							/>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Carousel;

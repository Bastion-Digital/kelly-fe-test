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
	},
	{
		id: 2,
		img: landscape2,
	},
	{
		id: 3,
		img: landscape3,
	},
	{
		id: 4,
		img: landscape4,
	},
	{
		id: 4,
		img: sunset,
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
								alt=''
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

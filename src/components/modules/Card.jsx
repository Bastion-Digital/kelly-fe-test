const Card = ({ heading, description, img, linkText, linkUrl }) => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img
					src={img}
					alt='Mountain landscape with a pink & purple sunset'
					className='card__image-img'
				/>
			</div>
			<h3>{heading}</h3>
			<p className='card__description'>{description}</p>
			<a
				href={linkUrl}
				className='button button--link'
			>
				{linkText}
			</a>
		</div>
	);
};

export default Card;

import styles from './Photos.module.scss';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { useState } from 'react';

export const Photos = ({ product }) => {
	const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

	return (
		<FlexContainer>
			<div className={styles.thumbnails}>
				{product.photos.map(photo => {
					return (
						<img
							className={currentPhoto === photo ? styles.active : ''}
							key={photo}
							src={photo}
							onClick={() => {
								setCurrentPhoto(photo);
							}}
						/>
					);
				})}
			</div>
			<img
				className={styles.mainPhoto}
				src={currentPhoto}
				alt=''
			/>
		</FlexContainer>
	);
};

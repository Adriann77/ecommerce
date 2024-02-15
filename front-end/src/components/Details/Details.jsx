import styles from './Details.module.scss';
import CAR_ICON from '../../assets/car.svg';
import RETURN_ICON from '../../assets/return.svg';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Accordion } from '../Accordion/Accordion';

export const Details = ({ product }) => {
	const accordionConten = [
		{
			title: 'Opis Produktu',
			content: product.description,
		},
		{
			title: 'Wskazówki pielęgnacyjne',
			content: product.maintenanceInfo,
		},
	];

	console.log(product);

	return (
		<div className={styles.details}>
			<h2>{product.brand}</h2>
			<p className={styles.productName}>{product.productName}</p>
			<p className={styles.price}>{product.pricePLN}zł</p>
			<FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>

			<ul className={styles.extraInfo}>
				<li
					style={{
						display: 'flex',
					}}>
					<img
						src={CAR_ICON}
						alt='car_icon'
					/>
					Dostawa do 24h
				</li>
				<li
					style={{
						display: 'flex',
					}}>
					<img
						src={RETURN_ICON}
						alt='return_icon'
					/>
					Zwrot do 100 dni
				</li>
				<Accordion items={accordionConten}></Accordion>
			</ul>
		</div>
	);
};

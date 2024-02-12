import styles from './CartSummary.module.scss';

import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import CAR_ICON from '../../assets/car.svg';

export const CartSummary = ({ products }) => {
	const deliveryCost = 49;
	const minSumForFreeDelivery = 500;

	let sum = 0;
	products.forEach(product => {
		sum += product.pricePLN;
    });
    


	const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produtków:</p>
				<p>{sum}zł</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy:</p>
				<p>{totalCost > 500 ? 'Bezpłatna' : deliveryCost}</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Do zapłaty:</p>
				<p>{totalCost}zł</p>
			</div>
			<FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
			<div className={styles.deliveryInfo}>
				<img
					src={CAR_ICON}
					alt='car_icon'
				/>
				<p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
			</div>
		</div>
	);
};

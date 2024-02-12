import styles from './FavouriteList.module.scss';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';

export function FavouritesList({ products }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map(product => {
						return (
							<FavouriteProduct
								key={product.id}
								product={product}></FavouriteProduct>
						);
					})}
				</div>
			</div>
		</CenteredContent>
	);
}

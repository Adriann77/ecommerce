import styles from "./Pagination.module.scss"
import { NavLink } from 'react-router-dom';

export const Pagination = ({ numberOfPages }) => {
	const pages = Array(numberOfPages).fill(null);
	return (
		<ul className={styles.pagination}>
			{pages.map((page, index) => {
				return (
					<li key={index}>
						<NavLink>{index + 1}</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

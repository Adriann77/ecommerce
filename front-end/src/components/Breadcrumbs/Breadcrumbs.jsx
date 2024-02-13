import styles from "./Breadcrumbs.module.scss"
import { NavLink } from 'react-router-dom';
import ARROW_ICON from '../../assets/arrow.svg';

export const Breadcrumbs = () => {
	const breadcrumbs = [
		{
			categoryName: 'Kobieta',
			path: 'kobieta',
		},
		{
			categoryName: 'Odzież',
			path: 'odziez',
		},
		{
			categoryName: 'Swetry',
			path: 'swetry',
		},
	];

	return (
		<ul className={styles.breadcrumbs}>
			{breadcrumbs.map(breadcrumb => {
				return (
					<li key={breadcrumb.path}>
						<NavLink to={breadcrumb.path}>
							{breadcrumb.categoryName}{' '}
							<img
								src={ARROW_ICON}
								alt='arrow-icon'
							/>
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

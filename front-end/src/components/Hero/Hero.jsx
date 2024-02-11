import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import styles from './Hero.module.scss';

export function Hero({ heroImage }) {
	return (
		<div
			className={styles.hero}
			style={{ backgroundImage: `url(${heroImage})` }}>
			<CenteredContent>
				<div className={styles.contentWrapper}>
					<h2>Letnie promocje do -70%!</h2>
					<p>Tylko najlepsze okazje!</p>
					<FullWidthButton>SPRAWDŹ PRODUKTY</FullWidthButton>
				</div>
			</CenteredContent>
		</div>
	);
}

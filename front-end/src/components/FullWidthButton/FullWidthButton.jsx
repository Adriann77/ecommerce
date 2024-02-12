import styles from './FullWidthButton.module.scss';

export function FullWidthButton({ children, onClick, isBlack }) {
	return (
		<button
			className={`${styles.button} ${isBlack ? styles.black : ''}`}
			onClick={onClick}>
			{children}
		</button>
	);
}

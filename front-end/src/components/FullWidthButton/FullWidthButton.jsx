import styles from './FullWidthButton.module.scss';

export function FullWidthButton({ children, onClick }) {
	return <button className={styles.button} onClick={onClick}>{children}</button>;
}

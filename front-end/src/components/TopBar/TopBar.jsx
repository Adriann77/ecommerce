import styles from './TopBar.module.scss';

export function TopBar({ children }) {
	return <div className={styles.topBar}>{children}</div>;
}

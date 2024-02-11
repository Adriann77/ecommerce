import styles from './MainContent.module.scss';

export function MainContent({ children }) {
	return <div className={styles.mainContent}>{children}</div>;
}

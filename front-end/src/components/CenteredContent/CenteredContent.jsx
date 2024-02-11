import styles from './CenteredContent.module.scss';

export function CenteredContent({ children }) {
	return <div className={styles.centeredContent}>{children}</div>;
}

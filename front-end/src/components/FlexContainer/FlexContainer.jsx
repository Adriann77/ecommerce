import styles from "./FlexContainer.module.scss"

export function FlexContainer({ children }) {
    return <div className={styles.flexContainer}>{ children}</div>
}
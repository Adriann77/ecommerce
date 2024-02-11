import { CURRENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.scss"

export function CurrencySelector() {
    return <select className={styles.currencySelecotor}>
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN }</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD }</option>
    </select>
}
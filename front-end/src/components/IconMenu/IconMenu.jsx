import { Link } from "react-router-dom"
import BAG_ICON from "../../assets/bag.svg"
import HEART from "../../assets/heart.svg"
import styles from "./IconMenu.module.scss"

export function IconMenu() {
    const cartItems = 2;
    return (
			<ul className={styles.iconMenu}>
				<li>
                <Link to='/ulubione'>
                    <img src={HEART} alt="heart icon"></img>
                    </Link>
				</li>
				<li>
                <Link to='/koszyk'>
                    <img src={BAG_ICON} alt="bag icon" />
                    <div className={styles.numberOfProducts}>{cartItems }</div>
                    </Link>
				</li>
			</ul>
		);
}
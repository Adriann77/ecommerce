import styles from './Accordion.module.scss'
import ARROW_ICON from '../../assets/arrow.svg';
import { useState } from 'react';

export const Accordion = ({ items }) => {


    const [activeItemIndex, setActiveItem] = useState(0)

	return (
		<ul>
			{items.map((item, index) => {
				return (
                    <li key={item.title}
                        onClick={() => {
                            setActiveItem(index)
                        }}    
                    >
						<div className={styles.item}>
							<p>{item.title}</p>
                            <img
                                className={activeItemIndex === index ? styles.expanded : ''}
								src={ARROW_ICON}
								alt='arrow_icon'
							/>
						</div>
						{activeItemIndex === index && <p>{item.content}</p>}
					</li>
				);
			})}
		</ul>
	);
};

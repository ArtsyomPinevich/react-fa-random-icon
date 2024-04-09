import style from './iconChanger.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useMemo, useState} from 'react';

const IconChanger = () => {
    const [currentIcon, setCurrentIcon] = useState<string>('faCoffee');
    const [clicksCount, setClicksCount] = useState<number>(0);

    const fontAwesomeIcons = useMemo(() => Object.keys(fas), []);
    const handleIconChange = () => {
        setClicksCount(clicksCount + 1);
    };

    useEffect(() => {
        if (clicksCount > 0) {
            const timer = setTimeout(() => {
                setCurrentIcon(fontAwesomeIcons[Math.floor(Math.random() * fontAwesomeIcons.length)]);
                setClicksCount((prevCount) => prevCount - 1);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [clicksCount, fontAwesomeIcons]);

    return (
        <div className={style.container}>
            <h2 className={style.title}>Random icon Picker</h2>
            <FontAwesomeIcon icon={fas[currentIcon]} className={style.icon} />
            <button onClick={handleIconChange} className={style.button}>
                Change Icon
            </button>
        </div>
    );
};

export default IconChanger;

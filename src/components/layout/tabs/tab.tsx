import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { ITab, PageId } from "../../../interfaces";
import styles from './tab.module.css';

const Tab = ({id, active, onClick, text}: ITab & {onClick: Dispatch<SetStateAction<PageId>>}) => {
    const handleClick = () => {
        onClick(id);
    }

    return <button className={clsx(styles.tab, active && styles.active)} onClick={handleClick}>{text}</button>
};

export default Tab;
import { IPage } from '../../../interfaces';
import BookmarkPage from './bookmark';
import MainPage from './main';
import styles from './page.module.css';

const Page = ({active}: IPage) => {
    return (
        <div className={styles.page}>
            {active === 'main' && (
                <MainPage/>
            )}
            {active === 'bookmark' && (
                <BookmarkPage/>
            )}
        </div>
    )
};

export default Page;
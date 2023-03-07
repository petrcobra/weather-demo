import { useDispatch } from "react-redux";
import { setBookmark } from "../../../features/bookmark/bookmarkSlice";
import { ILocation } from "../../../interfaces";
import styles from './location.module.css';

interface ILocationInfo {
    location: ILocation,
    isHome?: boolean,
}

const LocationInfo = ({location, isHome = false}: ILocationInfo) => {
    const dispatch = useDispatch();

    const setHome = () => {
        dispatch(setBookmark(location));
    };

    return (
        <div>
            <div className={styles.location}>Weather information for: {location.name}, {location.countryCode}</div>
            {!isHome && (
                <button onClick={setHome} className={styles.setHome}>Set as home</button>
            )}
        </div>
    )
};

export default LocationInfo;
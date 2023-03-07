import clsx from "clsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import useLocationsFetch from "../../../hooks/useLocationsFetch";
import useOutsideClick from "../../../hooks/useOutsideClick";
import useWeatherInfoFetch from "../../../hooks/useWeatherInfoFetch";
import { ILocation } from "../../../interfaces";
import LocationInfo from "../../core/location/locationInfo";
import WeatherInfo from "../../core/weather/weatherInfo";
import styles from './main.module.css';

const MainPage = () => {
    const [locations, setQuery] = useLocationsFetch();
    const [weatherInfo, setKey, reloadWeatherInfo] = useWeatherInfoFetch();
    const [listOpen, setListOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [activeLocation, setActiveLocation] = useState<ILocation>({} as ILocation);
    const bookmark = useSelector((state: RootState) => state.bookmark);
    const dispatch = useDispatch();
    const queryElementRef = useRef(null);

    useEffect(() => {

    })

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setQuery(event.target.value);

        if (event.target.value.length < 2) {
            setListOpen(false);

            return;
        }

        setListOpen(true);
    }

    const listItemClickHandler = (location: ILocation) => {
        setInputValue('');
        setQuery('');
        setListOpen(false);
        setActiveLocation(location);
        setKey(location.key);
    }

    const inputClickHandler = () => {
        if (locations.type === 'done') {
            setListOpen(true);

            return;
        }

        setListOpen(false);
    }

    useOutsideClick(queryElementRef, () => {
        setListOpen(false);
    })

    return (
        <>
            <div ref={queryElementRef} className={styles.queryWrapper}>
                <input
                    placeholder="Search for a location"
                    value={inputValue}
                    className={clsx(styles.input, listOpen && styles.listOpen)}
                    type="text"
                    onChange={inputChangeHandler}
                    onClick={inputClickHandler}
                />
                <div className={clsx(styles.list, listOpen && styles.open)}>
                    {locations.type === 'done' && locations.data.map(location => (
                        <div
                            key={`loc-item-${location.key}`}
                            className={styles.item}
                            onClick={() => listItemClickHandler(location)}>{location.name}, {location.countryCode}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.infoWrapper}>
                {activeLocation.key && (
                    <LocationInfo location={activeLocation} isHome={bookmark.home.key === activeLocation.key}/>
                )}
                {weatherInfo.type === 'done' && (
                    <WeatherInfo {...weatherInfo.data}/>
                )}
                {weatherInfo.type === 'fail' && ('The weather information request failed.')}
            </div>
            
        </>
    );
};

export default MainPage;
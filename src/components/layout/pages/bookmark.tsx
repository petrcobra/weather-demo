import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import useWeatherInfoFetch from "../../../hooks/useWeatherInfoFetch";
import LocationInfo from "../../core/location/locationInfo";
import WeatherInfo from "../../core/weather/weatherInfo";

const BookmarkPage = () => {
    const bookmark = useSelector((state: RootState) => state.bookmark);
    const [weatherInfo, setKey, reloadWeatherInfo] = useWeatherInfoFetch();

    useEffect(() => {
        setKey(bookmark.home.key);
    }, []);

    return (
        <>
            {!bookmark.home.key && 'No location in bookmark'}
            {bookmark.home.key && (
                <LocationInfo location={bookmark.home} isHome={true}/>
            )}
            {weatherInfo.type === 'done' && (
                <WeatherInfo {...weatherInfo.data}/>
            )}
            {weatherInfo.type === 'fail' && ('The weather information request failed.')}
        </>
    );
};

export default BookmarkPage;
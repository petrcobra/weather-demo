import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { IWeatherInfo } from "../../../interfaces";
import LocationInfo from "../location/locationInfo";
import Temperature from "./temperature";

const WeatherInfo = ({...props}: IWeatherInfo) => {
const unit = useSelector((state: RootState) => state.settings.unit);

    return (
        <>
            <Temperature value={props.temperature[unit]}/>
        </>
    )
};

export default WeatherInfo;
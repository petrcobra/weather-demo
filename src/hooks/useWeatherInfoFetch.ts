import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IWeatherInfo } from "../interfaces/weather";
import useFetch from "./useFetch";

const useWeatherInfoFetch = () => {
    const [key, setKey] = useState<number>();
    const [weatherState, fetchWeather] = useFetch<IWeatherInfo>();
    const details = useSelector((state: RootState) => state.settings.extraInfo);

    const getWeatherInfo = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_ACCU_WEATHER_API_WEATHER}${key}?apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}${details ? '&details=true' : ''}`
        );

        const result = await response.json();

        const extraInfo = details ? {
            realFeelTemperature: {
                C: result[0].RealFeelTemperature.Metric.Value,
                F: result[0].RealFeelTemperature.Imperial.Value,
            }
        } : {};

        return {
            time: result[0].LocalObservationDateTime,
            temperature: {
                C: result[0].Temperature.Metric.Value,
                F: result[0].Temperature.Imperial.Value,
            },
            weatherText: result[0].WeatherText,
            precipitation: result[0].HasPrecipitation ? result[0].PrecipitationType : false,
            ...extraInfo
        };
    }

    const reload = () => {
        if (!key) {
            return;
        }

        fetchWeather(getWeatherInfo);
    }

    useEffect(() => {
        reload();
    }, [key]);

    return [weatherState, setKey, reload] as const;
}

export default useWeatherInfoFetch;
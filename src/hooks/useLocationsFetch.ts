import { useEffect, useState } from "react";
import { ILocation, Signal } from "../interfaces";
import useFetch from "./useFetch";

const useLocationsFetch = () => {
    const [query, setQuery] = useState<string>('');
    const [locationsState, fetchLocations, abortLocationsFetch, clearLocations] = useFetch<ILocation[]>();

    useEffect(() => {
        const getLocations = async (signal: Signal) => {
            const response = await fetch(
                `${process.env.REACT_APP_ACCU_WEATHER_API_LOCATIONS}?q=${query}&apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}`,
                {
                    signal,
                }
            );

            const result = await response.json();
    
            return result.map((location: any) => ({
                key: location.Key,
                name: location.LocalizedName,
                countryCode: location.Country.ID,
            }));
        }

        const handleLocationsFetch = () => {
            if (query.length < 2) {
                clearLocations();

                return;
            }
    
            fetchLocations(getLocations);
        }

        abortLocationsFetch();
        handleLocationsFetch();
    }, [query]);

    return [locationsState, setQuery] as const;
}

export default useLocationsFetch;
export interface IWeatherInfo {
    time: string,
    temperature: {
        C: number,
        F: number,
    },
    weatherText: string,
    precipitation: string | false,
    realFeelTemperature?: {
        C: number,
        F: number,
    },
}
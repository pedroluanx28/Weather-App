import { ResponseWeather, ErrorWeather } from "./"

export function FoundLocal({ weather }: any) {
    if (weather[0] === 'error') {
        return <ErrorWeather />
    }
    else if (weather[0] === 'test') {
        return ' '
    } else {
        return <ResponseWeather weather={weather} weatherNow={weather.weather[0].description} />
    }
}


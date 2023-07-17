interface ResponseWeather {
    weather: {name: string},
    weatherNow: string
}

export function ResponseWeather({ weather, weatherNow}: ResponseWeather) {
    return (
        <div className='responseWeather'>
            <h4 className='cityName'>{!weather ? '' : weather.name}</h4>
            <p className='weather'>{weatherNow}</p>
        </div>
    )
}


export function ErrorWeather() {
    return (
        <div className='responseWeather'>
            <h4 className='cityName' style={{
                color: 'rgb(255, 0, 0)',
                textShadow: 'none'
            }}
            >
                O local inserido não existe, tente novamente...</h4>
        </div>
    )
}

interface PropsDescription {
  weather: {
    weather: {
      length: number,
      description: string
    },
    map: Function
  }
}

interface PropsMap {
  weather: {description: string}
}

export function dataWeatherDescription({ weather }: PropsDescription) {
  if (weather && weather.weather && weather.weather.length > 0) {
    weather.map((w: PropsMap) => {
      return w.weather.description
    })
  }
  return '';
}
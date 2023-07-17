import React, { ChangeEvent } from 'react'
import './Container.css'
import { Api } from '../../Requisition';
import { FoundLocal } from '../../ExportFunctions';


export function Container() {
  const [city, setCity] = React.useState<string>('')
  const [weather, setWeather] = React.useState<string[] | number[]>(['test'])

  async function searchWeather() {
    try {
      const weatherData = await Api.searchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.error(error);
      setWeather(['error'])
    }
  }
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('buttonCity')?.click()
    }
  })

  return (
    <div className='bodyContainer'>
      <h3 className='titleWeatherContainer'>Weather APP</h3>
      <div className='form'>
        <input
          placeholder='País, Estado ou cidade'
          className='inputCity'
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
          value={city}
        />
        <button
          className='buttonCity'
          id='buttonCity'
          onClick={searchWeather}
        >
          Procurar
        </button>
      </div>
      <FoundLocal weather={weather} />
    </div>
  )

}

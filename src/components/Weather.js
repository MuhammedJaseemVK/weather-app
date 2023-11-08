import React from 'react'

function Weather(props) {
  return (
    <div className='flex flex-col gap-1 items-center w-[90%] text-white'>
      <img src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} className='w-auto' alt="" />
      <h1 className='font-bold text-3xl'>{Number(props.weather.temp).toFixed(1)} &deg;c</h1>
      <h1 className='font-bold text-xl'>{props.weather.cityName}</h1>
      <div className='w-full p-3 flex justify-between'>
        <div className='flex gap-2 items-center text-base'>
          <img className='h-[20px]' src="assets/humidity.png" alt="" />
          <div className="flex flex-col">
            <p>{props.weather.humidity} %</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='flex gap-2 items-center text-base'>
          <img className='h-[20px]' src="assets/wind.png" alt="" />
          <div className="flex flex-col">
            <p>{Number((props.weather.windSpeed)*(18/5)).toFixed(1)} Km/hr</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
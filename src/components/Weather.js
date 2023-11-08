import React from 'react'

function Weather(props) {
  return (
    <div className='flex flex-col gap-5 items-center bg-orange-500 w-[90%] text-black'>
      <img src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} className='h-100' alt="" />
      <h1 className='font-bold'>{props.weather.temp} &#8451;</h1>
      <h2 className='font-bold'>{props.weather.name}</h2>
      <div className='w-full p-3 flex justify-between'>
        <div className='flex gap-2 items-start'>
          <img className='h-[20px]' src="assets/humidity.png" alt="" />
          <div className="flex flex-col">
            <p>{props.weather.humidity} %</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='flex gap-2 items-start'>
          <img className='h-[20px]' src="assets/wind.png" alt="" />
          <div className="flex flex-col">
            <p>{Number((props.weather.windSpeed)*(18/5)).toFixed(1)} Km/hr</p>
            <p>windspeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
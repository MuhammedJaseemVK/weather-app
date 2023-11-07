import React from 'react'

function Weather(props) {
  return (
    <div className='flex flex-col gap-5 items-center bg-orange-500 w-[90%] text-black'>
      <img src="assets/cloud.png" alt="" />
      <h1>{props.weather.temp}</h1>
      <h2>London</h2>
      <div className='w-full p-3 flex justify-between'>
        <div className='flex gap-2 items-start'>
          <img className='h-[20px]' src="assets/humidity.png" alt="" />
          <div className="flex flex-col">
            <p>{props.weather.humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='flex gap-2 items-start'>
          <img className='h-[20px]' src="assets/wind.png" alt="" />
          <div className="flex flex-col">
            <p>{props.weather.windSpeed}</p>
            <p>windspeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
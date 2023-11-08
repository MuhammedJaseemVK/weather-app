import { useEffect, useState } from 'react';
import './App.css';
import Api from './components/api/api';

function App() {
  const [city, setCity] = useState('');
  const [trigger,setTrigger] =useState(0);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  }

  const handleKeyDown = (e)=>{
    if(e.key==='Enter'){
      setTrigger(trigger+1)
    }
  }

  useEffect(()=>{
    setCity('London');
    setTrigger(trigger+1)
  },[])

  return (
    <div className='flex justify-center items-center h-screen bg-slate-700 '>
      <div className='flex flex-col items-center gap-2 p-3 bg-blue-500 rounded-md'>
        <p className='font-bold'>Weather App</p>
        <div className='flex gap-2'>
          <input type='text' className='rounded-xl px-2' placeholder='Enter a city' onKeyDown={handleKeyDown} value={city} onChange={handleOnChange} />
          <img className='rounded-xl bg-white p-1' src='assets/search.png' alt='search' onClick={()=>{setTrigger(trigger+1)}} />
        </div>
        <Api city={city} trigger={trigger} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;

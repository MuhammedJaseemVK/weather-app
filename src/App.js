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
    <div className='flex justify-center items-center h-screen bg-slate-900'>
      <div className='flex flex-col items-center gap-2 p-3 bg-gradient-to-b from-violet-600 to-indigo-600 rounded-md w-80 h-80'>
        <p className='font-bold text-white text-xl'>Weather App</p>
        <div className='flex gap-2 w-full'>
          <input type='text' className='rounded-xl px-2' placeholder='Enter a city' name='city' onKeyDown={handleKeyDown} value={city} onChange={handleOnChange} />
          <img className='rounded-full bg-white p-1' src='assets/search.png' alt='search' onClick={()=>{setTrigger(trigger+1)}} />
        </div>
        <Api city={city} trigger={trigger} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;

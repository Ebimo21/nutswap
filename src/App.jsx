import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PercentBadge from './components/percent_badge'
import Pricing from './components/pricing'
import ConnectWallet from './components/button/connectWallet'
import Chart from './components/mini-chart'
import CustomSelect from './components/select-drop-down'
import Settings from './components/settings'

function App() {
  const [count, setCount] = useState(0);
  const [ settingsOpen, setSettingsOpen ] = useState(false);

  const stopPropagation = (e) => {e.stopPropagation()};

  const handleOpenSettings =()=> setSettingsOpen(!settingsOpen);

  return (
    <div className='py-7 px-4 bg-[#121111e6] font-Urbanist'>
      <div>

        <div className='flex items-center justify-between'>
          <img src='/Nutswap_logo_white_coin 1.png' height="16px" width="138px" alt='logo' />
          
          <div className='py-[10px] px-3 font-medium text-white flex justify-center items-center gap-2 border-solid border-[0.1px] border-[#FFFF6C] rounded-2xl'>
            <img src='/logo.png' />
            <span>Connect</span>
          </div>
        </div>
      </div>

      <div className='mt-12 mx-4'>

      <div className='flex gap-2 items-center justify-end'>
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_570)">
        <path d="M19.1666 3.33337V8.33337H14.1666" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.833374 16.6666V11.6666H5.83337" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.92504 7.49998C3.34768 6.30564 4.06599 5.23782 5.01293 4.39616C5.95987 3.55451 7.1046 2.96645 8.34028 2.68686C9.57596 2.40727 10.8623 2.44527 12.0794 2.79729C13.2964 3.14932 14.4044 3.80391 15.3 4.69998L19.1667 8.33331M0.833374 11.6666L4.70004 15.3C5.59566 16.1961 6.70369 16.8506 7.92072 17.2027C9.13775 17.5547 10.4241 17.5927 11.6598 17.3131C12.8955 17.0335 14.0402 16.4455 14.9872 15.6038C15.9341 14.7621 16.6524 13.6943 17.075 12.5" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1_570">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg onClick={handleOpenSettings} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_574)">
        <path d="M3.33337 17.5V11.6666" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33337 8.33333V2.5" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 17.5V10" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 6.66667V2.5" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6666 17.5V13.3334" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6666 10V2.5" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.833374 11.6666H5.83337" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 6.66663H12.5" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.1666 13.3334H19.1666" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1_574">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </div>

      <div className='bg-[#574c374b] p-4 mt-4 rounded-3xl border-[3px] border-[#FFFF6C] border-solid'>
        <form>
          <div>
            <CustomSelect preset="TON" src="/logo.png" />
            <input type='text' className='w-full p-4 bg-[#3B3626] rounded-lg' />
          </div>

          <div className='flex items-center justify-center mt-6'>
            <div className='bg-[#574C37] rounded-full'>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L12 18L17 13" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 6L12 11L17 6" stroke="#FFFF6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

          </div>

          <div>
            <CustomSelect preset="NUT" src="nuts.png"/>
            <input type='text' className='w-full p-4 bg-[#3B3626] rounded-lg' />
          </div>
          <div className='flex items-center justify-center gap-5 my-4'>
            <PercentBadge amount={"25%"} />
            <PercentBadge amount={"50%"} />
            <PercentBadge amount={"75%"} />
            <PercentBadge amount={"MAX"} />
          </div>
        </form>
        
        <Pricing />
        <ConnectWallet />
      </div>

      <Chart />
      { settingsOpen && (
        <div onClick={handleOpenSettings} className='absolute top-0 left-0  w-full h-screen bg-[rgba(255,255,108,0.5)]'>
          {/* <div>How</div> */}
          <Settings stopFn={stopPropagation} />
        </div>
        )}
      {/* <hr className='my-10' /> */}

      

      </div>
    </div>
  )
}

export default App

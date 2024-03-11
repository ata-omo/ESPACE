import React from 'react'
import image from '../assets/espace_white.svg'
import LightModeIcon from '@mui/icons-material/LightMode';

const Login = () => {
  return (
    <div className="bg-customBlack h-screen w-screen text-white ">
        <div className=' flex w-screen justify-between'>
            <img src={image} alt=""  className='h-16 w-40 ml-12 mt-8'/>
            <button className='mr-12 mt-10'>
                <LightModeIcon style={{fontSize:40}}/>
            </button>
        </div>
        <div className='mt-14'>
            <span style={{fontFamily:'logoCustomFont'}} className='text-4xl flex justify-around text-logoCustomFont'>REGISTER</span>
            <div className='mt-4 border border-2 border-solid p-4'>

            </div>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import whitelogo from '../assets/espace_white.svg'
import darklogo from '../assets/espace_black.svg'
import googleWhite from '../assets/google_white.svg'
import googleDark from '../assets/google_black.svg'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import useTheme from '../Store/theme.js';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const goToRegister = async ()=>{
    return navigate("/register");
  }

  const {dark,lightMode,darkMode} = useTheme();

  const handleThemeButtonClick = ()=>{
    // console.log("hello world")
      if(dark){
        lightMode();
      }
      else{
        darkMode();
      }
  }
  return (
    <div className="dark:bg-customBlack bg-white h-screen w-screen dark:text-white text-customBlack">
        <div className=' h-auto flex w-screen justify-between'>
            <img src={dark ? `${whitelogo}` : `${darklogo}`} alt=""  className='h-16 w-40 ml-12 mt-8'/>
            <button className='mr-12 mt-10' onClick={handleThemeButtonClick}>
                {dark ? (<LightModeIcon style={{fontSize:40}}/>) :(<NightsStaySharpIcon style={{fontSize:40}}/>)}
            </button>
        </div>
        <div className='w-screen h-1/2 mt-20 flex justify-center flex-col items-center'>
            <span style={{fontFamily:'logoCustomFont'}} className='text-4xl flex justify-around text-logoCustomFont'>LOGIN</span>
            <div className='w-1/3  h-4/5  mt-4 border-2 border-solid border-customBlack dark:border-customWhite rounded-xl'>

              <div className='w-full'>
                <label htmlFor="email" className='block font-semibold ml-10 mt-6'>Email *</label>
                <input type='email' className='ml-10 border-solid rounded-md h-8 text-customBlack' style={{width:'87%'}} />
              </div>
              <div className='w-full'>
                <label htmlFor="password" className='block font-semibold ml-10 mt-6'>Enter Password *</label>
                <input type='password' className='ml-10 border-solid rounded-md h-8 text-customBlack' style={{width:'87%'}} />
              </div>

              <div className='w-full flex justify-center items-center mt-8'>
                <button className='block font-semibold dark:bg-white bg-customBlack dark:text-customBlack text-white w-20 h-15 rounded pt-1'>SUBMIT</button>
              </div>
              <div className='flex items-center justify-center mt-4'>
                <img src={dark?`${googleWhite}`:`${googleDark}`} alt="" className='h-10 w-10 mr-4'/>
                <span className='font-semibold text-xl'>SignIn With Google</span>
              </div>

              <div className='w-full flex justify-center mt-4'>
                <span className='font-semibold mr-2 mt-1'>New User?</span>
                <button className='block font-semibold dark:bg-white bg-customBlack dark:text-customBlack text-customWhite w-16 h-6 rounded pt-1 text-sm ' onClick={goToRegister}>Register</button>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Login;
import { Image } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LaunchList } from './components/launchList';
import { LaunchDetail } from './components/launchDetail';
import { RocketsDetail } from './components/RocketsDetail';

import logo from './assets/logo-spacex.png';


export function App() {
  return (
    <>
      <Image m={4} src={logo} width={400} />
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetail />} />
        <Route path='rockets/:rocketId' element={<RocketsDetail />} />
      </Routes>
      
    </>
    
  )
}



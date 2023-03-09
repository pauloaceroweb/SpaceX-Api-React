import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import * as API from './services/launches';
import logo from './assets/logo-spacex.png';
import { LaunchItem } from './components/launchItem';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  
  return (
    <>
      <Image m={4} src={logo} width={400} />
      <Heading as="h1" size="lg" m={4} >
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
    
  )
}


